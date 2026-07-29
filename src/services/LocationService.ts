import { IServiceArea, RegionCategory } from '../types';

/**
 * LocationService Class (OOP Pattern)
 * Encapsulates service area coverage queries, regional grouping, and location search filtering.
 */
export class LocationService {
  /**
   * Filter service areas by regional category and search query
   */
  public static filterAreas(
    areas: IServiceArea[],
    region: RegionCategory = 'JABODETABEK',
    searchQuery: string = ''
  ): IServiceArea[] {
    const cleanQuery = searchQuery.toLowerCase().trim();

    return areas.filter((area) => {
      const matchesRegion = region === 'ALL' || area.region === region;
      const matchesQuery =
        cleanQuery === '' ||
        area.city.toLowerCase().includes(cleanQuery) ||
        area.province.toLowerCase().includes(cleanQuery);

      return matchesRegion && matchesQuery;
    });
  }

  /**
   * Check if a city is active 24H
   */
  public static is24HActive(area: IServiceArea): boolean {
    return area.status === 'ACTIVE_24H';
  }
}
