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
  metadataBase: new URL('https://logi-data-surabaya.rifan-hardiyan.chatgpt.site'),
  title: 'Logi Data Teknologi | Solusi IT Surabaya',
  description:
    'Solusi pengadaan perangkat, instalasi, dan dukungan IT untuk bisnis, sekolah, dan instansi di Surabaya.',
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
