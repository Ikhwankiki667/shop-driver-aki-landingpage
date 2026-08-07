'use client';

import React from 'react';
import Image from 'next/image';
import { PhoneCall, MapPin, Zap, ShieldCheck, Clock, Award, Star, MessageSquare, CreditCard } from 'lucide-react';
import fotoHero from '../../image/Mobil/FotoUntuk.webp';
import { siteConfig } from '../../config/siteConfig';
import { WhatsAppService } from '../../services/WhatsAppService';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const Hero: React.FC = () => {
  const [isConnecting, setIsConnecting] = React.useState(false);
  const [locationStatus, setLocationStatus] = React.useState<'idle' | 'locating' | 'success' | 'denied'>('idle');
  const [detectedMapsUrl, setDetectedMapsUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleReset = () => setIsConnecting(false);
    window.addEventListener('focus', handleReset);
    window.addEventListener('pageshow', handleReset);
    return () => {
      window.removeEventListener('focus', handleReset);
      window.removeEventListener('pageshow', handleReset);
    };
  }, []);

  const redirectToWhatsApp = React.useCallback((coords?: { lat: number; lng: number }) => {
    const phone = siteConfig.brand.whatsAppNumber;
    let message = '';

    if (coords) {
      const mapsUrl = `https://maps.google.com/?q=${coords.lat.toFixed(5)},${coords.lng.toFixed(5)}`;
      message = `Halo Shop Drive Aki, saya butuh ganti aki. Lokasi GPS saya : ${mapsUrl}\n\nApakah ada teknisi yang bisa meluncur sekarang?`;
    } else if (detectedMapsUrl) {
      message = `Halo Shop Drive Aki, saya butuh ganti aki. Lokasi GPS saya : ${detectedMapsUrl}\n\nApakah ada teknisi yang bisa meluncur sekarang?`;
    } else {
      message = `Halo Shop Drive Aki, mobil saya mogok dan butuh ganti aki darurat. Lokasi saya ada di: `;
    }

    const finalUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined') {
      window.location.href = finalUrl;
      setTimeout(() => {
        setIsConnecting(false);
      }, 2500);
    }
  }, [detectedMapsUrl]);

  const handleMainCTAClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (isConnecting) return;

    setIsConnecting(true);

    if (detectedMapsUrl) {
      redirectToWhatsApp();
      return;
    }

    if (typeof window === 'undefined' || !navigator || !navigator.geolocation) {
      redirectToWhatsApp();
      return;
    }

    let hasRedirected = false;
    const safeRedirectOnce = (coords?: { lat: number; lng: number }) => {
      if (hasRedirected) return;
      hasRedirected = true;
      redirectToWhatsApp(coords);
    };

    const safetyTimer = setTimeout(() => {
      safeRedirectOnce();
    }, 3000);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        clearTimeout(safetyTimer);
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://maps.google.com/?q=${latitude.toFixed(5)},${longitude.toFixed(5)}`;
        setDetectedMapsUrl(mapsUrl);
        setLocationStatus('success');
        safeRedirectOnce({ lat: latitude, lng: longitude });
      },
      (error) => {
        clearTimeout(safetyTimer);
        console.warn('Geolocation fallback:', error.message || error);
        setLocationStatus('denied');
        safeRedirectOnce();
      },
      {
        enableHighAccuracy: false,
        timeout: 3000,
        maximumAge: 60000,
      }
    );
  };

  const handleDetectGPSOnly = () => {
    if (typeof window === 'undefined' || !navigator || !navigator.geolocation) {
      setLocationStatus('denied');
      return;
    }
    setLocationStatus('locating');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://maps.google.com/?q=${latitude.toFixed(5)},${longitude.toFixed(5)}`;
        setDetectedMapsUrl(mapsUrl);
        setLocationStatus('success');
      },
      (error) => {
        console.warn('Geolocation detect only fallback:', error.message || error);
        setLocationStatus('denied');
      },
      {
        enableHighAccuracy: false,
        timeout: 3000,
        maximumAge: 60000,
      }
    );
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.06),transparent_65%)] pointer-events-none" />
      
      {/* Diagonal Speed Lines Motif */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #DC2626 0, #DC2626 2px, transparent 0, transparent 24px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copywriting & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">

            {/* Industrial Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-slate-900 tracking-tight font-display leading-[1.05]">
                GANTI AKI MOBIL <br />
                <span className="text-red-600 drop-shadow-sm">
                  24 JAM
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Solusi cepat saat mobil mogok karena aki tekor. Tim <strong className="text-slate-900 font-bold">Shop Drive Aki</strong> siap menghubungkan Anda dengan jaringan teknisi partner terdekat untuk antar dan pasang aki original bergaransi resmi langsung di lokasi Anda.
              </p>

              {/* Key Value Proposition Badges */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-extrabold shadow-sm">
                  <Clock className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Teknisi Datang 15–25 Menit</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-extrabold shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bayar Setelah Terpasang</span>
                </span>
              </div>
            </div>

            {/* Single Primary Action Button */}
            <div className="space-y-3 pt-1 sm:pt-2">
              <div className="w-full max-w-md lg:max-w-xl mx-auto lg:mx-0">
                <a
                  href={`https://wa.me/${siteConfig.brand.whatsAppNumber}?text=${encodeURIComponent('Halo Shop Drive Aki, mobil saya mogok dan butuh ganti aki darurat. Lokasi saya ada di: ')}`}
                  onClick={handleMainCTAClick}
                  className="block w-full"
                >
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    beaconGlow
                    disabled={isConnecting}
                    className="rounded-xl font-extrabold text-sm sm:text-base py-3 sm:py-3.5 px-5 disabled:opacity-80 shadow-lg shadow-red-500/25 active:scale-95"
                    leftIcon={<PhoneCall className="w-5 h-5 fill-white text-white" />}
                  >
                    {isConnecting ? 'MENGHUBUNGKAN KE WHATSAPP...' : 'PANGGIL BANTUAN SEKARANG'}
                  </Button>
                </a>

                {/* Micro-copy text */}
                <p className="text-xs sm:text-sm text-slate-500 font-medium text-center mt-2">
                  Melayani Seluruh Indonesia • Respon Cepat 24 Jam
                </p>
              </div>

              {/* GPS Auto-Location Feature & Low Bandwidth Direct Phone Fallback */}
              <div className="w-full max-w-md lg:max-w-xl mx-auto lg:mx-0 p-2.5 sm:p-3 bg-slate-100/80 rounded-xl border border-slate-200 space-y-1.5 sm:space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <button
                    onClick={handleDetectGPSOnly}
                    disabled={locationStatus === 'locating'}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white border border-gray-300 text-slate-800 text-[11px] sm:text-xs font-bold shadow-sm hover:bg-slate-50 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DC2626] animate-bounce" />
                    <span>
                      {locationStatus === 'locating'
                        ? 'Mendeteksi lokasi GPS...'
                        : locationStatus === 'success'
                        ? '✓ Lokasi Terdeteksi'
                        : locationStatus === 'denied'
                        ? '⚠️ Lokasi Tidak Aktif'
                        : '📍 Deteksi Lokasi Saya (GPS)'}
                    </span>
                  </button>

                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-mono">
                    {locationStatus === 'success' && 'Tersambung dengan Google Maps'}
                    {locationStatus === 'denied' && 'Lokasi tidak aktif - Klik untuk panggil WA'}
                    {locationStatus === 'idle' && 'Bantu teknisi menemukan Anda cepat'}
                    {locationStatus === 'locating' && 'Meminta akses lokasi dari browser...'}
                  </div>
                </div>

                {/* Raw HTML Tap-to-Call Direct Link (Works even if JS is slow/fails) */}
                <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] sm:text-xs text-slate-700 pt-1 border-t border-slate-200/80">
                  <span className="font-semibold">Atau Telepon Langsung:</span>
                  <a
                    href={`tel:${siteConfig.brand.emergencyPhone}`}
                    className="text-[#DC2626] font-extrabold hover:underline font-mono text-xs sm:text-sm tracking-wider"
                  >
                    {siteConfig.brand.emergencyPhoneDisplay}
                  </a>
                </div>
              </div>

            </div>

            {/* Trust Badges Row */}
            <div className="pt-4 sm:pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-left">
              <div className="flex items-center gap-2.5 p-2.5 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-[#DC2626] shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#DC2626]" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-xs font-display uppercase tracking-wider">Aki GS Astra Original</div>
                  <div className="text-slate-500 text-[10px]">100% Segel Pabrik</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-[#DC2626] shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#DC2626]" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-xs font-display uppercase tracking-wider">Garansi Resmi s/d 2 Tahun</div>
                  <div className="text-slate-500 text-[10px]">Claim Mudah 24 Jam</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-[#DC2626] shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#DC2626]" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-xs font-display uppercase tracking-wider">Bayar Setelah Terpasang</div>
                  <div className="text-slate-500 text-[10px]">Cash / QRIS / Transfer</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent Real Field Photo Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-white p-3.5 sm:p-6 border border-gray-200 shadow-xl">
              
              {/* Card Header Status */}
              <div className="flex items-center justify-between pb-2.5 sm:pb-3.5 mb-3 sm:mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-[10px] sm:text-xs font-bold font-mono uppercase tracking-wider text-emerald-700">
                    TEKNISI PARTNER SIAGA LOKASI
                  </span>
                </div>
                <Badge variant="red">SIAGA 24 JAM</Badge>
              </div>

              {/* Prominent Full-Opacity Real Field Photo Frame (h-40 on mobile) */}
              <div className="relative h-40 sm:h-64 w-full rounded-xl overflow-hidden border-2 border-red-500/20 shadow-md group mb-3">
                <Image
                  src={fotoHero}
                  alt="Dokumentasi Layanan Home Service Shop Drive Aki"
                  fill
                  priority={true}
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Photo Badge Overlay */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-900/90 text-white text-[10px] sm:text-xs font-extrabold flex items-center gap-1 shadow-md pointer-events-none border border-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  <span>DOKUMENTASI LAYANAN ON-SITE</span>
                </div>

                {/* Bottom Photo Caption Banner */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent text-white">
                  <div className="text-[11px] sm:text-xs font-bold font-display uppercase tracking-wide">
                    LAYANAN HOME SERVICE 24 JAM
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-red-300 font-mono">
                    Penggantian & Pemasangan Aki di Lokasi Kustomer
                  </div>
                </div>
              </div>

              {/* Quick Value Proposition Features List */}
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2 py-1 border-b border-gray-100">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="font-semibold text-slate-900">Aki GS Astra Original 100% Segel Pabrik</span>
                </div>
                <div className="flex items-center gap-2 py-1 border-b border-gray-100">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="font-semibold text-slate-900">Bebas Biaya Antar &amp; Pasang di Tempat</span>
                </div>
                <div className="flex items-center gap-2 py-1 border-b border-gray-100">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="font-semibold text-slate-900">Gratis Pengecekan Kelistrikan &amp; Alternator</span>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="font-semibold text-slate-900">Garansi Resmi Hingga 2 Tahun</span>
                </div>
              </div>

              {/* Payment Assurance Banner */}
              <div className="mt-5 p-3 rounded-xl bg-slate-50 border border-gray-200 shadow-sm flex items-center justify-center gap-2 text-center">
                <CreditCard className="w-4 h-4 text-red-600 shrink-0" />
                <span className="text-xs font-bold text-slate-700 leading-snug">
                  Bayar di Tempat (Cash / QRIS / Transfer) Setelah Terpasang
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
