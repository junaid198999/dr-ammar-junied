import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { content } from "../lib/site-data.ts";

const localeDefinitions = [
  { code: "fr", translateCode: "fr", nativeName: "Français", dir: "ltr" },
  { code: "es", translateCode: "es", nativeName: "Español", dir: "ltr" },
  { code: "de", translateCode: "de", nativeName: "Deutsch", dir: "ltr" },
  { code: "it", translateCode: "it", nativeName: "Italiano", dir: "ltr" },
  { code: "pt", translateCode: "pt", nativeName: "Português", dir: "ltr" },
  { code: "ru", translateCode: "ru", nativeName: "Русский", dir: "ltr" },
  { code: "tr", translateCode: "tr", nativeName: "Türkçe", dir: "ltr" },
  { code: "fa", translateCode: "fa", nativeName: "فارسی", dir: "rtl" },
  { code: "ur", translateCode: "ur", nativeName: "اردو", dir: "rtl" },
  { code: "hi", translateCode: "hi", nativeName: "हिन्दी", dir: "ltr" },
  { code: "bn", translateCode: "bn", nativeName: "বাংলা", dir: "ltr" },
  { code: "zh", translateCode: "zh-CN", nativeName: "简体中文", dir: "ltr" },
  { code: "ja", translateCode: "ja", nativeName: "日本語", dir: "ltr" },
  { code: "ko", translateCode: "ko", nativeName: "한국어", dir: "ltr" },
  { code: "id", translateCode: "id", nativeName: "Bahasa Indonesia", dir: "ltr" },
  { code: "ms", translateCode: "ms", nativeName: "Bahasa Melayu", dir: "ltr" },
  { code: "th", translateCode: "th", nativeName: "ไทย", dir: "ltr" },
  { code: "vi", translateCode: "vi", nativeName: "Tiếng Việt", dir: "ltr" },
  { code: "fil", translateCode: "fil", nativeName: "Filipino", dir: "ltr" },
  { code: "sw", translateCode: "sw", nativeName: "Kiswahili", dir: "ltr" },
  { code: "nl", translateCode: "nl", nativeName: "Nederlands", dir: "ltr" },
  { code: "pl", translateCode: "pl", nativeName: "Polski", dir: "ltr" },
  { code: "ro", translateCode: "ro", nativeName: "Română", dir: "ltr" },
  { code: "el", translateCode: "el", nativeName: "Ελληνικά", dir: "ltr" },
  { code: "uk", translateCode: "uk", nativeName: "Українська", dir: "ltr" },
  { code: "cs", translateCode: "cs", nativeName: "Čeština", dir: "ltr" },
  { code: "sv", translateCode: "sv", nativeName: "Svenska", dir: "ltr" },
];

const separator = "<#|#|#|#|#>";
const protectedTerms = [
  ["Dr. Ammar Junied", "[[DR_AMMAR_JUNIED]]"],
  ["Ammar Junied", "[[AMMAR_JUNIED]]"],
  ["Arak Taba Medical Center", "[[ARAK_TABA_MEDICAL_CENTER]]"],
  ["Arak Taba", "[[ARAK_TABA]]"],
  ["WhatsApp", "[[WHATSAPP]]"],
  ["Instagram", "[[INSTAGRAM]]"],
  ["Facebook", "[[FACEBOOK]]"],
];

const englishSource = {
  ...structuredClone(content.en),
  skipToContent: "Skip to content",
  mainNavigation: "Main navigation",
  doctorHighlights: "Doctor highlights",
  officialProfile: "Official doctor profile",
  languageMenu: "Language",
  chooseLanguage: "Choose your language",
  bookingMessage:
    "Hello, I would like to book an orthodontic assessment with Dr. Ammar Junied.",
};

function shouldTranslate(path, value) {
  const key = path.at(-1);

  if (["lang", "dir", "languageLabel", "languageHref", "href", "image", "source", "number", "value", "cardLabel", "cardTitle", "instagram"].includes(key)) {
    return false;
  }

  if (/^(?:https?:\/\/|\/|#|\+?\d[\d\s:+.–—-]*)$/.test(value)) {
    return false;
  }

  return true;
}

function collectStrings(value, path = [], entries = []) {
  if (typeof value === "string") {
    if (shouldTranslate(path, value)) entries.push({ path, value });
    return entries;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => collectStrings(item, [...path, index], entries));
    return entries;
  }

  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, item]) => collectStrings(item, [...path, key], entries));
  }

  return entries;
}

function setAtPath(target, path, value) {
  let cursor = target;
  for (let index = 0; index < path.length - 1; index += 1) cursor = cursor[path[index]];
  cursor[path.at(-1)] = value;
}

function protect(value) {
  return protectedTerms.reduce(
    (text, [term, token]) => text.replaceAll(term, token),
    value,
  );
}

function restore(value) {
  const restored = protectedTerms.reduce(
    (text, [term, token]) => text.replaceAll(token, term),
    value,
  );

  return restored
    .replace(/\[\[\s*WHATSAPP\s*\]\]/giu, "WhatsApp")
    .replace(/\[\[\s*व्हाट्सएप\s*\]\]/gu, "WhatsApp");
}

function makeBatches(entries, maximumCharacters = 3500) {
  const batches = [];
  let current = [];
  let currentLength = 0;

  for (const entry of entries) {
    const length = protect(entry.value).length + separator.length + 2;
    if (current.length && currentLength + length > maximumCharacters) {
      batches.push(current);
      current = [];
      currentLength = 0;
    }
    current.push(entry);
    currentLength += length;
  }

  if (current.length) batches.push(current);
  return batches;
}

async function translateBatch(entries, targetLanguage, attempt = 1) {
  const query = entries.map((entry) => protect(entry.value)).join(`\n${separator}\n`);
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.search = new URLSearchParams({
    client: "gtx",
    sl: "en",
    tl: targetLanguage,
    dt: "t",
    q: query,
  }).toString();

  const response = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) {
    if (attempt < 4) {
      await new Promise((resolveDelay) => setTimeout(resolveDelay, 1000 * attempt));
      return translateBatch(entries, targetLanguage, attempt + 1);
    }
    throw new Error(`Translation failed for ${targetLanguage}: ${response.status}`);
  }

  const payload = await response.json();
  const translated = payload[0].map((segment) => segment[0]).join("");
  const values = translated.split(separator).map((value) => restore(value.trim()));

  if (values.length !== entries.length) {
    if (entries.length > 1) {
      const middle = Math.ceil(entries.length / 2);
      const first = await translateBatch(entries.slice(0, middle), targetLanguage);
      const second = await translateBatch(entries.slice(middle), targetLanguage);
      return [...first, ...second];
    }
    throw new Error(`Translation segment mismatch for ${targetLanguage}: expected 1, received ${values.length}`);
  }

  return values;
}

async function translateLocale(definition) {
  const translatedCopy = structuredClone(englishSource);
  const entries = collectStrings(englishSource);
  const batches = makeBatches(entries);
  let translatedCount = 0;

  for (const batch of batches) {
    const values = await translateBatch(batch, definition.translateCode);
    batch.forEach((entry, index) => setAtPath(translatedCopy, entry.path, values[index]));
    translatedCount += batch.length;
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 180));
  }

  translatedCopy.lang = definition.code;
  translatedCopy.dir = definition.dir;
  translatedCopy.languageLabel = definition.nativeName;
  translatedCopy.languageHref = `/${definition.code}`;

  console.log(`${definition.code}: translated ${translatedCount} strings in ${batches.length} batches`);
  return translatedCopy;
}

const translations = {};
for (const definition of localeDefinitions) {
  translations[definition.code] = await translateLocale(definition);
}

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(scriptDirectory, "../lib/translations.generated.json");
await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(translations, null, 2)}\n`, "utf8");
console.log(`Wrote ${localeDefinitions.length} locale files to ${outputPath}`);
