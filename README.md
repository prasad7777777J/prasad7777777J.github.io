# ✦ Scrollytelling Portfolio

A high-end, scroll-linked image sequence portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add your image sequence (see below)

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🖼️ Image Sequence Setup

The scrollytelling hero requires your WebP frames placed in:

```
public/
  sequence/
    frame_00_delay-0.067s.webp
    frame_01_delay-0.067s.webp
    ...
    frame_88_delay-0.067s.webp
```

### Changing frame count or naming

Open `components/ScrollyCanvas.tsx` and update these two constants at the top:

```ts
const TOTAL_FRAMES = 89;        // Total number of frames
const DELAY = "0.067s";         // Delay string in the filename
```

The path generator produces: `/sequence/frame_XX_delay-{DELAY}.webp`  
where `XX` is zero-padded (00, 01 … 88).

If your filenames are different, modify `getFramePath()` directly.

---

## 📁 Project Structure

```
app/
  layout.tsx          Root layout, metadata, CustomCursor
  page.tsx            Assembles all sections
  globals.css         Global styles, CSS variables, grain overlay

components/
  ScrollyCanvas.tsx   ★ Core: canvas-based image sequence + sticky scroller
  Overlay.tsx         Parallax text sections (z-index 10 over canvas)
  Navigation.tsx      Fixed nav with scroll-aware backdrop
  Projects.tsx        Work grid with glassmorphism cards
  About.tsx           Bio, services list, skills marquee
  Footer.tsx          Contact CTA + social links
  CustomCursor.tsx    Spring-based custom cursor with hover states

hooks/
  useFrameSequence.ts  Reusable image preloading hook

public/
  sequence/           ← YOUR IMAGES GO HERE
```

---

## 🎨 Customisation

### Colors (`tailwind.config.ts` + `globals.css`)
| Variable | Default | Usage |
|---|---|---|
| `--bg` | `#0A0A0A` | Page background |
| `--accent-lime` | `#D4FF4D` | Primary accent |
| `--accent-red` | `#FF3B2F` | Danger / secondary |
| `--text-primary` | `#F0EDE8` | Headings |
| `--text-secondary` | `#8A8680` | Body text |

> **Important:** Set `--bg` to match the background of your video frames for seamless blending.

### Fonts
The site uses **Syne** (display) + **DM Sans** (body) + **DM Mono** (mono). Swap them in `globals.css` `@import` and update `font-family` CSS variables.

### Text sections (`components/Overlay.tsx`)
Each `<ParallaxText>` accepts a `visibleRange` tuple `[fadeIn, peakStart, peakEnd, fadeOut]` in 0–1 scroll space:

```tsx
<ParallaxText
  scrollYProgress={scrollYProgress}
  visibleRange={[0.26, 0.32, 0.44, 0.5]}   // ← adjust timing here
  className="left-[8vw] top-1/2 -translate-y-1/2"
>
  ...
</ParallaxText>
```

### Projects (`components/Projects.tsx`)
Edit the `PROJECTS` array at the top of the file. Set `size: "large"` for a card that spans 2 columns.

---

## ⚙️ Performance Notes

- Images are staggered-loaded (`8ms` apart) to avoid saturating bandwidth.
- Canvas uses `requestAnimationFrame` for draw calls — no jank on scroll.
- `object-fit: cover` logic is implemented manually for the canvas so images fill the viewport correctly at any aspect ratio.
- The `useMotionValueEvent` hook prevents unnecessary re-renders; only the canvas draw call fires on scroll.

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 14.2.5 | Framework (App Router) |
| React | 18 | UI |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11 | Scroll hooks, animations |

---

## 🔧 Build for Production

```bash
npm run build
npm start
```

---

*Built with obsessive attention to detail.*
