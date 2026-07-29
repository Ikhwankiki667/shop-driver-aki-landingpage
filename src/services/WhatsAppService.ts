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
    const locationText = userLocation ? ` di area ${userLocation}` : '';
    const message = `Halo ShopDriveAki, Mobil saya mogok/aki tekor${locationText}. Mohon kirim teknisi ganti aki 24 Jam Terdekat.`;
    return `${this.BASE_URL}${this.PHONE}?text=${encodeURIComponent(message)}`;
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
