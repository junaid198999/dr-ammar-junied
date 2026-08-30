export const languages = [
  { code: "ar", htmlLang: "ar", nativeName: "العربية", englishName: "Arabic", dir: "rtl", ogLocale: "ar_SA" },
  { code: "en", htmlLang: "en", nativeName: "English", englishName: "English", dir: "ltr", ogLocale: "en_US" },
  { code: "fr", htmlLang: "fr", nativeName: "Français", englishName: "French", dir: "ltr", ogLocale: "fr_FR" },
  { code: "es", htmlLang: "es", nativeName: "Español", englishName: "Spanish", dir: "ltr", ogLocale: "es_ES" },
  { code: "de", htmlLang: "de", nativeName: "Deutsch", englishName: "German", dir: "ltr", ogLocale: "de_DE" },
  { code: "it", htmlLang: "it", nativeName: "Italiano", englishName: "Italian", dir: "ltr", ogLocale: "it_IT" },
  { code: "pt", htmlLang: "pt", nativeName: "Português", englishName: "Portuguese", dir: "ltr", ogLocale: "pt_BR" },
  { code: "ru", htmlLang: "ru", nativeName: "Русский", englishName: "Russian", dir: "ltr", ogLocale: "ru_RU" },
  { code: "tr", htmlLang: "tr", nativeName: "Türkçe", englishName: "Turkish", dir: "ltr", ogLocale: "tr_TR" },
  { code: "fa", htmlLang: "fa", nativeName: "فارسی", englishName: "Persian", dir: "rtl", ogLocale: "fa_IR" },
  { code: "ur", htmlLang: "ur", nativeName: "اردو", englishName: "Urdu", dir: "rtl", ogLocale: "ur_PK" },
  { code: "hi", htmlLang: "hi", nativeName: "हिन्दी", englishName: "Hindi", dir: "ltr", ogLocale: "hi_IN" },
  { code: "bn", htmlLang: "bn", nativeName: "বাংলা", englishName: "Bengali", dir: "ltr", ogLocale: "bn_BD" },
  { code: "zh", htmlLang: "zh-Hans", nativeName: "简体中文", englishName: "Chinese", dir: "ltr", ogLocale: "zh_CN" },
  { code: "ja", htmlLang: "ja", nativeName: "日本語", englishName: "Japanese", dir: "ltr", ogLocale: "ja_JP" },
  { code: "ko", htmlLang: "ko", nativeName: "한국어", englishName: "Korean", dir: "ltr", ogLocale: "ko_KR" },
  { code: "id", htmlLang: "id", nativeName: "Bahasa Indonesia", englishName: "Indonesian", dir: "ltr", ogLocale: "id_ID" },
  { code: "ms", htmlLang: "ms", nativeName: "Bahasa Melayu", englishName: "Malay", dir: "ltr", ogLocale: "ms_MY" },
  { code: "th", htmlLang: "th", nativeName: "ไทย", englishName: "Thai", dir: "ltr", ogLocale: "th_TH" },
  { code: "vi", htmlLang: "vi", nativeName: "Tiếng Việt", englishName: "Vietnamese", dir: "ltr", ogLocale: "vi_VN" },
  { code: "fil", htmlLang: "fil", nativeName: "Filipino", englishName: "Filipino", dir: "ltr", ogLocale: "fil_PH" },
  { code: "sw", htmlLang: "sw", nativeName: "Kiswahili", englishName: "Swahili", dir: "ltr", ogLocale: "sw_KE" },
  { code: "nl", htmlLang: "nl", nativeName: "Nederlands", englishName: "Dutch", dir: "ltr", ogLocale: "nl_NL" },
  { code: "pl", htmlLang: "pl", nativeName: "Polski", englishName: "Polish", dir: "ltr", ogLocale: "pl_PL" },
  { code: "ro", htmlLang: "ro", nativeName: "Română", englishName: "Romanian", dir: "ltr", ogLocale: "ro_RO" },
  { code: "el", htmlLang: "el", nativeName: "Ελληνικά", englishName: "Greek", dir: "ltr", ogLocale: "el_GR" },
  { code: "uk", htmlLang: "uk", nativeName: "Українська", englishName: "Ukrainian", dir: "ltr", ogLocale: "uk_UA" },
  { code: "cs", htmlLang: "cs", nativeName: "Čeština", englishName: "Czech", dir: "ltr", ogLocale: "cs_CZ" },
  { code: "sv", htmlLang: "sv", nativeName: "Svenska", englishName: "Swedish", dir: "ltr", ogLocale: "sv_SE" },
] as const;

export type Locale = (typeof languages)[number]["code"];
export type TextDirection = (typeof languages)[number]["dir"];

const localeCodes = new Set<string>(languages.map((language) => language.code));

export const localizedLanguages = languages.filter((language) => language.code !== "ar");

export function isLocale(value: string): value is Locale {
  return localeCodes.has(value);
}

export function getLanguage(locale: Locale) {
  return languages.find((language) => language.code === locale) ?? languages[0];
}

export function localePath(locale: Locale) {
  return locale === "ar" ? "/" : `/${locale}`;
}

export const languageAlternates = Object.fromEntries(
  languages.map((language) => [language.htmlLang, localePath(language.code)]),
) as Record<string, string>;
