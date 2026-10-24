/**
 * Konfigurasi situs demo. Brand, alamat, dan kontak di sini fiktif.
 */
export const site = {
  name: "Padel Demo",
  wordmark: { light: "padel", bold: "Demo" },
  tagline: "Pusat padel demo dan gaya hidup sehat di Surabaya",
  locale: "id-ID",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  address: {
    street: "Jl. Contoh Raya No. 88",
    district: "Kec. Demo",
    city: "Surabaya",
    region: "Jawa Timur",
    postalCode: "60281",
    country: "ID",
  },

  /** Nomor WhatsApp demo, format internasional tanpa tanda plus. */
  phone: {
    raw: "62882009100522",
    display: "+62 882-0091-00522",
  },

  /** Jam operasional contoh. */
  openingHours: [
    { days: "Senin–Jumat", opens: "07.00", closes: "22.00" },
    { days: "Sabtu–Minggu", opens: "07.00", closes: "23.00" },
  ],

  email: null as string | null,
  socials: [] as { label: string; href: string }[],
} as const;

export const fullAddress = [
  site.address.street,
  site.address.district,
  site.address.city,
  site.address.region,
  site.address.postalCode,
].join(", ");

/** Tautan wa.me dengan pesan awal yang sudah terisi. */
export function whatsappUrl(
  message = "Halo Padel Demo, saya ingin bertanya tentang padel.",
): string {
  return `https://wa.me/${site.phone.raw}?text=${encodeURIComponent(message)}`;
}
