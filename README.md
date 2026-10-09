# Logi Data Teknologi

Website company profile PT Logi Data Teknologi yang dibangun dengan Next.js dan Tailwind CSS. Website dikonfigurasi sebagai static export agar bisa digunakan di Vercel maupun shared hosting biasa tanpa VPS.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Membuat static export

```bash
npm run lint
npm run build
```

Hasil akhirnya tersedia di folder `out/`. Untuk memeriksa hasil build secara lokal:

```bash
npm run start
```

## Deployment ke shared hosting atau cPanel

1. Jalankan `npm run build`.
2. Buka folder `out/`.
3. Untuk domain `rifans.web.id`, buka folder yang ditampilkan sebagai **Document Root** untuk `rifans.web.id` di cPanel.
4. Unggah **seluruh isi** folder `out/` langsung ke folder tersebut, bukan folder `out`-nya.
5. Pastikan file `index.html`, folder `_next`, dan folder `assets` berada langsung di document root `rifans.web.id`.

Tidak diperlukan Node.js, database, environment variable, atau proses server yang terus berjalan di hosting.

Website produksi menggunakan URL `https://rifans.web.id`. Pastikan SSL/HTTPS domain sudah aktif setelah file selesai diunggah.

## Deployment ke Vercel

1. Push seluruh isi repository ini ke GitHub, GitLab, atau Bitbucket.
2. Import repository tersebut melalui dashboard Vercel.
3. Biarkan **Framework Preset** terdeteksi sebagai **Next.js**.
4. Gunakan build command `npm run build` dan jangan mengubah konfigurasi output secara manual.
5. Deploy. Website ini tidak membutuhkan environment variable untuk dapat berjalan.

Runtime Node.js dikunci ke versi 24 melalui `package.json` agar build lokal dan Vercel konsisten.
