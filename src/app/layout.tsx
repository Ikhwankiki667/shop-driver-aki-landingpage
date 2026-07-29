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
  title: siteConfig.brand.name + ' - Solusi Cepat Ganti Aki Mobil 24 Jam',
  description:
    'Mobil mogok karena aki tekor? Tim ShopDrive meluncur ke lokasi Anda dalam kurang dari 10 menit, membawa aki GS Astra original. Garansi resmi hingga 2 tahun, harga transparan, bayar setelah terpasang.',
  keywords: [
    'ShopDrive',
    'ganti aki mobil 24 jam',
    'solusi cepat ganti aki mobil',
    'aki mogok 24 jam',
    'aki gs astra original',
    'aki amaron',
    'antar pasang aki lokasi',
    'tukar tambah aki',
  ],
  authors: [{ name: 'ShopDrive Indonesia' }],
  openGraph: {
    title: 'ShopDrive - Solusi Cepat Ganti Aki Mobil 24 Jam',
    description:
      'Tim ShopDrive meluncur ke lokasi Anda dalam kurang dari 10 menit, membawa aki GS Astra original. Garansi resmi hingga 2 tahun, harga transparan, bayar setelah terpasang.',
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
