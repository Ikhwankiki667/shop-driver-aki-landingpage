import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Red_Hat_Display } from 'next/font/google';
import './globals.css';
import { siteConfig } from '../config/siteConfig';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const redHat = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ShopDrive Aki 24 Jam - Bantuan Darurat Aki Mobil & Home Service Terdekat',
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
  authors: [{ name: 'ShopDrive Aki 24 Jam' }],
  openGraph: {
    title: 'ShopDrive Aki 24 Jam - Bantuan Darurat Aki Mobil & Home Service Terdekat',
    description:
      'Layanan ganti aki mobil darurat 24 jam terdekat. Antar & pasang di lokasi Anda, garansi resmi hingga 2 tahun, stok aki original GS Astra, Yuasa, Amaron, Bosch, FB & Incoe.',
    url: 'https://shopdriveaki.com',
    siteName: 'ShopDrive Aki 24 Jam',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShopDrive Aki 24 Jam - Bantuan Darurat Aki Mobil & Home Service Terdekat',
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
    <html lang="id" className={`scroll-smooth ${plusJakarta.variable} ${redHat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
