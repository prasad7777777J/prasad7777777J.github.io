import type { Metadata } from "next";
import "./globals.css";
import CursorWrapper from "@/components/CursorWrapper";

export const metadata: Metadata = {
  title: "Portfolio — Creative Developer",
  description: "Building digital experiences that bridge design and engineering.",
  openGraph: {
    title: "Portfolio — Creative Developer",
    description: "Building digital experiences that bridge design and engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0A0A0A] text-[#F0EDE8] antialiased">
        <CursorWrapper />
        {children}
      </body>
    </html>
  );
}