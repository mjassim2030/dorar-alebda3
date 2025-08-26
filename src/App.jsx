import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();

  // keep <html> lang/dir in sync with current language
  useEffect(() => {
    const lang = i18n.language || "ar";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }, [i18n.language]);

  const isAr = (i18n.language || "ar") === "ar";

  return (
    <div className="min-h-screen bg-[#F7FAFC] text-slate-900 antialiased">
      {/* ===== Header (floating) ===== */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="container-app mt-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/40 bg-white/80 px-4 py-2 shadow-soft backdrop-blur">
            <div className="flex items-center gap-3 font-extrabold tracking-tight">
              <img src="/logo.png" width="128" />
              <span className="font-heading">{t("brand")}</span>
            </div>
            <nav className="flex gap-2" role="tablist" aria-label="Language Switch">
              <button
                className={`px-3 py-1.5 rounded-full border text-sm font-semibold transition-all ${isAr ? "border-royal bg-royal text-white" : "border-slate-300 bg-white hover:bg-slate-50"
                  }`}
                onClick={() => i18n.changeLanguage("ar")}
              >
                {t("lang.ar")}
              </button>
              <button
                className={`px-3 py-1.5 rounded-full border text-sm font-semibold transition-all ${!isAr ? "border-royal bg-royal text-white" : "border-slate-300 bg-white hover:bg-slate-50"
                  }`}
                onClick={() => i18n.changeLanguage("en")}
              >
                {t("lang.en")}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* ===== FULL BANNER ===== */}
      <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden pt-24 bg-hero-grad">
        {/* Background video (bottom layer) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full object-cover pointer-events-none"
        >
          <source src="/kids.mp4" type="video/mp4" />
          {/* <source src="/kids.webm" type="video/webm" /> */}
        </video>

        {/* Overlay for readability (middle layer) */}
        <div
          className="absolute inset-0 z-10 bg-black/40 md:bg-black/70 pointer-events-none"
          aria-hidden="true"
        />

        {/* Foreground content (top layer) */}
        <div className="container-app relative z-20 grid items-center gap-10 lg:grid-cols-2">
          {/* Copy */}
          <div className={`${isAr ? "font-arabic text-start" : "font-english text-start"}`}>
            <p className="font-heading mb-3 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-3 py-1 text-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-royal" /> {t("lang.confidentStart")}
            </p>

<h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black !leading-[1.25] text-white">
  {t("hero.title")}
</h1>

            <p className="mt-4 max-w-prose text-slate-100/90 md:text-slate-200/90 md:text-2xl">
              {t("hero.tagline")}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#offers"
                className="brand-gradient inline-flex items-center gap-2 rounded-xl px-5 py-3 font-extrabold text-white shadow-soft transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {t("hero.primaryCta")}
              </a>
              <a
                href="#inside"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/80 px-5 py-3 font-bold text-slate-900 shadow-soft hover:bg-white"
              >
                {t("hero.secondaryCta")}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              {t("hero.badges", { returnObjects: true }).map((b, i) => (
                <Badge key={i}>{b}</Badge>
              ))}
            </div>
          </div>

          {/* Mock */}
          <div className="relative">
            <div className="rounded-3xl border border-white/40 bg-white/30 p-2 shadow-soft backdrop-blur">
              <div className="relative mx-auto w-full max-w-[440px] rounded-2xl bg-gray p-2 shadow-soft">
                <img
                  src={t("book.image")}
                  alt={t("hero.title")}
                  className="mx-auto h-auto w-full rounded-xl shadow-lg object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== Benefits ===== */}
      <SectionWrap id="benefits" title={t("benefits.title")} subtitle={t("benefits.subtitle")}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t("benefits.items", { returnObjects: true }).map((it, i) => (
            <IconCard key={i} icon={it.icon} title={it.title}>
              {it.text}
            </IconCard>
          ))}
        </div>
      </SectionWrap>

      {/* ===== Inside ===== */}
      <SectionWrap id="inside" title={t("inside.title")}>
        <div className="grid gap-6 lg:grid-cols-3">
          <ul className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-soft backdrop-blur space-y-2">
            {t("inside.list", { returnObjects: true }).map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6 shadow-soft">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 font-heading font-bold text-sky-700">
              {t("inside.bonusBadge")}
            </span>
            <p className="mt-3 text-slate-700">{t("inside.bonusText")}</p>
          </div>
        </div>
      </SectionWrap>

      {/* ===== Offers ===== */}
      <SectionWrap id="offers" title={t("offers.title")} subtitle={t("offers.subtitle")}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t("offers.plans", { returnObjects: true }).map((p, i) => (
            <PriceCard key={i} title={p.title} image={p.image} imageAlt={p.image} price={p.price} soft={p.soft} desc={p.desc} cta={t("offers.cta")} href={p.href} />
          ))}
        </div>
      </SectionWrap>

      {/* ===== Testimonials ===== */}
      <SectionWrap id="testimonials" title={t("testimonials.title")}>
        <div className="grid gap-5 sm:grid-cols-2">
          {t("testimonials.quotes", { returnObjects: true }).map((q, i) => (
            <Quote key={i}>{q}</Quote>
          ))}
        </div>
      </SectionWrap>

      {/* ===== Guarantee ===== */}
      <SectionWrap>
        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-soft backdrop-blur">
          <div className="text-2xl">🛡️</div>
          <div>
            <h3 className="font-heading mb-1 font-bold">{t("guarantee.title")}</h3>
            <p className="text-slate-700">{t("guarantee.text")}</p>
          </div>
        </div>
      </SectionWrap>

      {/* ===== CTA ===== */}
      <section id="cta" className="py-12 lg:py-16">
        <div className="container-app">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-soft backdrop-blur">
            <div className="pointer-events-none absolute -left-10 -top-10 h-36 w-36 rounded-full bg-royal/30 blur-2xl" />
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-gold/30 blur-2xl" />
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-heading m-0 text-2xl lg:text-3xl font-black">{t("cta.title")}</h3>
                <p className="m-0 text-slate-600">{t("cta.text")}</p>
              </div>
              <a className="brand-gradient inline-flex rounded-xl px-5 py-3 font-extrabold text-white shadow-soft" href="#offers">
                {t("cta.button")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-slate-200/60 bg-white py-7 text-sm text-slate-600">
        <div className="container-app flex flex-wrap items-center justify-between gap-3">
          <div>
            © <span>{new Date().getFullYear()}</span> Golden Secrets. {t("footer.rights")}
          </div>
          <div>
            {t("footer.help")}{" "}
            <a className="font-medium text-royal hover:underline" href="mailto:hello@example.com">
              hello@example.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================= Building Blocks ================= */
function SectionWrap({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-12 lg:py-16">
      <div className="container-app">
        {(title || subtitle) && (
          <div className="mb-6 flex flex-col items-start gap-2">
            {title && <h2 className="font-heading text-2xl lg:text-3xl font-black">{title}</h2>}
            {subtitle && <p className="text-slate-600">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function IconCard({ icon, title, children }) {
  return (
    <div className="group rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-gold to-royal text-white shadow-soft">
          <span className="text-lg">{icon}</span>
        </div>
        <h3 className="font-heading text-lg font-bold">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600">{children}</p>
    </div>
  );
}

function PriceCard({ title, price, desc, cta, href, soft, image, imageAlt }) {
  return (
    <div className="relative rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-soft backdrop-blur">
      {/* subtle accent */}
      <div className="absolute right-4 top-4 h-2 w-12 rounded-full bg-royal/70" />

      {/* optional image */}
      {image ? (
        <div className="mb-4 overflow-hidden rounded-xl border border-slate-200/70 shadow-soft">
          <img
            src={image}
            alt={imageAlt || title}
            className="h-90 w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}

      <h3 className="font-heading text-lg font-bold">{title}</h3>
      <div className="mt-1 text-royal text-2xl font-black">{price}</div>
      <p className="mt-1 text-slate-600">{desc}</p>

      {soft ? (
        <a
          className="brand-gradient mt-4 inline-flex rounded-xl px-4 py-2.5 font-extrabold text-white shadow-soft"
          href={href}
        >
          {cta}
        </a>
      ) : null}
    </div>
  );
}

function Quote({ children }) {
  return (
    <blockquote className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 italic text-slate-700 shadow-soft backdrop-blur">
      {children}
    </blockquote>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 shadow-soft backdrop-blur">
      {children}
    </span>
  );
}