import { notFound } from "next/navigation";
import { fontVariables } from "@/app/_fonts";
import { getLanguage, isLocale } from "@/lib/i18n";
import "../../globals.css";

type LocalizedLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function LocalizedRootLayout({ children, params }: LocalizedLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "ar") notFound();

  const language = getLanguage(locale);

  return (
    <html lang={language.htmlLang} dir={language.dir} className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
