import { Cormorant_Garamond, Manrope, Noto_Sans_Arabic } from "next/font/google";

export const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const editorial = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-editorial",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const fontVariables = `${arabic.variable} ${manrope.variable} ${editorial.variable}`;
