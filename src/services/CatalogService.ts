import { IBatteryProduct, BatteryCategory, VehicleCategory } from '../types';

/**
 * CatalogService Class (OOP Pattern)
 * Encapsulates battery catalog query, search, filtering, and sorting business logic.
 */
export class CatalogService {
  /**
   * Filter battery list by brand category and vehicle type
   */
  public static filterProducts(
    products: IBatteryProduct[],
    brandCategory: BatteryCategory = 'ALL',
    vehicleCategory: VehicleCategory = 'ALL',
    searchQuery: string = ''
  ): IBatteryProduct[] {
    return products.filter((product) => {
      // Category filter
      const matchesBrand = brandCategory === 'ALL' || product.category === brandCategory;
      const matchesVehicle = vehicleCategory === 'ALL' || product.vehicleType === vehicleCategory;

      // Search query filter (matches name, compatible cars, or category)
      const queryLower = searchQuery.toLowerCase().trim();
      const matchesSearch =
        queryLower === '' ||
        product.name.toLowerCase().includes(queryLower) ||
        product.category.toLowerCase().includes(queryLower) ||
        product.technology.toLowerCase().includes(queryLower) ||
        product.compatibleCars.some((car) => car.toLowerCase().includes(queryLower));

      return matchesBrand && matchesVehicle && matchesSearch;
    });
  }

  /**
   * Format price to Indonesian Rupiah currency string
   */
  public static formatRupiah(price: number): string {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(price);
  }

  /**
   * Calculate savings percentage if originalPrice exists
   */
  public static calculateDiscountPercent(price: number, originalPrice?: number): number | null {
    if (!originalPrice || originalPrice <= price) return null;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  }
}
