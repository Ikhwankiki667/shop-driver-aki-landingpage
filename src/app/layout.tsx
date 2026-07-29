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
  title: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`,
  description:
    'Layanan antar & pasang aki mobil 24 Jam darurat ke lokasi Anda. Respon teknisi <10 menit, 100% Bebas Ongkir & Pemasangan, Garansi Resmi 24 Bulan GS Astra & Amaron.',
  keywords: [
    'ShopDrive',
    'shopdriveaki.com',
    'ganti aki mobil 24 jam',
    'layanan aki mogok',
    'aki gs astra',
    'aki amaron',
    'antar pasang aki lokasi',
    'aki mobil terdekat',
  ],
  authors: [{ name: 'ShopDrive Indonesia' }],
  openGraph: {
    title: `ShopDrive - Solusi Cepat Ganti Aki Mobil 24 Jam`,
    description: `Mobil mogok aki tekor? Teknisi ShopDrive siaga meluncur ke posisi Anda dalam <10 menit. Garansi resmi 24 bulan!`,
    url: `https://${siteConfig.brand.domain}`,
    siteName: siteConfig.brand.name,
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${barlowCondensed.variable} ${inter.variable}`}>
      <body className="font-body bg-[#0D0D0F] text-[#E5E1E4] antialiased">
        {children}
      </body>
    </html>
  );
}
