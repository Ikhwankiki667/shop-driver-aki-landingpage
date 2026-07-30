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
    const message = `Halo ShopDriveAki 24 Jam, mobil saya mogok/aki tekor${areaText}. Lokasi GPS saya: [Ketik Alamat/Patokan Anda]. Mohon kirim teknisi ganti aki terdekat`;
    return `${this.BASE_URL}${this.PHONE}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Seamlessly triggers GPS Geolocation detection on click before launching WhatsApp.
   * If GPS is granted within 3 seconds, appends Google Maps link automatically.
   * If denied/failed/timed out, launches WhatsApp with explicit fallback prompt message.
   */
  public static async openEmergencyWhatsAppWithGPS(locationName?: string): Promise<void> {
    const phone = this.PHONE;

    const launchUrl = (locationData?: string) => {
      let message = '';
      const gpsLocationStr = locationData || '[Ketik Alamat/Patokan Anda]';
      
      if (locationName) {
        message = `Halo ShopDriveAki 24 Jam, mobil saya mogok/aki tekor di area ${locationName}. Lokasi GPS saya: ${gpsLocationStr}. Mohon kirim teknisi ganti aki terdekat`;
      } else {
        message = `Halo ShopDriveAki 24 Jam, mobil saya mogok/aki tekor. Lokasi GPS saya: ${gpsLocationStr}. Mohon kirim teknisi ganti aki terdekat`;
      }

      const finalUrl = `${this.BASE_URL}${phone}?text=${encodeURIComponent(message)}`;
      if (typeof window !== 'undefined') {
        window.open(finalUrl, '_blank', 'noopener,noreferrer');
      }
    };

    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 3000,
            maximumAge: 60000,
          });
        });
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://maps.google.com/?q=${latitude.toFixed(5)},${longitude.toFixed(5)}`;
        launchUrl(mapsUrl);
        return;
      } catch (err) {
        console.warn('GPS detection skipped or denied:', err);
      }
    }

    launchUrl();
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
   * Direct Phone Dial link
   */
  public static buildPhoneCallUrl(): string {
    return `tel:${siteConfig.brand.emergencyPhone}`;
  }
}
