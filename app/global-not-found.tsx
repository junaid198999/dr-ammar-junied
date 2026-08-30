import type { Metadata } from "next";
import Link from "next/link";
import { fontVariables } from "@/app/_fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dr-ammar.com"),
  title: "404 | Dr. Ammar Junied",
  description: "The requested page could not be found.",
};

export default function GlobalNotFound() {
  return (
    <html lang="ar" dir="rtl" className={fontVariables}>
      <body>
        <main className="not-found">
          <span>404</span>
          <h1>الصفحة غير موجودة</h1>
          <p>The requested page could not be found.</p>
          <Link className="button button-dark" href="/">العودة للرئيسية</Link>
        </main>
      </body>
    </html>
  );
}
