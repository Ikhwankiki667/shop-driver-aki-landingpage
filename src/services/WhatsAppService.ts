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
    const locationText = userLocation ? ` Lokasi saya di sekitar ${userLocation}.` : '';
    const message = `Halo ${siteConfig.brand.name}, SOS! Mobil saya mogok/aki tekor.${locationText} Mohon kirim teknisi ganti aki 24 jam terdekat.`;
    return `${this.BASE_URL}${this.PHONE}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Build targeted battery purchase & installation order link
   */
  public static buildBatteryOrderUrl(product: IBatteryProduct, carModel?: string): string {
    const formattedPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(product.price);

    const carText = carModel ? ` untuk mobil ${carModel}` : '';
    const message = `Halo ${siteConfig.brand.name}, saya ingin pesan aki *${product.name}* (${product.capacityAh}Ah - ${product.technology}) harga ${formattedPrice}${carText}. Mohon konfirmasi stok dan pengiriman ke lokasi.`;
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
