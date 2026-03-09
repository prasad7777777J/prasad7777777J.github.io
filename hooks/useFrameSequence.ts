"use client";

import { useEffect, useRef, useState } from "react";

interface UseFrameSequenceOptions {
  paths: string[];
  onLoad?: (index: number) => void;
  onAllLoaded?: () => void;
}

export interface FrameSequenceResult {
  images: (HTMLImageElement | null)[];
  loadedCount: number;
  isReady: boolean; // true when first frame is loaded
  progress: number; // 0–1 loading progress
}

/**
 * Preloads an array of image paths into HTMLImageElement references.
 * Returns a stable array ref you can index into for canvas rendering.
 */
export function useFrameSequence({
  paths,
  onLoad,
  onAllLoaded,
}: UseFrameSequenceOptions): FrameSequenceResult {
  const imagesRef = useRef<(HTMLImageElement | null)[]>(
    new Array(paths.length).fill(null)
  );
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (paths.length === 0) return;

    let mounted = true;
    let count = 0;

    const loadImage = (i: number) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          if (!mounted) return resolve();
          imagesRef.current[i] = img;
          count++;
          if (i === 0) setIsReady(true);
          setLoadedCount(count);
          onLoad?.(i);
          if (count === paths.length) onAllLoaded?.();
          resolve();
        };
        img.onerror = () => {
          count++;
          setLoadedCount(count);
          resolve();
        };
        // Stagger loads slightly so browser doesn't choke
        setTimeout(() => {
          img.src = paths[i];
        }, i * 6);
      });
    };

    // Load all in parallel (with small stagger)
    paths.forEach((_, i) => loadImage(i));

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  return {
    images: imagesRef.current,
    loadedCount,
    isReady,
    progress: paths.length > 0 ? loadedCount / paths.length : 0,
  };
}
