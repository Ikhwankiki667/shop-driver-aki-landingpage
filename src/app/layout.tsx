import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Red_Hat_Display } from 'next/font/google';
import './globals.css';
import { siteConfig } from '../config/siteConfig';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

const redHat = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shopdriveaki.com'),
  title: 'Shop Drive Aki 24 Jam | Layanan Antar Pasang Aki Mobil Terdekat',
  description:
    'Mobil mogok karena aki tekor? Layanan ganti aki 24 jam siap meluncur ke lokasi Anda! Aki 100% original, gratis antar pasang, garansi resmi. Panggil sekarang!',
  applicationName: 'Shop Drive Aki',
  authors: [{ name: 'Shop Drive Aki' }],
  keywords: ['shop drive aki', 'ganti aki mobil', 'toko aki terdekat', 'layanan aki 24 jam'],
  icons: {
    icon: '/Logo.png',
    shortcut: '/Logo.png',
    apple: '/Logo.png',
  },
  openGraph: {
    title: 'Shop Drive Aki 24 Jam | Layanan Antar Pasang Aki Mobil Terdekat',
    description:
      'Mobil mogok karena aki tekor? Layanan ganti aki 24 jam siap meluncur ke lokasi Anda! Aki 100% original, gratis antar pasang, garansi resmi. Panggil sekarang!',
    url: 'https://www.shopdriveaki.com',
    siteName: 'Shop Drive Aki 24 Jam',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shop Drive Aki 24 Jam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop Drive Aki 24 Jam | Layanan Antar Pasang Aki Mobil Terdekat',
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
