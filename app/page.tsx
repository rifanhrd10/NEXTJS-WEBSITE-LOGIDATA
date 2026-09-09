"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

const navItems = [
  { label: "Beranda", href: "#beranda", id: "beranda" },
  { label: "Tentang Kami", href: "#tentang", id: "tentang" },
  { label: "Solusi", href: "#solusi", id: "solusi" },
  { label: "Produk", href: "#produk", id: "produk" },
  { label: "Portofolio", href: "#portofolio", id: "portofolio" },
  { label: "Kontak", href: "#kontak", id: "kontak" },
];

const services = [
  {
    icon: "/assets/icons/device-procurement.svg",
    title: "Pengadaan Perangkat IT",
    description: "Perangkat berkualitas untuk mendukung produktivitas dan operasional organisasi Anda.",
  },
  {
    icon: "/assets/icons/cctv-security.svg",
    title: "CCTV & Keamanan",
    description: "Sistem pengawasan untuk membantu menjaga kantor, sekolah, toko, dan fasilitas Anda.",
  },
  {
    icon: "/assets/icons/fingerprint-attendance.svg",
    title: "Sistem Absensi",
    description: "Solusi pencatatan kehadiran yang praktis untuk pengelolaan aktivitas tim.",
  },
  {
    icon: "/assets/icons/display-presentation.svg",
    title: "Display & Presentasi",
    description: "Perangkat visual yang mendukung komunikasi, kolaborasi, dan proses belajar.",
  },
  {
    icon: "/assets/icons/installation-tools.svg",
    title: "Instalasi & Konfigurasi",
    description: "Pemasangan dan konfigurasi perangkat agar siap digunakan dengan optimal.",
  },
  {
    icon: "/assets/icons/after-sales-headset.svg",
    title: "Dukungan Purnajual",
    description: "Bantuan teknis yang responsif setelah pengadaan maupun implementasi.",
  },
];

const productCategories = [
  { name: "CCTV & Keamanan", icon: "/assets/icons/cctv-security.svg" },
  { name: "Mesin Absensi", icon: "/assets/icons/fingerprint-attendance.svg" },
  { name: "Display & Monitor", icon: "/assets/icons/display-presentation.svg" },
  { name: "Projector & Screen", icon: "/assets/icons/display-presentation.svg" },
  { name: "Bracket & Mounting", icon: "/assets/icons/installation-tools.svg" },
  { name: "Perangkat Komputer & IT", icon: "/assets/icons/device-procurement.svg" },
];

const segments = [
  {
    image: "/assets/images/segment-business.webp",
    icon: "/assets/icons/business.svg",
    title: "Perusahaan & Bisnis",
    description: "Solusi teknologi untuk mendukung efisiensi, keamanan, dan produktivitas operasional.",
  },
  {
    image: "/assets/images/segment-education.webp",
    icon: "/assets/icons/education.svg",
    title: "Sekolah & Pendidikan",
    description: "Perangkat yang menunjang proses belajar, presentasi, absensi, dan keamanan lingkungan.",
  },
  {
    image: "/assets/images/segment-government.webp",
    icon: "/assets/icons/government.svg",
    title: "Instansi Pemerintah",
    description: "Dukungan teknologi yang disesuaikan dengan kebutuhan operasional dan pelayanan instansi.",
  },
];

const benefits = [
  {
    icon: "/assets/icons/fast-response.svg",
    title: "Respons Cepat",
    description: "Kami tanggap dalam memahami dan menangani kebutuhan teknologi Anda.",
  },
  {
    icon: "/assets/icons/quality-product.svg",
    title: "Produk Berkualitas",
    description: "Pilihan perangkat dari berbagai merek terpercaya sesuai kebutuhan.",
  },
  {
    icon: "/assets/icons/professional-team.svg",
    title: "Tim Profesional",
    description: "Setiap solusi ditangani oleh tim yang kompeten dan berorientasi pada hasil.",
  },
  {
    icon: "/assets/icons/after-sales-shield.svg",
    title: "Dukungan Purnajual",
    description: "Bantuan setelah implementasi untuk menjaga perangkat tetap optimal.",
  },
];

const processSteps = [
  {
    icon: "/assets/icons/consultation.svg",
    title: "Konsultasi",
    description: "Ceritakan kebutuhan, lokasi, dan target penggunaan Anda.",
  },
  {
    icon: "/assets/icons/analysis.svg",
    title: "Analisis",
    description: "Kami mempelajari kebutuhan dan menyiapkan rekomendasi.",
  },
  {
    icon: "/assets/icons/quotation.svg",
    title: "Penawaran",
    description: "Dapatkan rincian solusi, perangkat, biaya, dan jadwal.",
  },
  {
    icon: "/assets/icons/implementation.svg",
    title: "Instalasi",
    description: "Tim memasang, mengonfigurasi, dan menguji perangkat.",
  },
  {
    icon: "/assets/icons/after-sales-headset.svg",
    title: "Dukungan",
    description: "Kami tetap mendampingi setelah implementasi selesai.",
  },
];

const projects = [
  {
    image: "/assets/images/project-cctv.webp",
    category: "Sistem Keamanan",
    title: "Instalasi CCTV di Lingkungan Kantor",
    description: "Sistem keamanan untuk membantu mendukung pengawasan kegiatan operasional.",
  },
  {
    image: "/assets/images/project-meeting-room.webp",
    category: "Display & Presentasi",
    title: "Setup Display & Projector di Ruang Meeting",
    description: "Solusi presentasi yang mendukung kolaborasi dan komunikasi dengan lebih efektif.",
  },
  {
    image: "/assets/images/project-school-it.webp",
    category: "Pengadaan Perangkat",
    title: "Pengadaan Perangkat IT untuk Sekolah",
    description: "Perangkat teknologi yang menunjang kegiatan belajar dan kebutuhan administrasi.",
  },
];

const brands = ["EPSON", "SAMSUNG", "HIKVISION", "UNIARCH", "BRATECK", "PIXEL SCREEN"];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow mb-4 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-2 w-2 rounded-full bg-brand-green" />
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-black leading-tight tracking-[-.035em] text-brand-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [scrolled, setScrolled] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const panel = menuPanelRef.current;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    requestAnimationFrame(() => first?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = oldOverflow;
      previousFocus?.focus();
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -62%", threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      <a href="#konten-utama" className="skip-link">Lewati ke konten utama</a>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "border-slate-200 shadow-[0_8px_30px_rgba(15,47,77,.08)]" : "border-transparent"
        }`}
      >
        <div className="site-container flex h-[72px] items-center justify-between gap-5 sm:h-20">
          <a href="#beranda" aria-label="Logi Data - Beranda" className="shrink-0">
            <Image
              src="/assets/brand/logidata-horizontal.png"
              alt="Logi Data"
              width={280}
              height={32}
              priority
              className="h-auto w-[158px] sm:w-[190px]"
            />
          </a>

          <nav aria-label="Navigasi utama" className="hidden items-center gap-6 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={`nav-link ${activeSection === item.id ? "is-active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="mailto:info@logidata.id?subject=Permintaan%20Penawaran"
              className="button-primary hidden sm:inline-flex"
            >
              Minta Penawaran
              <ArrowRight aria-hidden="true" size={17} />
            </a>

            <button
              type="button"
              className="inline-grid size-12 place-items-center rounded-xl border border-slate-200 bg-white text-brand-ink transition hover:border-brand-blue/40 hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue xl:hidden"
              aria-label="Buka menu navigasi"
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              onClick={() => setMenuOpen(true)}
            >
              <Menu aria-hidden="true" size={23} />
            </button>

            {menuOpen ? (
              <div className="fixed inset-0 z-[70] xl:hidden">
                <button
                  type="button"
                  aria-label="Tutup menu navigasi"
                  className="mobile-menu-overlay absolute inset-0 bg-slate-950/30 backdrop-blur-sm"
                  onClick={() => setMenuOpen(false)}
                />
                <div
                  id="menu-mobile"
                  ref={menuPanelRef}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="menu-mobile-title"
                  className="mobile-menu-panel absolute inset-y-0 right-0 flex w-[min(88vw,380px)] flex-col border-l border-slate-200 bg-white shadow-2xl"
                >
                  <div className="flex items-center justify-between border-b border-slate-200 px-6 py-6">
                  <Image
                    src="/assets/brand/logidata-horizontal.png"
                    alt="Logi Data"
                    width={280}
                    height={32}
                    className="h-auto w-[178px]"
                  />
                    <h2 id="menu-mobile-title" className="sr-only">Menu navigasi</h2>
                    <button
                      type="button"
                      onClick={() => setMenuOpen(false)}
                      aria-label="Tutup menu navigasi"
                      className="grid size-11 place-items-center rounded-xl text-slate-600 transition hover:bg-slate-100 hover:text-brand-ink focus-visible:outline-2 focus-visible:outline-brand-blue"
                    >
                      <X aria-hidden="true" size={22} />
                    </button>
                  </div>
                  <nav aria-label="Navigasi mobile" className="flex flex-col px-4 py-5">
                  {navItems.map((item, index) => (
                    <a
                      key={item.id}
                      href={item.href}
                      aria-current={activeSection === item.id ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`mobile-nav-link ${activeSection === item.id ? "is-active" : ""}`}
                      style={{ animationDelay: `${index * 45}ms` }}
                    >
                      <span>{item.label}</span>
                      <ChevronRight aria-hidden="true" size={18} />
                    </a>
                  ))}
                  <a
                    href="mailto:info@logidata.id?subject=Permintaan%20Penawaran"
                    onClick={() => setMenuOpen(false)}
                    className="button-primary mt-5 justify-center"
                  >
                    Minta Penawaran
                    <ArrowRight aria-hidden="true" size={18} />
                  </a>
                  </nav>
                  <div className="mt-auto border-t border-slate-200 px-6 py-5 text-sm leading-6 text-slate-500">
                    Senin–Jumat, 08.30–17.30 WIB
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <div id="konten-utama">
        <section id="beranda" className="relative isolate overflow-hidden pt-[72px] sm:pt-20">
          <div className="hero-grid absolute inset-0 -z-20" />
          <div className="hero-glow absolute -left-48 top-8 -z-10 h-[32rem] w-[32rem] rounded-full" />
          <div className="hero-orb absolute -right-36 top-20 -z-10 h-80 w-80 rounded-full" />

          <div className="site-container grid min-h-[calc(100svh-72px)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:py-24">
            <div className="hero-copy max-w-2xl">
              <p className="eyebrow mb-5">
                <span className="h-2 w-2 rounded-full bg-brand-green" />
                Partner Teknologi di Surabaya
              </p>
              <h1 className="text-balance text-[clamp(2.65rem,6vw,5.5rem)] font-black leading-[.98] tracking-[-.055em] text-brand-ink">
                Solusi IT untuk <span className="text-brand-blue">Bisnis, Sekolah,</span> dan{" "}
                <span className="text-brand-green">Instansi</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                Pengadaan, instalasi, dan dukungan teknologi yang cepat, tepat, dan terpercaya untuk menjaga operasional Anda tetap berjalan.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:info@logidata.id?subject=Konsultasi%20Kebutuhan%20IT"
                  className="button-primary group justify-center"
                >
                  Konsultasi Sekarang
                  <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#solusi" className="button-secondary justify-center">Lihat Solusi</a>
              </div>

              <ul className="mt-10 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-3">
                {["Solusi terpercaya", "Layanan profesional", "Dukungan purnajual"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="shrink-0 text-brand-blue" size={19} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-media relative mx-auto w-full max-w-[620px]">
              <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2.2rem] bg-gradient-to-br from-brand-blue/15 to-brand-green/20" />
              <div className="relative aspect-[1.04] overflow-hidden rounded-[2rem] border border-white/80 bg-slate-100 shadow-[0_30px_90px_rgba(15,47,77,.2)]">
                <Image
                  src="/assets/images/hero-technician.webp"
                  alt="Teknisi Logi Data memasang perangkat CCTV"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 48vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/50 bg-slate-950/72 p-4 text-white backdrop-blur-md sm:inset-x-auto sm:bottom-5 sm:left-5 sm:max-w-[270px]">
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-sky-200">Solusi terintegrasi</p>
                  <p className="mt-1 text-sm leading-6 text-white/85">Dari konsultasi hingga dukungan setelah implementasi.</p>
                </div>
              </div>
              <div className="hero-badge absolute -right-2 -top-5 hidden items-center gap-3 rounded-2xl border border-white bg-white p-3 shadow-xl sm:flex lg:-right-5">
                <span className="grid size-10 place-items-center rounded-xl bg-brand-green/10 text-brand-green-deep">
                  <Sparkles aria-hidden="true" size={19} />
                </span>
                <span className="pr-2 text-sm font-bold text-brand-ink">Cepat, tepat,<br />terpercaya</span>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Merek produk tersedia" className="border-y border-slate-200 bg-slate-50/85 py-7">
          <div className="site-container flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-[230px] text-sm font-semibold leading-5 text-slate-500">Beragam produk teknologi untuk mendukung kebutuhan Anda</p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-4 text-base font-black tracking-tight text-slate-500 sm:gap-x-10 sm:text-lg">
              {brands.map((brand, index) => (
                <span key={brand} className="brand-name" style={{ animationDelay: `${index * 90}ms` }}>{brand}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="tentang" className="section-space relative overflow-hidden">
          <div className="about-ring absolute -right-40 top-0 -z-10 size-[34rem] rounded-full border-[80px] border-sky-50" />
          <div className="site-container grid items-center gap-14 lg:grid-cols-[.82fr_1.18fr]">
            <Reveal className="relative mx-auto w-full max-w-[470px]">
              <div className="brand-panel relative aspect-square overflow-hidden rounded-[2rem] bg-brand-ink p-10 shadow-[0_30px_80px_rgba(11,40,64,.18)] sm:p-14">
                <div className="brand-panel-grid absolute inset-0" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <Image
                    src="/assets/brand/logidata-square.png"
                    alt="Logo Logi Data"
                    width={400}
                    height={324}
                    className="h-auto w-full rounded-2xl bg-white p-5"
                  />
                  <p className="mt-8 text-balance text-2xl font-black leading-tight text-white sm:text-3xl">
                    Solusi IT Cepat, Tepat, dan Terpercaya.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <SectionHeading
                eyebrow="Tentang Logi Data"
                title="Partner teknologi untuk pertumbuhan organisasi Anda"
                description="PT Logi Data Teknologi Surabaya hadir untuk membantu bisnis, lembaga pendidikan, dan instansi mendapatkan solusi teknologi yang aman, mudah digunakan, dan sesuai kebutuhan."
                align="left"
              />
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Kami mendampingi pelanggan mulai dari pemilihan perangkat hingga instalasi dan dukungan purnajual, dengan mengutamakan kualitas layanan serta kepuasan pelanggan.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Rekomendasi sesuai kebutuhan", "Dukungan setelah implementasi", "Pelayanan untuk beragam sektor", "Pilihan perangkat berkualitas"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm font-bold text-slate-700 shadow-sm">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-green/10 text-brand-green-deep">
                      <Check aria-hidden="true" size={16} strokeWidth={3} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="solusi" className="section-space bg-[#f4f9fc]">
          <div className="site-container">
            <Reveal>
              <SectionHeading
                eyebrow="Layanan Kami"
                title="Solusi teknologi sesuai kebutuhan Anda"
                description="Kami membantu dari tahap pemilihan perangkat hingga implementasi dan dukungan setelah pembelian."
              />
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={(index % 3) * 80}>
                  <article className="service-card group h-full">
                    <div className="icon-box">
                      <Image src={service.icon} alt="" width={48} height={48} className="size-11 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110" />
                    </div>
                    <h3 className="mt-6 text-xl font-extrabold tracking-tight text-brand-ink">{service.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-brand-blue">
                      Pelajari solusi
                      <ArrowRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="produk" className="section-space relative isolate overflow-hidden bg-brand-ink text-white">
          <div className="product-grid absolute inset-0 -z-10" />
          <div className="product-glow absolute -right-32 -top-32 -z-10 size-[34rem] rounded-full" />
          <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <Reveal>
              <p className="eyebrow eyebrow-dark mb-4">
                <span className="h-2 w-2 rounded-full bg-brand-green" />
                Kategori Produk
              </p>
              <h2 className="text-balance text-3xl font-black leading-tight tracking-[-.035em] sm:text-4xl lg:text-5xl">
                Perangkat untuk kebutuhan kerja, belajar, dan keamanan
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Pilihan produk dapat disesuaikan dengan fungsi, lokasi penggunaan, dan anggaran organisasi Anda.
              </p>
              <a
                href="mailto:info@logidata.id?subject=Tanya%20Produk%20Logi%20Data"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-brand-ink transition duration-300 hover:-translate-y-0.5 hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Tanyakan Produk
                <ArrowRight aria-hidden="true" size={18} />
              </a>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {productCategories.map((product, index) => (
                <Reveal key={product.name} delay={(index % 2) * 80}>
                  <div className="product-card group">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white">
                      <Image src={product.icon} alt="" width={42} height={42} className="size-9 transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <span className="text-base font-extrabold">{product.name}</span>
                    <ArrowRight aria-hidden="true" size={18} className="ml-auto text-sky-300 transition-transform group-hover:translate-x-1" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="site-container">
            <Reveal>
              <SectionHeading
                eyebrow="Untuk Siapa"
                title="Melayani berbagai kebutuhan organisasi"
                description="Setiap organisasi memiliki tantangan berbeda. Kami membantu menyiapkan solusi teknologi yang relevan untuk aktivitas Anda."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {segments.map((segment, index) => (
                <Reveal key={segment.title} delay={index * 80}>
                  <article className="image-card group h-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
                    <div className="relative aspect-[1.7] overflow-hidden bg-slate-100">
                      <Image
                        src={segment.image}
                        alt={segment.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/30 to-transparent opacity-60" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <span className="grid size-11 place-items-center rounded-xl bg-sky-50">
                          <Image src={segment.icon} alt="" width={40} height={40} className="size-8" />
                        </span>
                        <h3 className="text-xl font-extrabold tracking-tight text-brand-ink">{segment.title}</h3>
                      </div>
                      <p className="mt-4 leading-7 text-slate-600">{segment.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space border-y border-slate-200 bg-slate-50">
          <div className="site-container">
            <Reveal>
              <SectionHeading
                eyebrow="Keunggulan Kami"
                title="Mengapa memilih Logi Data"
                description="Kami mengutamakan solusi yang tepat, pelayanan yang jelas, dan dukungan yang dapat diandalkan."
              />
            </Reveal>

            <div className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={index * 70}>
                  <article className="benefit-card group h-full">
                    <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 ring-1 ring-brand-blue/10">
                      <Image src={benefit.icon} alt="" width={48} height={48} className="size-10 transition-transform duration-300 group-hover:-translate-y-1" />
                    </span>
                    <h3 className="mt-5 text-lg font-extrabold text-brand-ink">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space overflow-hidden">
          <div className="site-container">
            <Reveal>
              <SectionHeading
                eyebrow="Cara Kerja"
                title="Proses mudah dari konsultasi hingga implementasi"
                description="Alur kerja yang terstruktur membantu setiap solusi berjalan lebih jelas dan sesuai kebutuhan."
              />
            </Reveal>

            <ol className="process-list relative mt-14 grid gap-5 lg:grid-cols-5">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 70}>
                  <li className="process-card relative h-full">
                    <div className="flex items-center gap-4 lg:flex-col">
                      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-blue text-sm font-black text-white shadow-[0_8px_20px_rgba(27,114,182,.25)]">
                        {index + 1}
                      </span>
                      <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-sky-50 ring-1 ring-brand-blue/10 lg:size-16">
                        <Image src={step.icon} alt="" width={48} height={48} className="size-9 lg:size-10" />
                      </span>
                    </div>
                    <div className="mt-5 lg:text-center">
                      <h3 className="text-lg font-extrabold text-brand-ink">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section id="portofolio" className="section-space bg-[#f4f9fc]">
          <div className="site-container">
            <Reveal>
              <SectionHeading
                eyebrow="Portofolio"
                title="Contoh implementasi solusi kami"
                description="Gambaran pekerjaan teknologi yang dapat diterapkan untuk kebutuhan kantor, ruang kolaborasi, dan pendidikan."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 80} className={index === 2 ? "md:col-span-2 xl:col-span-1" : ""}>
                  <article className="project-card group h-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
                    <div className="relative aspect-[1.8] overflow-hidden bg-slate-100">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-extrabold uppercase tracking-[.16em] text-brand-blue">{project.category}</p>
                      <h3 className="mt-3 text-xl font-extrabold leading-snug tracking-tight text-brand-ink">{project.title}</h3>
                      <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 sm:py-14">
          <Reveal className="mx-auto max-w-[1180px]">
            <div className="cta-panel relative isolate overflow-hidden rounded-[1.75rem] px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-14 lg:py-14">
              <div className="cta-grid absolute inset-0 -z-10" />
              <div className="max-w-2xl">
                <p className="text-sm font-extrabold uppercase tracking-[.18em] text-sky-100">Mari berdiskusi</p>
                <h2 className="mt-3 text-balance text-3xl font-black leading-tight tracking-[-.035em] sm:text-4xl">
                  Butuh solusi IT untuk bisnis atau instansi Anda?
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-white/80">
                  Sampaikan kebutuhan Anda. Tim kami akan membantu memberikan rekomendasi produk dan solusi yang sesuai.
                </p>
              </div>
              <a
                href="mailto:info@logidata.id?subject=Permintaan%20Penawaran"
                className="group mt-8 inline-flex min-h-13 shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-brand-blue shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:mt-0"
              >
                Minta Penawaran
                <ArrowRight aria-hidden="true" size={19} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </section>

        <footer id="kontak" className="border-t border-slate-200 bg-white pt-14">
          <div className="site-container grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_1fr]">
            <div>
              <Image
                src="/assets/brand/logidata-horizontal.png"
                alt="Logi Data"
                width={280}
                height={32}
                className="h-auto w-[190px]"
              />
              <p className="mt-5 max-w-sm leading-7 text-slate-600">
                Partner solusi teknologi untuk bisnis, sekolah, dan instansi di Surabaya.
              </p>
              <p className="mt-5 text-sm font-bold text-brand-ink">Solusi IT Cepat, Tepat, dan Terpercaya.</p>
            </div>

            <div>
              <h2 className="text-sm font-black uppercase tracking-[.16em] text-brand-ink">Menu</h2>
              <nav aria-label="Navigasi footer" className="mt-5 grid gap-3">
                {navItems.map((item) => (
                  <a key={item.id} href={item.href} className="w-fit text-sm font-medium text-slate-600 transition hover:text-brand-blue">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="text-sm font-black uppercase tracking-[.16em] text-brand-ink">Kontak Kami</h2>
              <address className="mt-5 grid gap-4 not-italic text-sm leading-6 text-slate-600">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jl.%20Ngagel%20Jaya%20Selatan%20Ruko%20RMI%20Blok%20D-25%20Surabaya"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <MapPin aria-hidden="true" size={20} />
                  <span>Jl. Ngagel Jaya Selatan, Ruko RMI Blok D-25, Surabaya</span>
                  <ExternalLink aria-hidden="true" className="ml-auto shrink-0" size={14} />
                </a>
                <a href="tel:+62315016899" className="contact-link">
                  <Phone aria-hidden="true" size={20} />
                  <span>031-5016899</span>
                </a>
                <a href="mailto:info@logidata.id" className="contact-link">
                  <Mail aria-hidden="true" size={20} />
                  <span>info@logidata.id</span>
                </a>
                <div className="contact-link">
                  <Image src="/assets/icons/clock.svg" alt="" width={20} height={20} className="size-5" />
                  <span>Senin–Jumat, 08.30–17.30 WIB</span>
                </div>
              </address>
            </div>
          </div>

          <div className="border-t border-slate-200 py-5">
            <div className="site-container flex flex-col gap-2 text-xs leading-5 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2024 PT Logi Data Teknologi. Seluruh hak dilindungi.</p>
              <p>Solusi Teknologi untuk Masa Depan yang Lebih Baik</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
