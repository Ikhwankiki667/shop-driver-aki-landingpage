import React from 'react';
import { Zap, PhoneCall, ShieldCheck, Globe, Share2, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0C] border-t border-zinc-800 text-zinc-400 text-sm py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#E63946] flex items-center justify-center text-white">
                <Zap className="w-5 h-5 fill-white text-white" />
              </div>
              <span className="font-extrabold text-2xl tracking-wider text-white font-display uppercase">
                SHOP<span className="text-[#E63946]">DRIVE</span>
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Pusat layanan penggantian aki mobil darurat 24 Jam antar pasang lokasi terdepan di Indonesia. Teknisi bersertifikat, garansi resmi 24 bulan, 100% Bebas Ongkir &amp; Pemasangan.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram ShopDrive"
                className="w-8 h-8 rounded-lg bg-[#1A1A1D] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#E63946] hover:border-[#E63946] transition-all"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook ShopDrive"
                className="w-8 h-8 rounded-lg bg-[#1A1A1D] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#E63946] hover:border-[#E63946] transition-all"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok ShopDrive"
                className="w-8 h-8 rounded-lg bg-[#1A1A1D] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#E63946] hover:border-[#E63946] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white font-display uppercase tracking-wider text-base">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-[#E63946] transition-colors">Ganti Aki Mobil 24 Jam</a></li>
              <li><a href="#catalog" className="hover:text-[#E63946] transition-colors">Aki GS Astra Maintenance Free</a></li>
              <li><a href="#catalog" className="hover:text-[#E63946] transition-colors">Aki Amaron Silver Long Life</a></li>
              <li><a href="#catalog" className="hover:text-[#E63946] transition-colors">Aki Varta European Start-Stop</a></li>
              <li><a href="#coverage" className="hover:text-[#E63946] transition-colors">Layanan Jumpstart / Jamper Aki</a></li>
              <li><a href="#catalog" className="hover:text-[#E63946] transition-colors">Tukar Tambah Aki Bekas</a></li>
            </ul>
          </div>

          {/* Service Area Cities */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white font-display uppercase tracking-wider text-base">
              Kota Siaga Utama
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Jakarta Selatan, Barat, Pusat, Utara, Timur</li>
              <li>Tangerang Kota, BSD, Tangerang Selatan, Bintaro</li>
              <li>Bekasi Kota, Cikarang, Depok, Bogor, Sentul</li>
              <li>Bandung Kota, Cimahi &amp; Sekitarnya</li>
              <li>Surabaya, Sidoarjo, Malang &amp; Bali</li>
            </ul>
          </div>

          {/* Emergency Hotline Box */}
          <div className="space-y-3 bg-[#1A1A1D] p-5 rounded-xl border border-[#E63946]/30">
            <div className="flex items-center gap-2 text-[#E63946] text-xs font-bold uppercase tracking-wider">
              <PhoneCall className="w-4 h-4 animate-bounce" />
              <span>HOTLINE SOS MOGOK 24 JAM</span>
            </div>
            <div className="text-xl font-extrabold text-white font-mono">
              {siteConfig.brand.emergencyPhoneDisplay}
            </div>
            <p className="text-xs text-zinc-400">
              Operational 24 Hours / 7 Days a week. Bebas biaya konsultasi kelistrikan.
            </p>
            <div className="pt-2">
              <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> Garansi Resmi 24 Bulan
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-zinc-800/80 text-center sm:flex sm:items-center sm:justify-between text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.brand.name} ({siteConfig.brand.domain}). All rights reserved.
          </div>
          <div className="mt-2 sm:mt-0 space-x-4">
            <a href="#hero" className="hover:text-zinc-300">Privacy Policy</a>
            <span>•</span>
            <a href="#hero" className="hover:text-zinc-300">Terms of Service</a>
            <span>•</span>
            <a href="#hero" className="hover:text-zinc-300">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
