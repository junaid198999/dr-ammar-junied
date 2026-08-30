export type Locale = "ar" | "en";

export const siteInfo = {
  name: "Dr. Ammar Junied",
  arabicName: "د. عمار جنيد",
  specialtyAr: "أخصائي تقويم الأسنان وتجميل الفكين",
  specialtyEn: "Orthodontist & Dentofacial Aesthetics Specialist",
  directPhone: "+966560222474",
  directPhoneDisplay: "056 022 2474",
  clinicPhones: [
    { href: "+966500026075", display: "050 002 6075" },
    { href: "+966500023075", display: "050 002 3075" },
  ],
  clinicEmail: "info@arac-tabah.com",
  instagram: "https://www.instagram.com/dr_ammar_junied/",
  facebook: "https://www.facebook.com/clinic.dr.ammar",
  clinicWebsite: "https://www.arac-tabah.com/",
  doctorProfile:
    "https://www.arac-tabah.com/%D8%AD%D8%AC%D8%B2-%D9%85%D9%88%D8%B9%D8%AF/%D8%AF-%D8%B9%D9%85%D8%A7%D8%B1-%D8%AC%D9%86%D9%8A%D8%AF",
  maps:
    "https://www.google.com/maps/search/?api=1&query=%D9%85%D8%AC%D9%85%D8%B9+%D8%A2%D8%B1%D8%A7%D9%83+%D8%B7%D8%A7%D8%A8%D8%A7+%D8%A7%D9%84%D8%B7%D8%A8%D9%8A+%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B1%D8%A9",
} as const;

export const content = {
  ar: {
    lang: "ar",
    dir: "rtl",
    languageLabel: "EN",
    languageHref: "/en",
    nav: [
      { label: "التخصص", href: "#expertise" },
      { label: "العروض", href: "#offers" },
      { label: "عن الطبيب", href: "#about" },
      { label: "رحلتك", href: "#journey" },
      { label: "الموقع", href: "#location" },
    ],
    book: "احجز موعدك",
    call: "اتصل الآن",
    directions: "الاتجاهات",
    instagram: "Instagram",
    hero: {
      eyebrow: "تقويم الأسنان · المدينة المنورة",
      title: "ابتسامة متوازنة.",
      accent: "ثقة تدوم.",
      description:
        "رعاية متخصصة في تقويم الأسنان وتجميل الفكين، بخطة واضحة ومتابعة دقيقة لكل حالة في مجمع آراك طابا الطبي.",
      primary: "احجز عبر واتساب",
      secondary: "اكتشف التخصص",
      cardLabel: "DR. AMMAR JUNIED",
      cardTitle: "ORTHODONTIST",
      cardNote: "دقة في التشخيص. وضوح في الخطة. اهتمام في المتابعة.",
      photoAlt: "زائرة سعودية في أجواء عيادة تقويم أسنان حديثة",
      trust: [
        "أخصائي تقويم الأسنان وتجميل الفكين",
        "خبرة تمتد لأكثر من 10 سنوات",
        "استقبال حالات التقويم الصعبة",
      ],
    },
    expertise: {
      eyebrow: "مجال التخصص",
      title: "تقويم مصمم حول حالتك، لا حول قالب واحد.",
      description:
        "يبدأ القرار الصحيح بفهم دقيق للإطباق، موضع الأسنان، وتوقعات المريض. لذلك تتقدم الخطة خطوة بخطوة من التقييم إلى المتابعة.",
      services: [
        {
          number: "01",
          title: "تقييم تقويمي شامل",
          text: "قراءة دقيقة للحالة ومناقشة الأهداف قبل تحديد المسار العلاجي المناسب.",
        },
        {
          number: "02",
          title: "تقويم الأسنان وتجميل الفكين",
          text: "خطط تقويم متخصصة تهدف إلى تحسين الاصطفاف، الإطباق، وتناسق الابتسامة.",
        },
        {
          number: "03",
          title: "حالات التقويم الصعبة",
          text: "استقبال الحالات المعقدة، ومنها حالات الناب المضمور، وفق ما يحدده الفحص السريري.",
        },
        {
          number: "04",
          title: "متابعة منتظمة وواضحة",
          text: "مراجعات دورية لقياس التقدم، شرح المرحلة الحالية، وتحديث الخطة عند الحاجة.",
        },
      ],
    },
    care: {
      eyebrow: "رعاية لكل مرحلة",
      title: "ابتسامات مختلفة. اهتمام واحد.",
      description:
        "تختلف احتياجات التقويم باختلاف العمر ونمو الأسنان والأهداف الشخصية؛ ويبدأ المسار المناسب دائمًا بتقييم الحالة كما هي.",
      items: [
        {
          number: "01",
          image: "/images/patients/saudi-child-orthodontics.jpg",
          alt: "أم سعودية مع ابنها في عيادة تقويم أسنان",
          title: "بداية مطمئنة للصغار واليافعين",
          text: "زيارة هادئة تشرح الحالة والخطوات بلغة واضحة للمريض وعائلته.",
        },
        {
          number: "02",
          image: "/images/patients/saudi-man-orthodontics.jpg",
          alt: "رجل سعودي في أجواء عيادة تقويم حديثة",
          title: "تقويم ينسجم مع حياة البالغين",
          text: "تقييم الأهداف والخيارات والمتابعة بما يناسب احتياجات كل حالة وروتينها.",
        },
      ],
      disclaimer: "الصور تعبيرية مولّدة للهوية، ولا تمثل مرضى أو نتائج علاجية فعلية.",
    },
    offers: {
      eyebrow: "عروض العيادة",
      title: "عروض منشورة لبداية أقرب إلى ابتسامتك.",
      description:
        "جمعنا أحدث عرض منشور وحملتين سابقتين من صفحة د. عمار. اضغط على العرض المناسب وسيتلقى فريق العيادة رسالة واضحة لتأكيد الأهلية والتوفر.",
      cta: "استفسر عن العرض",
      sourceLabel: "صفحة العيادة",
      items: [
        {
          image: "/images/offers/saudi-students-braces.jpg",
          alt: "طالب وطالبة سعوديان يبتسمان بتقويم الأسنان داخل عيادة حديثة",
          badge: "منشور حديثًا",
          featured: true,
          kicker: "للطلاب والطالبات المتفوقين",
          title: "خصم \u206630%\u2069 لطلاب المتوسط المتفوقين",
          text: "عرض نشرته الصفحة رسميًا لطلاب المرحلة المتوسطة المتفوقين. تُؤكَّد الشروط والاستفادة عند التواصل مع العيادة.",
          message: "مرحبًا، أرغب في الاستفسار عن عرض خصم 30% لطلاب المتوسط المتفوقين لدى د. عمار جنيد، وهل العرض متاح حاليًا؟",
          source: "https://www.facebook.com/photo/?fbid=3681115532037970&set=a.121728397976719",
        },
        {
          image: "/images/offers/orthodontic-planning.jpg",
          alt: "نموذج أسنان بتقويم معدني بجوار تخطيط تقويمي رقمي",
          badge: "تحقّق من التوفر",
          featured: false,
          kicker: "لحالات ازدحام الأسنان",
          title: "عرض خطة التقويم للحالات المتقدمة",
          text: "مستوحى من حملة منشورة سابقًا لحالات الازدحام الشديد. يحدد الفحص الخطة المناسبة والسعر وإمكانية الاستفادة من العرض.",
          message: "مرحبًا، أرغب في الاستفسار عن عرض تقويم حالات ازدحام الأسنان لدى د. عمار جنيد، وهل توجد حملة متاحة حاليًا؟",
          source: "https://www.facebook.com/clinic.dr.ammar",
        },
        {
          image: "/images/offers/xray-consultation.jpg",
          alt: "مراجع سعودي يناقش صورة أشعة بانورامية للأسنان مع الطبيب",
          badge: "تحقّق من التوفر",
          featured: false,
          kicker: "تقييم أولي أوضح",
          title: "عرض الكشف والأشعة البانورامية",
          text: "سبق للعيادة نشر حملات خاصة للكشف والأشعة. تواصل لمعرفة السعر الحالي وما إذا كانت الأشعة مشمولة في عرض الزيارة.",
          message: "مرحبًا، أرغب في الاستفسار عن عرض الكشف والأشعة البانورامية لدى د. عمار جنيد، وما السعر المتاح حاليًا؟",
          source: "https://www.facebook.com/clinic.dr.ammar",
        },
      ],
      disclaimer:
        "العرض الأول منشور حديثًا على صفحة الطبيب. الحملتان الأخريان مأخوذتان من عروض سابقة؛ الأسعار والتوفر والشروط تخضع لتأكيد العيادة والفحص السريري.",
    },
    about: {
      eyebrow: "عن الطبيب",
      title: "د. عمار جنيد",
      paragraphs: [
        "أخصائي تقويم الأسنان وتجميل الفكين في المدينة المنورة، ويعمل حاليًا في مجمع آراك طابا الطبي بحي الخالدية.",
        "تعكس مسيرته حضورًا مهنيًا ممتدًا في تقويم الأسنان بالمدينة لأكثر من عقد، مع اهتمام خاص بالتقييم المتأنّي، الحالات الصعبة، والمتابعة المنتظمة.",
      ],
      chips: ["تقويم الأسنان", "تجميل الفكين", "الحالات الصعبة"],
      quote: "الخطة الواضحة تبدأ من تشخيص دقيق وحوار صريح مع المريض.",
    },
    stats: [
      { value: "+10", label: "سنوات من الخبرة المعلنة" },
      { value: "+700", label: "منشور ومحتوى توعوي" },
      { value: "60", label: "دقيقة للموعد المنشور" },
    ],
    journey: {
      eyebrow: "رحلتك العلاجية",
      title: "ثلاث مراحل، وكل خطوة مفهومة.",
      steps: [
        {
          title: "الاستشارة والتقييم",
          text: "الاستماع لاحتياجك، فحص الحالة، ومراجعة ما يلزم من صور أو أشعة.",
        },
        {
          title: "الخطة والخيارات",
          text: "شرح التشخيص، أهداف العلاج، الخيارات المناسبة، وما تتوقعه خلال الرحلة.",
        },
        {
          title: "العلاج والمتابعة",
          text: "بدء الخطة مع زيارات متابعة منتظمة وقياس مستمر للتقدم.",
        },
      ],
    },
    location: {
      eyebrow: "الموقع والمواعيد",
      title: "عيادتك في المدينة المنورة",
      clinic: "مجمع آراك طابا الطبي",
      address:
        "7176 طريق الملك عبدالله الفرعي، حي الخالدية، المدينة المنورة 42317",
      hint: "بعد بن داوود، على الشارع العام قبل الإشارة.",
      doctorHoursTitle: "مواعيد د. عمار المنشورة",
      doctorHours: [
        "السبت – الثلاثاء: 2:00 م – 10:00 م",
        "الأربعاء والخميس: 10:00 ص – 6:00 م",
      ],
      clinicHoursTitle: "ساعات عمل المجمع",
      clinicHours: [
        "السبت – الخميس: 8:00 ص – 12:00 منتصف الليل",
        "الجمعة: 3:00 م – 11:00 م",
      ],
      note: "قد تتغير المواعيد؛ يرجى تأكيدها عبر واتساب قبل الزيارة.",
    },
    faq: {
      eyebrow: "أسئلة شائعة",
      title: "قبل أن تحجز",
      items: [
        {
          question: "ما مجال تخصص د. عمار جنيد؟",
          answer:
            "أخصائي تقويم الأسنان وتجميل الفكين، ويقدم تقييمًا وخطط علاج للحالات التقويمية المختلفة.",
        },
        {
          question: "هل يستقبل حالات التقويم الصعبة؟",
          answer:
            "نعم. صفحة الطبيب الرسمية في مجمع آراك طابا تذكر استقبال حالات التقويم الصعبة، ومنها الناب المضمور. يحدد الفحص ملاءمة الحالة وخيارات العلاج.",
        },
        {
          question: "كيف أحجز موعدًا؟",
          answer:
            "يمكنك التواصل مباشرة مع العيادة عبر واتساب على 056 022 2474، أو الاتصال بأحد رقمي مجمع آراك طابا الظاهرين في قسم الموقع.",
        },
        {
          question: "كم تستغرق الاستشارة الأولى؟",
          answer:
            "مدة الموعد المنشورة في صفحة الطبيب الرسمية 60 دقيقة. قد تختلف المدة الفعلية حسب الحالة والإجراءات المطلوبة.",
        },
      ],
    },
    contact: {
      eyebrow: "ابدأ من هنا",
      title: "خطوتك الأولى نحو ابتسامة أكثر ثقة.",
      description:
        "راسل العيادة مباشرة وحدد موعد التقييم. سيقوم الفريق بتأكيد الوقت وإرشادك لما يلزم قبل الزيارة.",
      direct: "الحجز المباشر",
      clinic: "أرقام المجمع",
      email: "بريد المجمع",
      source:
        "المعلومات المهنية ومواعيد العمل مأخوذة من القنوات العلنية وصفحة الطبيب في مجمع آراك طابا، وقد تتغير بمرور الوقت.",
    },
    footerTagline: "تقويم متخصص لابتسامة واثقة.",
    medicalNote:
      "محتوى الموقع للتعريف بالخدمة ولا يغني عن الفحص والتشخيص الطبي المباشر.",
  },
  en: {
    lang: "en",
    dir: "ltr",
    languageLabel: "عربي",
    languageHref: "/",
    nav: [
      { label: "Expertise", href: "#expertise" },
      { label: "Offers", href: "#offers" },
      { label: "About", href: "#about" },
      { label: "Your journey", href: "#journey" },
      { label: "Location", href: "#location" },
    ],
    book: "Book an appointment",
    call: "Call now",
    directions: "Directions",
    instagram: "Instagram",
    hero: {
      eyebrow: "Orthodontics · Madinah",
      title: "Balanced smiles.",
      accent: "Lasting confidence.",
      description:
        "Specialist orthodontic and dentofacial aesthetic care, with a clear plan and precise follow-up at Arak Taba Medical Center.",
      primary: "Book on WhatsApp",
      secondary: "Explore expertise",
      cardLabel: "DR. AMMAR JUNIED",
      cardTitle: "ORTHODONTIST",
      cardNote: "Precise assessment. A clear plan. Attentive follow-up.",
      photoAlt: "Saudi visitor in a contemporary orthodontic clinic setting",
      trust: [
        "Orthodontics & dentofacial aesthetics specialist",
        "More than 10 years of published experience",
        "Complex orthodontic cases welcomed",
      ],
    },
    expertise: {
      eyebrow: "Area of expertise",
      title: "Orthodontics built around your case—not a template.",
      description:
        "The right decision starts with a careful understanding of your bite, tooth position, and expectations. Every plan moves clearly from assessment to follow-up.",
      services: [
        {
          number: "01",
          title: "Comprehensive assessment",
          text: "A careful review of your case and goals before defining the most appropriate treatment path.",
        },
        {
          number: "02",
          title: "Orthodontics & facial aesthetics",
          text: "Specialist plans designed to improve alignment, bite, and the overall harmony of the smile.",
        },
        {
          number: "03",
          title: "Complex orthodontic cases",
          text: "Assessment of challenging cases, including impacted canines, subject to clinical examination.",
        },
        {
          number: "04",
          title: "Clear, regular follow-up",
          text: "Scheduled reviews to measure progress, explain the current stage, and adjust when needed.",
        },
      ],
    },
    care: {
      eyebrow: "Care at every stage",
      title: "Different smiles. The same attention.",
      description:
        "Orthodontic needs vary with age, dental development, and personal goals. The right path always starts with an assessment of your individual case.",
      items: [
        {
          number: "01",
          image: "/images/patients/saudi-child-orthodontics.jpg",
          alt: "Saudi mother with her son in an orthodontic clinic",
          title: "A reassuring start for young smiles",
          text: "A calm visit that explains the case and next steps clearly to the patient and family.",
        },
        {
          number: "02",
          image: "/images/patients/saudi-man-orthodontics.jpg",
          alt: "Saudi man in a contemporary orthodontic clinic setting",
          title: "Orthodontics that fits adult life",
          text: "Goals, options, and follow-up are considered around the needs and routine of each case.",
        },
      ],
      disclaimer: "Images are AI-generated brand visuals and do not depict actual patients or treatment outcomes.",
    },
    offers: {
      eyebrow: "Clinic offers",
      title: "Published offers that bring your first step closer.",
      description:
        "We brought together the latest published offer and two earlier campaigns from Dr. Ammar’s page. Choose an offer to send the clinic a clear WhatsApp enquiry about eligibility and availability.",
      cta: "Ask about this offer",
      sourceLabel: "Clinic page",
      items: [
        {
          image: "/images/offers/saudi-students-braces.jpg",
          alt: "Saudi school students smiling with braces in a modern dental clinic",
          badge: "Recently published",
          featured: true,
          kicker: "For high-achieving students",
          title: "30% off for high-achieving middle-school students",
          text: "Recently published by the official page for high-achieving middle-school students. Eligibility and availability are confirmed directly with the clinic.",
          message: "Hello, I would like to ask about the 30% offer for high-achieving middle-school students with Dr. Ammar Junied. Is it currently available?",
          source: "https://www.facebook.com/photo/?fbid=3681115532037970&set=a.121728397976719",
        },
        {
          image: "/images/offers/orthodontic-planning.jpg",
          alt: "Dental model with metal braces beside digital orthodontic planning",
          badge: "Confirm availability",
          featured: false,
          kicker: "For dental crowding cases",
          title: "Advanced orthodontic plan offer",
          text: "Inspired by a previously published campaign for severe crowding. Clinical assessment determines the right plan, price, and offer eligibility.",
          message: "Hello, I would like to ask about offers for orthodontic treatment of dental crowding with Dr. Ammar Junied. Is a campaign currently available?",
          source: "https://www.facebook.com/clinic.dr.ammar",
        },
        {
          image: "/images/offers/xray-consultation.jpg",
          alt: "Saudi patient discussing a panoramic dental X-ray with a clinician",
          badge: "Confirm availability",
          featured: false,
          kicker: "A clearer first assessment",
          title: "Consultation and panoramic X-ray offer",
          text: "The clinic has previously published consultation and X-ray campaigns. Message the team to confirm the current price and whether imaging is included.",
          message: "Hello, I would like to ask about the consultation and panoramic X-ray offer with Dr. Ammar Junied. What is currently available?",
          source: "https://www.facebook.com/clinic.dr.ammar",
        },
      ],
      disclaimer:
        "The first offer was published recently on the doctor’s page. The other two are based on earlier campaigns; prices, availability, terms, and clinical suitability must be confirmed with the clinic.",
    },
    about: {
      eyebrow: "About the doctor",
      title: "Dr. Ammar Junied",
      paragraphs: [
        "An orthodontics and dentofacial aesthetics specialist in Madinah, currently practicing at Arak Taba Medical Center in Al Khalidiyyah.",
        "His public professional history reflects more than a decade of orthodontic practice in the city, with particular attention to careful assessment, complex cases, and consistent follow-up.",
      ],
      chips: ["Orthodontics", "Dentofacial aesthetics", "Complex cases"],
      quote: "A clear treatment plan begins with a precise diagnosis and an honest conversation.",
    },
    stats: [
      { value: "10+", label: "Years of published experience" },
      { value: "700+", label: "Posts and educational content" },
      { value: "60", label: "Minutes in the listed appointment" },
    ],
    journey: {
      eyebrow: "Your treatment journey",
      title: "Three stages. Every step understood.",
      steps: [
        {
          title: "Consultation & assessment",
          text: "We listen to your needs, examine your case, and review any required images or X-rays.",
        },
        {
          title: "Plan & options",
          text: "Your diagnosis, treatment goals, suitable options, and expectations are explained clearly.",
        },
        {
          title: "Treatment & follow-up",
          text: "Treatment begins with regular reviews and ongoing measurement of progress.",
        },
      ],
    },
    location: {
      eyebrow: "Location & hours",
      title: "Your orthodontist in Madinah",
      clinic: "Arak Taba Medical Center",
      address:
        "7176 King Abdullah Branch Road, Al Khalidiyyah, Madinah 42317",
      hint: "After BinDawood, on the main road before the traffic light.",
      doctorHoursTitle: "Dr. Ammar’s listed hours",
      doctorHours: [
        "Saturday – Tuesday: 2:00 PM – 10:00 PM",
        "Wednesday & Thursday: 10:00 AM – 6:00 PM",
      ],
      clinicHoursTitle: "Medical center hours",
      clinicHours: [
        "Saturday – Thursday: 8:00 AM – 12:00 midnight",
        "Friday: 3:00 PM – 11:00 PM",
      ],
      note: "Hours may change. Please confirm on WhatsApp before visiting.",
    },
    faq: {
      eyebrow: "Frequently asked",
      title: "Before you book",
      items: [
        {
          question: "What is Dr. Ammar Junied’s specialty?",
          answer:
            "He is an orthodontics and dentofacial aesthetics specialist providing assessment and treatment planning for a range of orthodontic cases.",
        },
        {
          question: "Does he accept complex orthodontic cases?",
          answer:
            "Yes. His official Arak Taba profile specifically mentions complex cases, including impacted canines. Suitability and options are confirmed through clinical assessment.",
        },
        {
          question: "How can I book an appointment?",
          answer:
            "Message the clinic directly on WhatsApp at +966 56 022 2474, or call either Arak Taba number listed in the location section.",
        },
        {
          question: "How long is the first appointment?",
          answer:
            "The official doctor profile lists a 60-minute appointment. Actual duration may vary based on your case and any required procedures.",
        },
      ],
    },
    contact: {
      eyebrow: "Start here",
      title: "Your first step toward a more confident smile.",
      description:
        "Message the clinic to arrange an assessment. The team will confirm your appointment and explain what to prepare before the visit.",
      direct: "Direct booking",
      clinic: "Medical center numbers",
      email: "Medical center email",
      source:
        "Professional information and working hours are based on public channels and Dr. Ammar’s Arak Taba profile, and may change over time.",
    },
    footerTagline: "Specialist orthodontics for a confident smile.",
    medicalNote:
      "This website introduces the service and does not replace an in-person medical examination or diagnosis.",
  },
} as const;
