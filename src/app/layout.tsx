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
  metadataBase: new URL('https://www.shopdriveaki.com'),
  title: 'ShopDrive Aki 24 Jam | Layanan Antar Pasang Aki Mobil Terdekat',
  description:
    'Mobil mogok karena aki tekor? Layanan ganti aki 24 jam siap meluncur ke lokasi Anda! Aki 100% original, gratis antar pasang, garansi resmi. Panggil sekarang!',
  applicationName: 'ShopDrive Aki',
  authors: [{ name: 'ShopDrive Aki' }],
  keywords: ['shopdrive aki', 'ganti aki mobil', 'toko aki terdekat', 'layanan aki 24 jam'],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'ShopDrive Aki 24 Jam | Layanan Antar Pasang Aki Mobil Terdekat',
    description:
      'Mobil mogok karena aki tekor? Layanan ganti aki 24 jam siap meluncur ke lokasi Anda! Aki 100% original, gratis antar pasang, garansi resmi. Panggil sekarang!',
    url: 'https://www.shopdriveaki.com',
    siteName: 'ShopDrive Aki 24 Jam',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ShopDrive Aki 24 Jam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShopDrive Aki 24 Jam | Layanan Antar Pasang Aki Mobil Terdekat',
    description:
      'Mobil mogok karena aki tekor? Layanan ganti aki 24 jam siap meluncur ke lokasi Anda! Aki 100% original, gratis antar pasang, garansi resmi. Panggil sekarang!',
    images: ['/og-image.png'],
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
