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
    const message = `Halo ShopDriveAki, saya butuh ganti aki${areaText}. Lokasi GPS saya : (share loc)\n\nApakah ada teknisi yang bisa meluncur sekarang?`;
    return `${this.BASE_URL}${this.PHONE}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Seamlessly triggers GPS Geolocation detection on click before launching WhatsApp.
   * Gives users a full 20 seconds timeout to accept the browser location prompt.
   * If GPS is granted, appends Google Maps link automatically.
   * If denied/failed/timed out (20s), launches WhatsApp with explicit manual location prompt.
   */
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
      message = `Halo ShopDriveAki, saya butuh ganti aki di area ${locationName}. Lokasi GPS saya : ${gpsLocationStr}\n\nApakah ada teknisi yang bisa meluncur sekarang?`;
    } else {
      message = `Halo ShopDriveAki, saya butuh ganti aki. Lokasi GPS saya : ${gpsLocationStr}\n\nApakah ada teknisi yang bisa meluncur sekarang?`;
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
    this.openEmergencyWhatsApp(locationName);
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
    const message = 'Halo ShopDrive Aki 24 Jam, saya mau bertanya / konsultasi mengenai layanan aki mobil: [Tulis Pertanyaan Anda di Sini]';
    return `${this.BASE_URL}${this.PHONE}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Direct Phone Dial link
   */
  public static buildPhoneCallUrl(): string {
    return `tel:${siteConfig.brand.emergencyPhone}`;
  }
}
