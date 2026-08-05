import { siteConfig } from '../config/siteConfig';
import { IBatteryProduct } from '../types';

/**
 * WhatsAppService Class (OOP Pattern)
 * Singleton/Static helper responsible for generating standardized, high-converting
 * WhatsApp API URL links for emergency calls, product orders, and consultation inquiries.
 */
export class WhatsAppService {
  private static readonly BASE_URL = 'https://wa.me/';
  private static readonly PHONE = siteConfig.brand.whatsAppNumber;

  /**
   * Build direct emergency help call link with pre-filled SOS message
   */
  public static buildEmergencyCallUrl(userLocation?: string): string {
    const areaText = userLocation ? ` di area ${userLocation}` : '';
    const message = `Halo Shop Drive Aki, mobil saya mogok dan butuh ganti aki darurat${areaText}. Lokasi saya ada di: `;
    return `${this.BASE_URL}${this.PHONE}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Triggers fast-fallback Auto-GPS Geolocation detection (timeout 3s, enableHighAccuracy: false)
   * before launching WhatsApp.
   * If GPS succeeds <3s: Launches WhatsApp with Google Maps URL.
   * If GPS fails/denied/timeout: Launches WhatsApp immediately with emergency template without coordinates.
   */
  public static triggerAutoGPSWhatsApp(locationName?: string): void {
    const phone = this.PHONE;

    const launchWhatsApp = (coords?: { lat: number; lng: number }) => {
      let message = '';
      if (coords) {
        const mapsUrl = `https://maps.google.com/?q=${coords.lat.toFixed(5)},${coords.lng.toFixed(5)}`;
        const areaText = locationName ? ` di area ${locationName}` : '';
        message = `Halo Shop Drive Aki, saya butuh ganti aki${areaText}. Lokasi GPS saya : ${mapsUrl}\n\nApakah ada teknisi yang bisa meluncur sekarang?`;
      } else {
        const areaText = locationName ? ` di area ${locationName}` : '';
        message = `Halo Shop Drive Aki, mobil saya mogok dan butuh ganti aki darurat${areaText}. Lokasi saya ada di: `;
      }

      const finalUrl = `${this.BASE_URL}${phone}?text=${encodeURIComponent(message)}`;
      if (typeof window !== 'undefined') {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) {
          window.location.href = finalUrl;
        } else {
          window.open(finalUrl, '_blank', 'noopener,noreferrer');
        }
      }
    };

    if (typeof window === 'undefined' || !navigator || !navigator.geolocation) {
      launchWhatsApp();
      return;
    }

    let hasRedirected = false;
    const safeRedirectOnce = (coords?: { lat: number; lng: number }) => {
      if (hasRedirected) return;
      hasRedirected = true;
      launchWhatsApp(coords);
    };

    const safetyTimer = setTimeout(() => {
      safeRedirectOnce();
    }, 3000);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        clearTimeout(safetyTimer);
        const { latitude, longitude } = position.coords;
        safeRedirectOnce({ lat: latitude, lng: longitude });
      },
      (error) => {
        clearTimeout(safetyTimer);
        console.warn('Geolocation fallback:', error.message || error);
        safeRedirectOnce();
      },
      {
        enableHighAccuracy: false,
        timeout: 3000,
        maximumAge: 60000,
      }
    );
  }

  /**
   * Directly opens WhatsApp emergency inquiry URL with instant click response.
   * If userLocation / userMapsUrl is provided, it attaches the Google Maps GPS URL.
   * Otherwise falls back safely to '(share loc)'.
   */
  public static openEmergencyWhatsApp(locationName?: string, userMapsUrl?: string): void {
    const phone = this.PHONE;
    const gpsLocationStr = userMapsUrl || '(share loc)';
    let message = '';
    
    if (locationName) {
      message = `Halo Shop Drive Aki, saya butuh ganti aki di area ${locationName}. Lokasi GPS saya : ${gpsLocationStr}\n\nApakah ada teknisi yang bisa meluncur sekarang?`;
    } else {
      message = `Halo Shop Drive Aki, saya butuh ganti aki. Lokasi GPS saya : ${gpsLocationStr}\n\nApakah ada teknisi yang bisa meluncur sekarang?`;
    }

    const finalUrl = `${this.BASE_URL}${phone}?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined') {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = finalUrl;
      } else {
        window.open(finalUrl, '_blank', 'noopener,noreferrer');
      }
    }
  }

  /**
   * Backwards compatible instant launcher
   */
  public static async openEmergencyWhatsAppWithGPS(locationName?: string): Promise<void> {
    this.triggerAutoGPSWhatsApp(locationName);
  }

  /**
   * Build targeted battery price & availability inquiry link (Marketplace model)
   */
  public static buildPriceCheckUrl(product: IBatteryProduct, userLocation?: string): string {
    const locationText = userLocation ? ` untuk lokasi ${userLocation}` : '';
    const message = `Halo ${siteConfig.brand.name}, saya ingin cek harga & ketersediaan stok aki *${product.name}* (${product.category} - ${product.capacityAh}Ah)${locationText}. Mohon infokan penawaran teknisi mitra terdekat.`;
    return `${this.BASE_URL}${this.PHONE}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Build targeted battery purchase & installation order link
   */
  public static buildBatteryOrderUrl(product: IBatteryProduct, carModel?: string): string {
    const carText = carModel ? ` untuk mobil ${carModel}` : '';
    const message = `Halo ${siteConfig.brand.name}, saya ingin tanya ketersediaan & harga aki *${product.name}* (${product.capacityAh}Ah - ${product.technology})${carText}. Mohon hubungkan dengan teknisi terdekat.`;
    return `${this.BASE_URL}${this.PHONE}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Build general consultation / trade-in inquiry link
   */
  public static buildConsultationUrl(topic: string = 'Tukar Tambah Aki'): string {
    const message = `Halo ${siteConfig.brand.name}, saya ingin bertanya tentang ${topic} dan cek kecocokan aki mobil saya.`;
    return `${this.BASE_URL}${this.PHONE}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Build general FAQ consultation inquiry link (No GPS required)
   */
  public static buildFaqConsultationUrl(): string {
    const message = 'Halo Shop Drive Aki, mau tanya-tanya dulu seputar pilihan aki, harga, dan garansinya dong.';
    return `${this.BASE_URL}${this.PHONE}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Direct Phone Dial link
   */
  public static buildPhoneCallUrl(): string {
    return `tel:${siteConfig.brand.emergencyPhone}`;
  }
}
