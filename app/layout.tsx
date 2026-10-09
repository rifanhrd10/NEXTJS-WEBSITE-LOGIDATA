import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rifans.web.id'),
  title: 'Logi Data Teknologi | Solusi IT Surabaya',
  description:
    'Solusi pengadaan perangkat dan dukungan IT untuk bisnis, sekolah, dan instansi di Surabaya.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Logi Data Teknologi | Solusi IT Surabaya',
    description:
      'Solusi pengadaan perangkat dan dukungan IT untuk bisnis, sekolah, dan instansi di Surabaya.',
    url: '/',
    locale: 'id_ID',
    type: 'website',
    siteName: 'Logi Data Teknologi',
  },
  icons: {
    icon: '/assets/brand/logidata-square.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
