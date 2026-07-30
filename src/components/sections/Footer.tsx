'use client';

import React from 'react';
import Image from 'next/image';
import { Zap, PhoneCall, ShieldCheck, Globe, Share2, MessageCircle } from 'lucide-react';
import logoImg from '../../../public/Logo.svg';
import { siteConfig } from '../../config/siteConfig';
import { WhatsAppService } from '../../services/WhatsAppService';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 text-sm py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          
          {/* Brand Info with Logo Container */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl px-2.5 py-1.5 shadow-md inline-flex items-center justify-center border border-gray-200 shrink-0">
                <Image
                  src={logoImg}
                  alt="ShopDrive Logo"
                  height={24}
                  loading="lazy"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <span className="font-extrabold text-2xl tracking-wider text-white font-display uppercase">
                SHOP<span className="text-[#DC2626]">DRIVE</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Pusat layanan penggantian aki mobil darurat 24 Jam antar pasang lokasi terdepan di Indonesia. Teknisi bersertifikat, garansi resmi hingga 2 tahun, 100% Bebas Ongkir &amp; Pemasangan.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram ShopDrive"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#DC2626] hover:border-[#DC2626] transition-all"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook ShopDrive"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#DC2626] hover:border-[#DC2626] transition-all"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok ShopDrive"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#DC2626] hover:border-[#DC2626] transition-all"
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
              <li><a href="#hero" className="hover:text-[#DC2626] transition-colors">Ganti Aki Mobil 24 Jam</a></li>
              <li><a href="#coverage" className="hover:text-[#DC2626] transition-colors">Layanan Antar Pasang Lokasi</a></li>
              <li><a href="#how-it-works" className="hover:text-[#DC2626] transition-colors">Tes Pengecekan Kelistrikan</a></li>
              <li><a href="#coverage" className="hover:text-[#DC2626] transition-colors">Layanan Jumpstart / Jamper Aki</a></li>
              <li><a href="#hero" className="hover:text-[#DC2626] transition-colors">Tukar Tambah Aki Bekas</a></li>
            </ul>
          </div>

          {/* Service Area Cities */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white font-display uppercase tracking-wider text-base">
              Jam Operasional
            </h4>
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 space-y-1 text-xs">
              <div className="font-bold text-emerald-400 uppercase">🟢 Buka 24 Jam Setiap Hari</div>
              <div className="text-slate-400">Senin - Minggu (Termasuk Hari Libur)</div>
            </div>
            <h4 className="font-extrabold text-white font-display uppercase tracking-wider text-base pt-2">
              Area Siaga Utama
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi), Bandung, Semarang, Surabaya, Bali, Medan.
            </p>
          </div>

          {/* Emergency Phone & WhatsApp Box */}
          <div className="space-y-4 bg-slate-800/90 p-5 rounded-xl border border-red-500/40 shadow-lg">
            <div className="flex items-center gap-2 text-[#DC2626] text-xs font-bold uppercase tracking-wider">
              <PhoneCall className="w-4 h-4 animate-bounce" />
              <span>PANGGILAN EMERGENCY 24 JAM</span>
            </div>
            <a
              href={`tel:${siteConfig.brand.emergencyPhone}`}
              className="block text-2xl font-extrabold text-white font-mono hover:text-[#DC2626] transition-colors tracking-tight"
            >
              {siteConfig.brand.emergencyPhoneDisplay}
            </a>
            <button
              onClick={() => WhatsAppService.openEmergencyWhatsAppWithGPS()}
              className="w-full py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer text-left"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Chat WhatsApp 24 Jam</span>
            </button>
            <div className="pt-1">
              <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> Garansi Resmi hingga 2 Tahun
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center sm:flex sm:items-center sm:justify-between text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.brand.name} ({siteConfig.brand.domain}). All rights reserved.
          </div>
          <div className="mt-2 sm:mt-0 space-x-4">
            <a href="#hero" className="hover:text-white">Privacy Policy</a>
            <span>•</span>
            <a href="#hero" className="hover:text-white">Terms of Service</a>
            <span>•</span>
            <a href="#hero" className="hover:text-white">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
