import type { Metadata } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '../config/siteConfig';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ShopDrive 24H - Bantuan Darurat Aki Mobil & Home Service Terdekat',
  description:
    'Layanan ganti aki mobil darurat 24 jam terdekat. Antar & pasang di lokasi Anda, garansi resmi hingga 2 tahun, stok aki original GS Astra, Yuasa, Amaron, Bosch, FB & Incoe.',
  keywords: [
    'ganti aki mobil 24 jam',
    'aki mobil terdekat',
    'shopdrive aki',
    'bantuan aki tekor',
    'home service aki mobil',
    'aki gs astra original',
  ],
  authors: [{ name: 'ShopDrive 24H' }],
  openGraph: {
    title: 'ShopDrive 24H - Bantuan Darurat Aki Mobil & Home Service Terdekat',
    description:
      'Layanan ganti aki mobil darurat 24 jam terdekat. Antar & pasang di lokasi Anda, garansi resmi hingga 2 tahun, stok aki original GS Astra, Yuasa, Amaron, Bosch, FB & Incoe.',
    url: 'https://shopdriveaki.com',
    siteName: 'ShopDrive 24H',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShopDrive 24H - Bantuan Darurat Aki Mobil & Home Service Terdekat',
    description:
      'Layanan ganti aki mobil darurat 24 jam terdekat. Antar & pasang di lokasi Anda, garansi resmi hingga 2 tahun, stok aki original GS Astra, Yuasa, Amaron, Bosch, FB & Incoe.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${barlowCondensed.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
