/**
 * Core Domain Interfaces & Types
 * Enforces strict type-safety across OOP Services and UI Components.
 */

export type BatteryCategory = 'GS ASTRA' | 'AMARON' | 'ROCKET' | 'VARTA' | 'ALL';
export type VehicleCategory = 'SUV/MPV' | 'Sedan/Hatchback' | 'City Car' | 'Diesel/Commercial' | 'ALL';
export type RegionCategory = 'JABODETABEK' | 'JAWA_BALI' | 'LUAR_JAWA' | 'ALL';

export interface IBatteryProduct {
  id: string;
  name: string;
  category: BatteryCategory;
  capacityAh: number;
  voltage: number;
  price: number;
  originalPrice?: number;
  image: string;
  compatibleCars: string[];
  vehicleType: VehicleCategory;
  warrantyMonths: number;
  isBestSeller?: boolean;
  technology: string;
}

export interface IServiceArea {
  id: string;
  city: string;
  province: string;
  region: RegionCategory;
  status: 'ACTIVE_24H' | 'LIMITED' | 'COMING_SOON';
  estimatedTimeMinutes: number;
  techniciansCount: number;
}

export interface ITestimonial {
  id: string;
  customerName: string;
  carModel: string;
  city: string;
  rating: number;
  reviewText: string;
  date: string;
  verifiedPurchase: boolean;
}

export interface IFAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'PEMESANAN' | 'GARANSI' | 'TEKNIS' | 'PEMBAYARAN';
}

export interface IHowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}
