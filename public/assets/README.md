# Logi Data Website Assets

## Brand

- `brand/logidata-horizontal.png` untuk header dan navigasi.
- `brand/logidata-square.png` untuk footer, favicon sumber, atau identitas pendukung.

Logo tetap dalam PNG transparan agar bentuk merek asli tidak berubah akibat tracing otomatis.

## Icons

Semua ikon memakai `viewBox="0 0 48 48"`, latar transparan, biru `#1B72B6`, dan hijau `#07A750`.

- Services: `device-procurement.svg`, `cctv-security.svg`, `fingerprint-attendance.svg`, `display-presentation.svg`, `installation-tools.svg`, `after-sales-headset.svg`.
- Segments: `business.svg`, `education.svg`, `government.svg`.
- Benefits: `fast-response.svg`, `quality-product.svg`, `professional-team.svg`, `after-sales-shield.svg`.
- Process: `consultation.svg`, `analysis.svg`, `quotation.svg`, `implementation.svg`, dan `after-sales-headset.svg`.
- Contact/UI: `location.svg`, `phone.svg`, `email.svg`, `clock.svg`, `arrow-right.svg`.

Contoh penggunaan di Next.js:

```tsx
import Image from "next/image";

<Image
  src="/assets/icons/cctv-security.svg"
  alt="CCTV dan keamanan"
  width={48}
  height={48}
/>
```

## Images

Foto yang diekstrak dari mockup disimpan sebagai WebP karena foto raster tidak dapat menjadi SVG vektor yang baik:

- `hero-technician.webp`
- `segment-business.webp`
- `segment-education.webp`
- `segment-government.webp`
- `project-cctv.webp`
- `project-meeting-room.webp`
- `project-school-it.webp`

Foto ini berasal dari mockup beresolusi 771 piksel dan paling cocok sebagai placeholder atau thumbnail. Untuk hero produksi berukuran besar, gunakan foto sumber beresolusi lebih tinggi.

Logo merek Epson, Samsung, Hikvision, Uniarch, Brateck, dan Pixel Screen tidak ditracing dari mockup. Untuk implementasi produksi, gunakan aset SVG resmi dari masing-masing pemilik merek dan pastikan izin penggunaannya.
