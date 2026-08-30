import Image from "next/image";
import Link from "next/link";
import { content, siteInfo, type Locale } from "@/lib/site-data";
import {
  ArrowIcon,
  ChevronIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  MessageIcon,
  PhoneIcon,
} from "@/components/icons";

export function SitePage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const isArabic = locale === "ar";
  const homeHref = isArabic ? "/" : "/en";
  const whatsappMessage = isArabic
    ? "مرحبًا، أرغب في حجز موعد تقييم تقويم أسنان مع د. عمار جنيد."
    : "Hello, I would like to book an orthodontic assessment with Dr. Ammar Junied.";
  const whatsappHref = `https://wa.me/${siteInfo.directPhone.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteInfo.name,
    alternateName: siteInfo.arabicName,
    description: isArabic ? siteInfo.specialtyAr : siteInfo.specialtyEn,
    url: isArabic ? "https://dr-ammar.com" : "https://dr-ammar.com/en",
    telephone: siteInfo.directPhone,
    medicalSpecialty: "Orthodontics",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7176 King Abdullah Branch Road, Al Khalidiyyah",
      addressLocality: "Madinah",
      postalCode: "42317",
      addressCountry: "SA",
    },
    sameAs: [siteInfo.instagram, siteInfo.facebook, siteInfo.doctorProfile],
  };

  return (
    <div className="site-shell" lang={copy.lang} dir={copy.dir}>
      <a className="skip-link" href="#main-content">
        {isArabic ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href={homeHref} aria-label={siteInfo.name}>
            <Image
              src="/brand/logo.svg"
              alt="Dr. Ammar Junied — Orthodontist"
              width={260}
              height={125}
              priority
            />
          </Link>

          <nav className="main-nav" aria-label={isArabic ? "التنقل الرئيسي" : "Main navigation"}>
            {copy.nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <Link className="language-link" href={copy.languageHref} hrefLang={locale === "ar" ? "en" : "ar"}>
              {copy.languageLabel}
            </Link>
            <a className="button button-small button-dark" href={whatsappHref} target="_blank" rel="noreferrer">
              {copy.book}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span />{copy.hero.eyebrow}</p>
              <h1>
                {copy.hero.title}
                <em>{copy.hero.accent}</em>
              </h1>
              <p className="hero-description">{copy.hero.description}</p>
              <div className="hero-actions">
                <a className="button button-gold" href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageIcon />
                  {copy.hero.primary}
                </a>
                <a className="text-link" href="#expertise">
                  {copy.hero.secondary}
                  <ArrowIcon />
                </a>
              </div>
              <ul className="trust-list" aria-label={isArabic ? "خبرات الطبيب" : "Doctor highlights"}>
                {copy.hero.trust.map((item) => (
                  <li key={item}><span />{item}</li>
                ))}
              </ul>
            </div>

            <div className="hero-visual">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="hero-photo-card">
                <Image
                  src="/images/patients/saudi-woman-orthodontics.jpg"
                  alt={copy.hero.photoAlt}
                  fill
                  priority
                  sizes="(max-width: 620px) 330px, (max-width: 860px) 430px, 470px"
                />
                <div className="hero-photo-signature">
                  <span className="signature-mark">
                    <Image src="/brand/mark.svg" alt="" width={58} height={58} />
                  </span>
                  <div>
                    <span>{copy.hero.cardLabel}</span>
                    <strong>{copy.hero.cardTitle}</strong>
                  </div>
                </div>
              </div>
              <p className="visual-note">{copy.hero.cardNote}</p>
            </div>
          </div>
          <div className="hero-index" aria-hidden="true">01</div>
        </section>

        <section className="section expertise" id="expertise">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow"><span />{copy.expertise.eyebrow}</p>
                <h2>{copy.expertise.title}</h2>
              </div>
              <p>{copy.expertise.description}</p>
            </div>

            <div className="service-grid">
              {copy.expertise.services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="card-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section people" id="care">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow"><span />{copy.care.eyebrow}</p>
                <h2>{copy.care.title}</h2>
              </div>
              <p>{copy.care.description}</p>
            </div>

            <div className="people-grid">
              {copy.care.items.map((item) => (
                <article className="people-card" key={item.number}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 860px) 100vw, 50vw"
                  />
                  <div className="people-card-copy">
                    <span>{item.number}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="people-disclaimer">{copy.care.disclaimer}</p>
          </div>
        </section>

        <section className="section offers" id="offers">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow"><span />{copy.offers.eyebrow}</p>
                <h2>{copy.offers.title}</h2>
              </div>
              <p>{copy.offers.description}</p>
            </div>

            <div className="offers-grid">
              {copy.offers.items.map((offer) => {
                const offerHref = `https://wa.me/${siteInfo.directPhone.replace("+", "")}?text=${encodeURIComponent(offer.message)}`;

                return (
                  <article className={`offer-card${offer.featured ? " offer-card-featured" : ""}`} key={offer.title}>
                    <div className="offer-media">
                      <Image
                        src={offer.image}
                        alt={offer.alt}
                        fill
                        sizes="(max-width: 860px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      />
                      <span className="offer-badge">{offer.badge}</span>
                    </div>
                    <div className="offer-copy">
                      <span className="offer-kicker">{offer.kicker}</span>
                      <h3>{offer.title}</h3>
                      <p>{offer.text}</p>
                      <div className="offer-actions">
                        <a className="button button-dark" href={offerHref} target="_blank" rel="noreferrer">
                          <MessageIcon />
                          {copy.offers.cta}
                        </a>
                        <a className="offer-source" href={offer.source} target="_blank" rel="noreferrer">
                          {copy.offers.sourceLabel}
                          <ArrowIcon />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <p className="offers-disclaimer">{copy.offers.disclaimer}</p>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="container about-grid">
            <div className="about-art" aria-hidden="true">
              <span className="large-initials">AJ</span>
              <span className="gold-arch" />
              <span className="about-index">02</span>
            </div>
            <div className="about-copy">
              <p className="eyebrow eyebrow-light"><span />{copy.about.eyebrow}</p>
              <h2>{copy.about.title}</h2>
              {copy.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="chip-row">
                {copy.about.chips.map((chip) => <span key={chip}>{chip}</span>)}
              </div>
              <blockquote>{copy.about.quote}</blockquote>
            </div>
          </div>

          <div className="container stats-grid">
            {copy.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section journey" id="journey">
          <div className="container">
            <div className="section-heading centered-heading">
              <p className="eyebrow"><span />{copy.journey.eyebrow}<span /></p>
              <h2>{copy.journey.title}</h2>
            </div>
            <div className="journey-grid">
              {copy.journey.steps.map((step, index) => (
                <article className="journey-step" key={step.title}>
                  <span className="step-dot">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section location" id="location">
          <div className="container location-grid">
            <div className="location-copy">
              <p className="eyebrow"><span />{copy.location.eyebrow}</p>
              <h2>{copy.location.title}</h2>
              <div className="address-block">
                <MapPinIcon />
                <div>
                  <strong>{copy.location.clinic}</strong>
                  <p>{copy.location.address}</p>
                  <small>{copy.location.hint}</small>
                </div>
              </div>
              <a className="button button-dark" href={siteInfo.maps} target="_blank" rel="noreferrer">
                {copy.directions}
                <ArrowIcon />
              </a>
            </div>

            <div className="hours-panel">
              <div className="hours-group">
                <div className="hours-title"><ClockIcon /><h3>{copy.location.doctorHoursTitle}</h3></div>
                {copy.location.doctorHours.map((line) => <p key={line}>{line}</p>)}
              </div>
              <div className="hours-group">
                <div className="hours-title"><ClockIcon /><h3>{copy.location.clinicHoursTitle}</h3></div>
                {copy.location.clinicHours.map((line) => <p key={line}>{line}</p>)}
              </div>
              <small>{copy.location.note}</small>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container faq-grid">
            <div className="section-heading sticky-heading">
              <p className="eyebrow"><span />{copy.faq.eyebrow}</p>
              <h2>{copy.faq.title}</h2>
            </div>
            <div className="faq-list">
              {copy.faq.items.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary>
                    <span>{item.question}</span>
                    <ChevronIcon />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-card">
            <div className="contact-main">
              <p className="eyebrow eyebrow-light"><span />{copy.contact.eyebrow}</p>
              <h2>{copy.contact.title}</h2>
              <p>{copy.contact.description}</p>
              <div className="contact-buttons">
                <a className="button button-gold" href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageIcon />{copy.hero.primary}
                </a>
                <a className="button button-outline-light" href={`tel:${siteInfo.directPhone}`}>
                  <PhoneIcon />{copy.call}
                </a>
              </div>
            </div>

            <div className="contact-details">
              <div>
                <span>{copy.contact.direct}</span>
                <a href={`tel:${siteInfo.directPhone}`} dir="ltr">{siteInfo.directPhoneDisplay}</a>
              </div>
              <div>
                <span>{copy.contact.clinic}</span>
                {siteInfo.clinicPhones.map((phone) => (
                  <a key={phone.href} href={`tel:${phone.href}`} dir="ltr">{phone.display}</a>
                ))}
              </div>
              <div>
                <span>{copy.contact.email}</span>
                <a href={`mailto:${siteInfo.clinicEmail}`}>{siteInfo.clinicEmail}</a>
              </div>
              <div className="social-row">
                <a href={siteInfo.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
                <a href={siteInfo.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Image src="/brand/logo.svg" alt="Dr. Ammar Junied" width={220} height={105} />
            <p>{copy.footerTagline}</p>
          </div>
          <div className="footer-links">
            {copy.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            <a href={siteInfo.doctorProfile} target="_blank" rel="noreferrer">{isArabic ? "صفحة الطبيب الرسمية" : "Official doctor profile"}</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} {siteInfo.name}</p>
          <p>{copy.medicalNote}</p>
        </div>
        <div className="container source-note">{copy.contact.source}</div>
      </footer>

      <a className="floating-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer" aria-label={copy.hero.primary}>
        <MessageIcon />
      </a>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
