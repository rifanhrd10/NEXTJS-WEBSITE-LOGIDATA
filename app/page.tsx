'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Cctv,
  ExternalLink,
  Headset,
  Laptop,
  Mail,
  MapPin,
  Menu,
  MonitorUp,
  Phone,
  X,
  type LucideIcon,
} from 'lucide-react';

const navItems = [
  { label: 'Beranda', href: '#beranda', id: 'beranda' },
  { label: 'Tentang Kami', href: '#tentang', id: 'tentang' },
  { label: 'Solusi', href: '#solusi', id: 'solusi' },
  { label: 'Produk', href: '#produk', id: 'produk' },
  { label: 'Portofolio', href: '#portofolio', id: 'portofolio' },
  { label: 'Kontak', href: '#kontak', id: 'kontak' },
];

const services = [
  {
    icon: Laptop,
    title: 'Pengadaan Perangkat IT',
    description:
      'Pilihan perangkat untuk mendukung produktivitas dan operasional organisasi Anda.',
  },
  {
    icon: Cctv,
    title: 'CCTV & Keamanan',
    description:
      'Pilihan perangkat CCTV untuk mendukung pemantauan kantor, sekolah, toko, dan fasilitas Anda.',
  },
  {
    icon: Headset,
    title: 'Dukungan Purnajual',
    description: 'Bantuan teknis yang responsif setelah pembelian produk.',
  },
];

const productCategoryTabs = [
  { id: 'featured', label: 'Pilihan Utama' },
  { id: 'cctv', label: 'CCTV & Keamanan' },
  { id: 'display', label: 'Interactive Display' },
  { id: 'projector', label: 'Proyektor' },
  { id: 'printer', label: 'Printer' },
  { id: 'screen', label: 'Layar Proyektor' },
  { id: 'mount', label: 'Bracket & Stand' },
] as const;

const heroSlides = [
  {
    name: 'Brateck TV Cart',
    src: '/assets/brochures/brateck.webp',
    alt: 'Brosur Brateck large screen telescopic TV cart',
  },
  {
    name: 'Epson EcoTank L121',
    src: '/assets/brochures/epson-l121.webp',
    alt: 'Brosur printer Epson EcoTank L121',
  },
  {
    name: 'Samsung WAFX-P',
    src: '/assets/brochures/samsung.webp',
    alt: 'Brosur Samsung WAFX-P interactive display',
  },
  {
    name: 'Uniarch IPC-B132',
    src: '/assets/brochures/uniarch.webp',
    alt: 'Brosur kamera keamanan Uniarch IPC-B132',
  },
  {
    name: 'Epson EB-X600',
    src: '/assets/brochures/epson-x600.webp',
    alt: 'Brosur proyektor Epson EB-X600',
  },
  {
    name: 'PixelScreen',
    src: '/assets/brochures/pixelscreen.webp',
    alt: 'Brosur layar proyektor tripod PixelScreen',
  },
  {
    name: 'Epson EcoTank L3211',
    src: '/assets/brochures/epson-l3211.webp',
    alt: 'Brosur printer Epson EcoTank L3211',
  },
  {
    name: 'Epson EcoTank L3251',
    src: '/assets/brochures/epson-l3251.webp',
    alt: 'Brosur printer Epson EcoTank L3251',
  },
] as const;

const heroSlideIntervalMs = 3_000;

type ProductCategory = (typeof productCategoryTabs)[number]['id'];

const products = [
  {
    name: 'Kamera Bullet Uniarch',
    model: 'B132-AF28',
    brand: 'Uniarch',
    category: 'cctv',
    image: '/assets/products/uniarch-b132-af28.webp',
    description:
      'Kamera bullet ringkas untuk pemantauan area luar, koridor, dan akses masuk.',
    featured: true,
  },
  {
    name: 'Kamera Dome Uniarch',
    model: 'D122-PF28',
    brand: 'Uniarch',
    category: 'cctv',
    image: '/assets/products/uniarch-d122-pf28.webp',
    description:
      'Desain dome yang rapi untuk pengawasan ruang kerja dan area layanan.',
    featured: false,
  },
  {
    name: 'Kamera Pan & Tilt',
    model: 'IPC-P213-AF40KC',
    brand: 'Uniarch',
    category: 'cctv',
    image: '/assets/products/uniarch-ipc-p213-af40kc.webp',
    description:
      'Kamera dengan arah pandang fleksibel untuk membantu memperluas cakupan pemantauan.',
    featured: false,
  },
  {
    name: 'Network Video Recorder',
    model: 'NVR-116E2',
    brand: 'Uniarch',
    category: 'cctv',
    image: '/assets/products/uniarch-nvr-116e2.webp',
    description:
      'Pusat perekaman untuk mengelola sistem kamera dalam satu perangkat.',
    featured: true,
  },
  {
    name: 'Kamera Turret Uniarch',
    model: 'T132',
    brand: 'Uniarch',
    category: 'cctv',
    image: '/assets/products/uniarch-t132.webp',
    description:
      'Bentuk turret ringkas untuk pemantauan ruang kerja dan area operasional.',
    featured: false,
  },
  {
    name: 'Kamera Turret Dual Light',
    model: 'IPC-T132-AF28-DL-ECO',
    brand: 'Uniarch',
    category: 'cctv',
    image: '/assets/products/uniarch-ipc-t132-af28-dl-eco.webp',
    description:
      'Kamera turret dengan pencahayaan pendukung untuk visual yang lebih jelas.',
    featured: false,
  },
  {
    name: 'Interactive Display 65 inci',
    model: 'WA65FX-P',
    brand: 'Samsung',
    category: 'display',
    image: '/assets/products/samsung-wa65fx-p.webp',
    description:
      'Layar interaktif untuk kelas, rapat, presentasi, dan kolaborasi tim.',
    featured: true,
  },
  {
    name: 'Interactive Display 75 inci',
    model: 'WA75FX-P',
    brand: 'Samsung',
    category: 'display',
    image: '/assets/products/samsung-wa75fx-p.webp',
    description:
      'Area kerja visual yang lebih luas untuk ruang belajar dan ruang meeting.',
    featured: false,
  },
  {
    name: 'Samsung Flip Pro 75 inci',
    model: 'WM75B',
    brand: 'Samsung',
    category: 'display',
    image: '/assets/products/samsung-wm75b.webp',
    description:
      'Display kolaboratif untuk menulis, berbagi ide, dan menyajikan materi.',
    featured: true,
  },
  {
    name: 'Interactive Display 86 inci',
    model: 'LH86',
    brand: 'Samsung',
    category: 'display',
    image: '/assets/products/samsung-lh86.avif',
    description:
      'Layar berukuran besar untuk ruang kelas, aula, dan ruang kolaborasi.',
    featured: false,
  },
  {
    name: 'Proyektor Epson EB-972',
    model: 'EB-972',
    brand: 'Epson',
    category: 'projector',
    image: '/assets/products/epson-eb-972.webp',
    description:
      'Proyektor 3LCD untuk presentasi bisnis, pembelajaran, dan ruang pertemuan.',
    featured: false,
  },
  {
    name: 'Proyektor Epson EB-E600',
    model: 'EB-E600',
    brand: 'Epson',
    category: 'projector',
    image: '/assets/products/epson-eb-e600.webp',
    description:
      'Proyektor 3LCD berlabel TKDN untuk kebutuhan kantor dan institusi.',
    featured: false,
  },
  {
    name: 'Proyektor Epson EB-W53',
    model: 'EB-W53',
    brand: 'Epson',
    category: 'projector',
    image: '/assets/products/epson-eb-w53.webp',
    description:
      'Proyektor untuk menyajikan materi visual di ruang kelas dan ruang rapat.',
    featured: false,
  },
  {
    name: 'Proyektor Epson EB-W55',
    model: 'EB-W55',
    brand: 'Epson',
    category: 'projector',
    image: '/assets/products/epson-eb-w55.webp',
    description:
      'Proyektor untuk kebutuhan presentasi dengan tampilan lebar di berbagai ruang.',
    featured: false,
  },
  {
    name: 'Proyektor Epson EB-X52',
    model: 'EB-X52',
    brand: 'Epson',
    category: 'projector',
    image: '/assets/products/epson-eb-x52.webp',
    description:
      'Proyektor ringkas untuk mendukung presentasi rutin dan pembelajaran.',
    featured: false,
  },
  {
    name: 'Proyektor Epson EB-X600',
    model: 'EB-X600',
    brand: 'Epson',
    category: 'projector',
    image: '/assets/products/epson-eb-x600.webp',
    description:
      'Proyektor 3LCD berlabel TKDN untuk visual presentasi di ruang berukuran menengah.',
    featured: true,
  },
  {
    name: 'Printer Epson EcoTank L121',
    model: 'L121',
    brand: 'Epson',
    category: 'printer',
    image: '/assets/products/epson-l121.webp',
    description:
      'Printer tangki tinta warna untuk kebutuhan cetak dokumen harian.',
    featured: false,
  },
  {
    name: 'Printer Epson EcoTank L3211',
    model: 'L3211',
    brand: 'Epson',
    category: 'printer',
    image: '/assets/products/epson-l3211.webp',
    description:
      'Printer multifungsi untuk mencetak, memindai, dan menyalin dokumen.',
    featured: false,
  },
  {
    name: 'Printer Epson EcoTank L3251',
    model: 'L3251',
    brand: 'Epson',
    category: 'printer',
    image: '/assets/products/epson-l3251.webp',
    description:
      'Printer multifungsi dengan konektivitas nirkabel untuk kerja yang lebih fleksibel.',
    featured: true,
  },
  {
    name: 'Bezel-less Fixed Screen',
    model: 'Fixed Frame',
    brand: 'PixelScreen',
    category: 'screen',
    image: '/assets/products/pixelscreen-bezelless-fixed.webp',
    description:
      'Layar bingkai tetap dengan tampilan minimal untuk ruang presentasi permanen.',
    featured: false,
  },
  {
    name: 'Fast Fold Screen',
    model: 'Fast Fold',
    brand: 'PixelScreen',
    category: 'screen',
    image: '/assets/products/pixelscreen-fast-fold.webp',
    description:
      'Layar portabel berformat besar untuk acara, pelatihan, dan presentasi.',
    featured: true,
  },
  {
    name: 'Hanging Roll Up Screen',
    model: 'Roll Up',
    brand: 'PixelScreen',
    category: 'screen',
    image: '/assets/products/pixelscreen-hanging-rollup.webp',
    description: 'Layar gulung gantung yang praktis dan hemat ruang.',
    featured: false,
  },
  {
    name: 'Manual Wall Screen',
    model: 'Manual Pull Down',
    brand: 'PixelScreen',
    category: 'screen',
    image: '/assets/products/pixelscreen-manual-wall.webp',
    description:
      'Layar tarik manual untuk ruang kelas, kantor, dan ruang pertemuan.',
    featured: false,
  },
  {
    name: 'Motorized Floor Rising Screen',
    model: 'Floor Rising',
    brand: 'PixelScreen',
    category: 'screen',
    image: '/assets/products/pixelscreen-floor-rising.webp',
    description:
      'Layar bermotor dari lantai untuk penggunaan yang rapi dan fleksibel.',
    featured: true,
  },
  {
    name: 'Motorized Projection Screen',
    model: 'Motorized',
    brand: 'PixelScreen',
    category: 'screen',
    image: '/assets/products/pixelscreen-motorized.webp',
    description:
      'Layar elektrik untuk penggunaan rutin dengan pengoperasian yang praktis.',
    featured: false,
  },
  {
    name: 'Tripod Projection Screen',
    model: 'Tripod Screen',
    brand: 'PixelScreen',
    category: 'screen',
    image: '/assets/products/pixelscreen-tripod-screen.webp',
    description: 'Layar dengan tripod untuk presentasi yang mudah dipindahkan.',
    featured: false,
  },
  {
    name: 'Projector Tripod Stand',
    model: 'Tripod Stand',
    brand: 'Universal',
    category: 'mount',
    image: '/assets/products/projector-tripod-stand.webp',
    description:
      'Stand portabel untuk membantu penempatan proyektor di berbagai ruang.',
    featured: false,
  },
  {
    name: 'Projector Ceiling Mount',
    model: 'XB145A',
    brand: 'Brateck',
    category: 'mount',
    image: '/assets/products/brateck-xb145a.webp',
    description:
      'Bracket plafon untuk penempatan proyektor yang rapi dan stabil.',
    featured: false,
  },
  {
    name: 'Heavy-Duty Monitor Arm',
    model: 'LDT69-C012',
    brand: 'Brateck',
    category: 'mount',
    image: '/assets/products/brateck-ldt69-c012.webp',
    description:
      'Lengan monitor heavy-duty untuk membantu mengatur posisi layar di meja kerja.',
    featured: false,
  },
  {
    name: 'Tilting TV Wall Mount',
    model: 'KL31-22T',
    brand: 'Brateck',
    category: 'mount',
    image: '/assets/products/brateck-kl31-22t.webp',
    description:
      'Bracket dinding dengan kemiringan untuk penempatan TV atau monitor yang ringkas.',
    featured: false,
  },
  {
    name: 'Full-Motion TV Wall Mount',
    model: 'LPA77-486',
    brand: 'Brateck',
    category: 'mount',
    image: '/assets/products/brateck-lpa77-486.webp',
    description:
      'Bracket dinding full-motion untuk mengatur arah dan jarak layar berukuran besar.',
    featured: false,
  },
  {
    name: 'Phone & Tablet Stand',
    model: 'PHS06',
    brand: 'Brateck',
    category: 'mount',
    image: '/assets/products/brateck-phs06.webp',
    description:
      'Stand lipat untuk menopang ponsel atau tablet di meja kerja dan area layanan.',
    featured: false,
  },
  {
    name: 'Large Screen TV Cart',
    model: 'TTL06H-610TW',
    brand: 'Brateck',
    category: 'mount',
    image: '/assets/products/brateck-ttl06h-610tw.webp',
    description:
      'Troli display beroda dengan tinggi yang dapat disesuaikan untuk ruang rapat dan kelas.',
    featured: true,
  },
] as const;

const segments = [
  {
    image: '/assets/images/segment-business.webp',
    icon: '/assets/icons/business.svg',
    title: 'Perusahaan & Bisnis',
    description:
      'Perangkat IT, printer, display, proyektor, dan CCTV untuk mendukung operasional bisnis.',
  },
  {
    image: '/assets/images/segment-education.webp',
    icon: '/assets/icons/education.svg',
    title: 'Sekolah & Pendidikan',
    description:
      'Printer, proyektor, layar, display interaktif, dan perangkat pendukung untuk kegiatan belajar.',
  },
  {
    image: '/assets/images/segment-government.webp',
    icon: '/assets/icons/government.svg',
    title: 'Instansi Pemerintah',
    description:
      'Perangkat kerja, presentasi, pencetakan, dan keamanan untuk mendukung operasional serta pelayanan instansi.',
  },
];

const benefits = [
  {
    icon: '/assets/icons/fast-response.svg',
    title: 'Respons Cepat',
    description:
      'Kami tanggap dalam memahami dan menangani kebutuhan teknologi Anda.',
  },
  {
    icon: '/assets/icons/quality-product.svg',
    title: 'Produk Berkualitas',
    description:
      'Pilihan perangkat dari berbagai merek terpercaya sesuai kebutuhan.',
  },
  {
    icon: '/assets/icons/professional-team.svg',
    title: 'Tim Profesional',
    description:
      'Setiap solusi ditangani oleh tim yang kompeten dan berorientasi pada hasil.',
  },
  {
    icon: '/assets/icons/after-sales-shield.svg',
    title: 'Dukungan Purnajual',
    description:
      'Bantuan setelah pembelian untuk membantu menjaga perangkat tetap optimal.',
  },
];

const processSteps = [
  {
    icon: '/assets/icons/consultation.svg',
    title: 'Konsultasi',
    description: 'Ceritakan kebutuhan, lokasi, dan target penggunaan Anda.',
  },
  {
    icon: '/assets/icons/analysis.svg',
    title: 'Analisis',
    description: 'Kami mempelajari kebutuhan dan menyiapkan rekomendasi.',
  },
  {
    icon: '/assets/icons/quotation.svg',
    title: 'Penawaran',
    description: 'Dapatkan rincian solusi, perangkat, biaya, dan jadwal.',
  },
  {
    icon: '/assets/icons/device-procurement.svg',
    title: 'Pengadaan',
    description:
      'Pesanan diproses sesuai produk dan jumlah yang telah disepakati.',
  },
  {
    icon: '/assets/icons/after-sales-headset.svg',
    title: 'Dukungan',
    description: 'Kami tetap mendampingi melalui dukungan purnajual.',
  },
];

const projects = [
  {
    image: '/assets/images/project-cctv.webp',
    category: 'Sistem Keamanan',
    title: 'Pengadaan CCTV untuk Lingkungan Kantor',
    description:
      'Sistem keamanan untuk membantu mendukung pengawasan kegiatan operasional.',
  },
  {
    image: '/assets/images/project-meeting-room.webp',
    category: 'Ruang Meeting',
    title: 'Pengadaan Display & Projector untuk Ruang Meeting',
    description:
      'Solusi presentasi yang mendukung kolaborasi dan komunikasi dengan lebih efektif.',
  },
  {
    image: '/assets/images/project-school-it.webp',
    category: 'Pengadaan Perangkat',
    title: 'Pengadaan Perangkat IT untuk Sekolah',
    description:
      'Perangkat teknologi yang menunjang kegiatan belajar dan kebutuhan administrasi.',
  },
];

const brands = [
  {
    name: 'Epson',
    logo: '/assets/brands/epson-logo.png',
    width: 411,
    height: 92,
  },
  {
    name: 'Samsung',
    logo: '/assets/brands/samsung-logo.png',
    width: 1600,
    height: 425,
  },
  {
    name: 'Hikvision',
    logo: '/assets/brands/hikvision-logo.png',
    width: 842,
    height: 138,
  },
  {
    name: 'Uniarch',
    logo: '/assets/brands/uniarch-logo.png',
    width: 4022,
    height: 1093,
  },
  {
    name: 'Brateck',
    logo: '/assets/brands/brateck-logo.png',
    width: 692,
    height: 97,
  },
  {
    name: 'Pixel Screen',
    logo: '/assets/brands/pixelscreen-logo.png',
    width: 451,
    height: 50,
  },
];

function Reveal({
  children,
  className = '',
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
      { threshold: 0.12, rootMargin: '0px 0px -32px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
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
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div
      className={
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'
      }
    >
      <p
        className={`eyebrow mb-4 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className="h-2 w-2 rounded-full bg-brand-green" />
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-black leading-tight tracking-[-.035em] text-brand-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function IconBox({
  icon,
  className = '',
  size = 32,
}: {
  icon: LucideIcon | string;
  className?: string;
  size?: number;
}) {
  const Icon = typeof icon === 'string' ? null : icon;

  return (
    <span className={`icon-box ${className}`} aria-hidden="true">
      {Icon ? (
        <Icon
          size={size}
          strokeWidth={1.8}
          absoluteStrokeWidth
          className="icon-box-lucide"
        />
      ) : (
        <Image
          src={icon as string}
          alt=""
          width={size}
          height={size}
          className="icon-box-image"
        />
      )}
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const [scrolled, setScrolled] = useState(false);
  const [activeProductCategory, setActiveProductCategory] =
    useState<ProductCategory>('featured');
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const menuPanelRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, heroSlideIntervalMs);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const panel = menuPanelRef.current;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    requestAnimationFrame(() => first?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = oldOverflow;
      previousFocus?.focus();
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const syncActiveSectionAtPageEnd = () => {
      const pageBottom = window.scrollY + window.innerHeight;
      const atPageEnd = pageBottom >= document.documentElement.scrollHeight - 8;
      if (atPageEnd) setActiveSection('kontak');
    };

    const syncActiveSectionFromHash = () => {
      const hashId = decodeURIComponent(window.location.hash.slice(1));
      if (navItems.some((item) => item.id === hashId)) {
        setActiveSection(hashId);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-25% 0px -62%', threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    syncActiveSectionFromHash();
    syncActiveSectionAtPageEnd();
    window.addEventListener('scroll', syncActiveSectionAtPageEnd, {
      passive: true,
    });
    window.addEventListener('resize', syncActiveSectionAtPageEnd);
    window.addEventListener('hashchange', syncActiveSectionFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', syncActiveSectionAtPageEnd);
      window.removeEventListener('resize', syncActiveSectionAtPageEnd);
      window.removeEventListener('hashchange', syncActiveSectionFromHash);
    };
  }, []);

  const visibleProducts =
    activeProductCategory === 'featured'
      ? products.filter((product) => product.featured)
      : products.filter(
          (product) => product.category === activeProductCategory,
        );

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      <a href="#konten-utama" className="skip-link">
        Lewati ke konten utama
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? 'border-slate-200 shadow-[0_8px_30px_rgba(15,47,77,.08)]'
            : 'border-transparent'
        }`}
      >
        <div className="site-container flex h-[72px] items-center justify-between gap-5 sm:h-20">
          <a
            href="#beranda"
            aria-label="Logi Data - Beranda"
            className="shrink-0"
            onClick={() => setActiveSection('beranda')}
          >
            <Image
              src="/assets/brand/logidata-horizontal.png"
              alt="Logi Data"
              width={280}
              height={32}
              priority
              className="h-auto w-[158px] sm:w-[190px]"
            />
          </a>

          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-6 xl:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
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
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-[80] isolate xl:hidden">
          <button
            type="button"
            aria-label="Tutup menu navigasi"
            className="mobile-menu-overlay absolute inset-0 bg-slate-950/45 backdrop-blur-[2px]"
            onClick={() => setMenuOpen(false)}
          />
          <dialog
            open
            id="menu-mobile"
            ref={menuPanelRef}
            aria-modal="true"
            aria-labelledby="menu-mobile-title"
            className="mobile-menu-panel absolute inset-y-0 right-0 m-0 flex h-dvh max-h-none w-full min-h-0 max-w-none flex-col overflow-hidden border-0 bg-white p-0 text-left text-slate-950 shadow-[-18px_0_55px_rgba(11,40,64,.2)] sm:w-[420px] sm:border-l sm:border-slate-200"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-6 sm:py-5">
              <Image
                src="/assets/brand/logidata-horizontal.png"
                alt="Logi Data"
                width={280}
                height={32}
                className="h-auto w-[164px] sm:w-[184px]"
              />
              <h2 id="menu-mobile-title" className="sr-only">
                Menu navigasi
              </h2>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Tutup menu navigasi"
                className="grid size-11 shrink-0 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-brand-blue/30 hover:bg-sky-50 hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              >
                <X aria-hidden="true" size={22} />
              </button>
            </div>

            <nav
              aria-label="Navigasi mobile"
              className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain bg-white px-4 py-4 sm:px-5 sm:py-5"
            >
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMenuOpen(false);
                  }}
                  className={`mobile-nav-link ${activeSection === item.id ? 'is-active' : ''}`}
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  <span>{item.label}</span>
                  <ChevronRight aria-hidden="true" size={18} />
                </a>
              ))}
              <a
                href="mailto:info@logidata.id?subject=Permintaan%20Penawaran"
                onClick={() => setMenuOpen(false)}
                className="button-primary mt-4 shrink-0 justify-center"
              >
                Minta Penawaran
                <ArrowRight aria-hidden="true" size={18} />
              </a>
            </nav>

            <div className="shrink-0 border-t border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-600 sm:px-6">
              Senin–Jumat, 08.30–17.30 WIB
            </div>
          </dialog>
        </div>
      ) : null}

      <div id="konten-utama">
        <section
          id="beranda"
          className="hero-surface relative isolate overflow-hidden pt-[72px] sm:pt-20"
        >
          <div className="site-container grid min-h-[calc(100svh-72px)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:py-24">
            <div className="hero-copy max-w-2xl">
              <p className="eyebrow mb-5">
                <span className="h-2 w-2 rounded-full bg-brand-green" />
                Partner Teknologi di Surabaya
              </p>
              <h1 className="text-balance text-[clamp(2.65rem,6vw,5.5rem)] font-black leading-[.98] tracking-[-.055em] text-brand-ink">
                Solusi IT untuk{' '}
                <span className="text-brand-blue">Bisnis, Sekolah,</span> dan{' '}
                <span className="text-brand-green">Instansi</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                Pengadaan dan dukungan teknologi yang cepat, tepat, dan
                terpercaya untuk menjaga operasional Anda tetap berjalan.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:info@logidata.id?subject=Konsultasi%20Kebutuhan%20IT"
                  className="button-primary group justify-center"
                >
                  Konsultasi Sekarang
                  <ArrowRight
                    aria-hidden="true"
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a href="#solusi" className="button-secondary justify-center">
                  Lihat Solusi
                </a>
              </div>

              <ul className="mt-10 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-3">
                {[
                  'Solusi terpercaya',
                  'Layanan profesional',
                  'Dukungan purnajual',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2
                      aria-hidden="true"
                      className="shrink-0 text-brand-blue"
                      size={19}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-media relative mx-auto w-full max-w-[620px]">
              <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2.2rem] bg-gradient-to-br from-brand-blue/15 to-brand-green/20" />
              <section
                aria-roledescription="carousel"
                aria-label="Brosur produk Logi Data"
                className="relative aspect-[1.04] overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_30px_90px_rgba(15,47,77,.2)]"
              >
                {heroSlides.map((slide, index) => {
                  const isActive = index === activeHeroSlide;

                  return (
                    <Image
                      key={slide.src}
                      src={slide.src}
                      alt={isActive ? slide.alt : ''}
                      aria-hidden={!isActive}
                      fill
                      preload={index === 0}
                      sizes="(max-width: 1024px) 92vw, 48vw"
                      className={`object-contain transition-opacity duration-700 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  );
                })}
              </section>
              <fieldset
                className="m-0 mt-4 flex justify-center border-0 p-0"
                aria-label="Pilih brosur produk"
              >
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
                  {heroSlides.map((slide, index) => {
                    const isActive = index === activeHeroSlide;

                    return (
                      <button
                        key={slide.src}
                        type="button"
                        aria-label={`Tampilkan brosur ${slide.name}`}
                        aria-current={isActive ? 'true' : undefined}
                        onClick={() => setActiveHeroSlide(index)}
                        className={`h-2.5 rounded-full transition-[width,background-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${
                          isActive
                            ? 'w-7 bg-brand-blue'
                            : 'w-2.5 bg-slate-300 hover:bg-brand-blue/60'
                        }`}
                      />
                    );
                  })}
                </div>
              </fieldset>
            </div>
          </div>
        </section>

        <section
          aria-label="Merek produk tersedia"
          className="border-y border-slate-200 bg-slate-50/85 py-7"
        >
          <div className="site-container grid gap-5 lg:grid-cols-[230px_1fr] lg:items-center lg:gap-9">
            <p className="max-w-[230px] text-sm font-semibold leading-5 text-slate-500">
              Beragam produk teknologi untuk mendukung kebutuhan Anda
            </p>
            <div className="grid grid-cols-2 items-center gap-x-4 gap-y-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-6">
              {brands.map((brand, index) => (
                <div
                  key={brand.name}
                  className="brand-logo-item"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <Image
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    width={brand.width}
                    height={brand.height}
                    className="brand-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="tentang"
          className="section-space relative overflow-hidden"
        >
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
                Kami mendampingi pelanggan dalam memilih perangkat dan
                memberikan dukungan purnajual, dengan mengutamakan kualitas
                layanan serta kepuasan pelanggan.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  'Rekomendasi sesuai kebutuhan',
                  'Dukungan setelah pembelian',
                  'Pelayanan untuk beragam sektor',
                  'Pilihan perangkat berkualitas',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm font-bold text-slate-700 shadow-sm"
                  >
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
                eyebrow="Layanan Utama"
                title="Fokus pada pengadaan dan dukungan produk"
                description="Kami menyediakan perangkat IT dan CCTV, disertai dukungan setelah pembelian."
              />
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 80}>
                  <article className="service-card group flex h-full flex-col">
                    <div className="flex items-center gap-4">
                      <IconBox
                        icon={service.icon}
                        className="icon-box-service"
                        size={26}
                      />
                      <h3 className="text-xl font-extrabold tracking-tight text-brand-ink">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mt-5 leading-7 text-slate-600">
                      {service.description}
                    </p>
                    <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-brand-blue">
                      Pelajari solusi
                      <ArrowRight
                        aria-hidden="true"
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="produk"
          className="section-space product-showcase relative isolate overflow-hidden bg-[#f4f9fc]"
        >
          <div className="product-showcase-orb absolute -right-40 top-8 -z-10 size-[32rem] rounded-full" />
          <div className="site-container">
            <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
              <Reveal>
                <SectionHeading
                  eyebrow="Produk Pilihan"
                  title="Perangkat tepat untuk ruang yang bekerja lebih baik"
                  description="Jelajahi CCTV, display interaktif, proyektor, printer, layar proyektor, serta bracket dan stand sesuai kebutuhan Anda."
                  align="left"
                />
              </Reveal>

              <Reveal delay={100}>
                <div className="rounded-[1.5rem] border border-brand-blue/15 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,79,120,.08)] backdrop-blur-sm sm:p-7">
                  <div className="flex items-start gap-4">
                    <IconBox
                      icon="/assets/icons/analysis.svg"
                      className="icon-box-md"
                      size={27}
                    />
                    <div>
                      <h3 className="text-lg font-extrabold text-brand-ink">
                        Rekomendasi sesuai kebutuhan
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Tim kami membantu mencocokkan model, ukuran, dan
                        spesifikasi dengan kebutuhan ruang serta anggaran Anda.
                      </p>
                    </div>
                  </div>
                  <a
                    href="mailto:info@logidata.id?subject=Konsultasi%20Produk%20Logi%20Data"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand-blue transition hover:text-[#125f9c] focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                  >
                    Konsultasikan kebutuhan
                    <ArrowRight aria-hidden="true" size={17} />
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={80}>
              <div className="product-tabs-scroll mt-10 overflow-x-auto pb-2">
                <div
                  className="inline-flex min-w-max gap-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-[0_8px_28px_rgba(15,47,77,.06)]"
                  role="tablist"
                  aria-label="Kategori produk"
                >
                  {productCategoryTabs.map((category) => {
                    const isActive = activeProductCategory === category.id;

                    return (
                      <button
                        key={category.id}
                        id={`product-tab-${category.id}`}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls="product-grid"
                        onClick={() => setActiveProductCategory(category.id)}
                        className={`min-h-11 rounded-xl px-4 py-2 text-sm font-extrabold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${
                          isActive
                            ? 'bg-brand-blue text-white shadow-[0_8px_18px_rgba(27,114,182,.24)]'
                            : 'text-slate-600 hover:bg-sky-50 hover:text-brand-blue'
                        }`}
                      >
                        {category.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <div
              id="product-grid"
              role="tabpanel"
              aria-labelledby={`product-tab-${activeProductCategory}`}
              className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
            >
              {visibleProducts.map((product, index) => (
                <Reveal key={product.model} delay={(index % 3) * 70}>
                  <article className="product-showcase-card group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
                    <div className="product-image-stage relative aspect-[1.3] overflow-hidden">
                      <div className="absolute left-4 top-4 z-10 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-[11px] font-black uppercase tracking-[.14em] text-brand-blue shadow-sm backdrop-blur">
                        {product.brand}
                      </div>
                      <Image
                        src={product.image}
                        alt={`${product.name} ${product.model}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-contain p-7 mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.045] sm:p-8"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-extrabold uppercase tracking-[.16em] text-brand-green-deep">
                        {product.model}
                      </p>
                      <h3 className="mt-2 text-xl font-black tracking-tight text-brand-ink">
                        {product.name}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                        {product.description}
                      </p>
                      <a
                        href={`mailto:info@logidata.id?subject=${encodeURIComponent(`Tanya Produk ${product.model}`)}`}
                        className="mt-5 inline-flex min-h-11 items-center gap-2 border-t border-slate-100 pt-4 text-sm font-extrabold text-brand-blue transition hover:text-[#125f9c] focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                      >
                        Tanya produk
                        <ArrowRight
                          aria-hidden="true"
                          size={17}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-10 flex flex-col gap-5 rounded-[1.5rem] bg-brand-ink px-6 py-7 text-white shadow-[0_20px_55px_rgba(11,40,64,.16)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <div className="flex items-start gap-4">
                  <IconBox
                    icon="/assets/icons/device-procurement.svg"
                    className="icon-box-sm icon-box-on-dark"
                    size={23}
                  />
                  <div>
                    <h3 className="font-extrabold">
                      Belum menemukan model yang dicari?
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Sampaikan kebutuhan Anda untuk mendapatkan pilihan produk
                      lainnya.
                    </p>
                  </div>
                </div>
                <a
                  href="mailto:info@logidata.id?subject=Permintaan%20Katalog%20Produk"
                  className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-extrabold text-brand-ink transition hover:-translate-y-0.5 hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Minta katalog
                  <MonitorUp aria-hidden="true" size={17} />
                </a>
              </div>
            </Reveal>
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
                        <IconBox
                          icon={segment.icon}
                          className="icon-box-sm"
                          size={24}
                        />
                        <h3 className="text-xl font-extrabold tracking-tight text-brand-ink">
                          {segment.title}
                        </h3>
                      </div>
                      <p className="mt-4 leading-7 text-slate-600">
                        {segment.description}
                      </p>
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
                    <IconBox
                      icon={benefit.icon}
                      className="icon-box-md"
                      size={28}
                    />
                    <h3 className="mt-5 text-lg font-extrabold text-brand-ink">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {benefit.description}
                    </p>
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
                title="Proses mudah dari konsultasi hingga pengadaan"
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
                      <IconBox
                        icon={step.icon}
                        className="icon-box-process"
                        size={28}
                      />
                    </div>
                    <div className="mt-5 lg:text-center">
                      <h3 className="text-lg font-extrabold text-brand-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {step.description}
                      </p>
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
                title="Contoh pengadaan perangkat kami"
                description="Gambaran perangkat teknologi untuk kebutuhan kantor, ruang kolaborasi, dan pendidikan."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <Reveal
                  key={project.title}
                  delay={index * 80}
                  className={index === 2 ? 'md:col-span-2 xl:col-span-1' : ''}
                >
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
                      <p className="text-xs font-extrabold uppercase tracking-[.16em] text-brand-blue">
                        {project.category}
                      </p>
                      <h3 className="mt-3 text-xl font-extrabold leading-snug tracking-tight text-brand-ink">
                        {project.title}
                      </h3>
                      <p className="mt-3 leading-7 text-slate-600">
                        {project.description}
                      </p>
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
                <p className="text-sm font-extrabold uppercase tracking-[.18em] text-sky-100">
                  Mari berdiskusi
                </p>
                <h2 className="mt-3 text-balance text-3xl font-black leading-tight tracking-[-.035em] sm:text-4xl">
                  Butuh solusi IT untuk bisnis atau instansi Anda?
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-white/80">
                  Sampaikan kebutuhan Anda. Tim kami akan membantu memberikan
                  rekomendasi produk dan solusi yang sesuai.
                </p>
              </div>
              <a
                href="mailto:info@logidata.id?subject=Permintaan%20Penawaran"
                className="group mt-8 inline-flex min-h-13 shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-brand-blue shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:mt-0"
              >
                Minta Penawaran
                <ArrowRight
                  aria-hidden="true"
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </Reveal>
        </section>

        <footer
          id="kontak"
          className="border-t border-slate-200 bg-white pt-14"
        >
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
                Partner solusi teknologi untuk bisnis, sekolah, dan instansi di
                Surabaya.
              </p>
              <p className="mt-5 text-sm font-bold text-brand-ink">
                Solusi IT Cepat, Tepat, dan Terpercaya.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-black uppercase tracking-[.16em] text-brand-ink">
                Menu
              </h2>
              <nav aria-label="Navigasi footer" className="mt-5 grid gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setActiveSection(item.id)}
                    className="w-fit text-sm font-medium text-slate-600 transition hover:text-brand-blue"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="text-sm font-black uppercase tracking-[.16em] text-brand-ink">
                Kontak Kami
              </h2>
              <address className="mt-5 grid gap-4 not-italic text-sm leading-6 text-slate-600">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jl.%20Ngagel%20Jaya%20Selatan%20Ruko%20RMI%20Blok%20D-25%20Surabaya"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <MapPin aria-hidden="true" size={20} />
                  <span>
                    Jl. Ngagel Jaya Selatan, Ruko RMI Blok D-25, Surabaya
                  </span>
                  <ExternalLink
                    aria-hidden="true"
                    className="ml-auto shrink-0"
                    size={14}
                  />
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
                  <Clock3 aria-hidden="true" size={20} />
                  <span>Senin–Jumat, 08.30–17.30 WIB</span>
                </div>
              </address>
            </div>
          </div>

          <div className="border-t border-slate-200 py-5">
            <div className="site-container flex flex-col gap-2 text-xs leading-5 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} PT Logi Data Teknologi. Seluruh hak
                dilindungi.
              </p>
              <p>Solusi Teknologi untuk Masa Depan yang Lebih Baik</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
