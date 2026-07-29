/**
 * Centralized Site Configuration
 * Enforces Zero Hardcoded Magic Numbers and Centralizes All Contact, Branding,
 * and Emergency Red-White-Black Color Tokens.
 */

export const siteConfig = {
  brand: {
    name: "ShopDrive",
    tagline: "Layanan Ganti Aki Mobil 24 Jam Antar & Pasang Lokasi",
    domain: "shopdriveaki.com",
    establishedYear: 2018,
    emergencyPhone: "+6281234567890",
    emergencyPhoneDisplay: "0812-3456-7890",
    whatsAppNumber: "6281234567890",
    defaultWhatsAppMessage: "Halo ShopDrive, mobil saya mogok/aki tekor. Mohon bantuan pasang aki 24 jam ke lokasi saya.",
    operationalHours: "24 Jam Nonstop (365 Hari)",
    averageArrivalMinutes: 10,
    warrantyMonthsDefault: 24,
  },
  colors: {
    background: "#0D0D0F",
    surfaceMetallic: "#1A1A1D",
    surfaceContainer: "#161619",
    primaryRed: "#E63946",
    primaryRedHover: "#DC2626",
    alertRed: "#E63946",
    textPrimary: "#FFFFFF",
    textSecondary: "#D1D5DB",
    borderRed: "rgba(230, 57, 70, 0.3)",
    glowRed: "rgba(230, 57, 70, 0.2)",
  },
  stats: {
    satisfiedCustomers: "150.000+",
    activeTechnicians: "350+",
    coverageCities: "45+",
    customerRating: "4.9/5",
  },
  socialLinks: {
    instagram: "https://instagram.com/shopdriveaki",
    facebook: "https://facebook.com/shopdriveaki",
    tiktok: "https://tiktok.com/@shopdriveaki",
  },
} as const;

export type SiteConfig = typeof siteConfig;
