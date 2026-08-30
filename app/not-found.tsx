import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found" dir="rtl">
      <span>404</span>
      <h1>الصفحة غير موجودة</h1>
      <p>قد يكون الرابط تغير أو لم يعد متاحًا.</p>
      <Link className="button button-dark" href="/">العودة للرئيسية</Link>
    </main>
  );
}
