# Dr. Ammar Junied — Orthodontist

موقع احترافي بـ 29 لغة لد. عمار جنيد، أخصائي تقويم الأسنان وتجميل الفكين في المدينة المنورة. بُني باستخدام Next.js App Router وTypeScript، ويعمل كموقع ثابت سريع لا يحتاج إلى قاعدة بيانات أو متغيرات بيئة.

## التشغيل محليًا

```bash
npm install
npm run dev
```

- العربية: `http://localhost:3000`
- English: `http://localhost:3000/en`
- بقية اللغات: `/{language-code}` مثل `/fr` و`/zh` و`/fa`

اللغات المدعومة معرفة مركزيًا في `lib/i18n.ts`. جميع الترجمات الثابتة موجودة في `lib/translations.generated.json`، ويمكن إعادة توليدها بعد تعديل النسخة الإنجليزية عبر:

```bash
npm run translations
```

## التحقق والبناء

```bash
npm run typecheck
npm run lint
npm run build
```

## النشر على Vercel

1. افتح Vercel واختر **Add New → Project**.
2. استورد مستودع GitHub هذا.
3. سيكتشف Vercel إعداد Next.js تلقائيًا؛ لا توجد متغيرات بيئة مطلوبة.
4. اضغط **Deploy**.
5. من **Project Settings → Domains** أضف `dr-ammar.com` و`www.dr-ammar.com` واتبع قيم DNS التي يعرضها Vercel.
6. اختر نطاقًا أساسيًا واحدًا وأعد توجيه الآخر إليه.

## المحتوى والهوية

- الشعار المعتمد: `public/brand/logo.svg`
- علامة AJ: `public/brand/mark.svg`
- النصوص وبيانات التواصل: `lib/site-data.ts`
- ملف البحث والمصادر وملاحظات التحقق: `docs/research-and-brand-direction.ar.md`

تهجئة العلامة المستخدمة في الموقع هي **DR. AMMAR JUNIED**، مطابقة لاسم المستخدم العام `dr_ammar_junied`. لم تُنشر تفاصيل الدرجة الفرنسية أو الجامعة لأنها تحتاج وثائق أو تأكيدًا مباشرًا من الطبيب.

## ما قبل الإطلاق

- استبدال أي معلومات تتغير بعد تأكيدها من العيادة، خصوصًا المواعيد.
- إضافة CV موثق وصورة شخصية احترافية إذا أراد الطبيب نشرهما.
- مراجعة المؤهلات والتصنيف المهني والنص الطبي مع د. عمار.
- التحقق من جميع أزرار الاتصال وWhatsApp بعد ربط النطاق.
