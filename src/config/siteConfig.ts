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
    emergencyPhone: "+6281585564232",
    emergencyPhoneDisplay: "0815-8556-4232",
    whatsAppNumber: "6281585564232",
    defaultWhatsAppMessage: "Halo ShopDriveAki 24 Jam, mobil saya mogok/aki tekor. Lokasi GPS saya: [Ketik Alamat/Patokan Anda]. Mohon kirim teknisi ganti aki terdekat",
    operationalHours: "24 Jam Nonstop (365 Hari)",
    averageArrivalMinutes: 10,
    warrantyMonthsDefault: 24,
  },
  colors: {
    background: "#0D0D0F",
    surfaceMetallic: "#1A1A1D",
    surfaceContainer: "#161619",
    primaryRed: "#D91E2B",
    primaryRedHover: "#C01824",
    secondaryAmber: "#FF9500",
    alertRed: "#D91E2B",
    textPrimary: "#FFFFFF",
    textSecondary: "#D1D5DB",
    borderRed: "rgba(217, 30, 43, 0.3)",
    glowRed: "rgba(217, 30, 43, 0.25)",
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
