# Padel Demo

Situs company profile statis untuk klub padel demo. Dibangun dengan Next.js 14 App Router, TypeScript, dan Tailwind CSS. Seluruh brand, alamat, kontak, tim, dan testimoni adalah **data fiktif**.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
```

Verifikasi sebelum deploy:

```bash
npm run lint
npm run typecheck
npm run build      # menghasilkan folder out/
npm run preview    # http://localhost:4173 (clean URL)
```

## Konfigurasi

Salin `.env.example` ke `.env.local` dan isi domain final:

```bash
NEXT_PUBLIC_SITE_URL=https://domain-anda.surge.sh
```

Nilai ini dipakai untuk canonical, JSON-LD, dan metadata saat build. Tanpa nilai tersebut, situs memakai `http://localhost:3000`.

## Deploy ke surge.sh

```bash
NEXT_PUBLIC_SITE_URL=https://domain-anda.surge.sh npm run build
npx surge out domain-anda.surge.sh
```

Folder `out/` sepenuhnya statis: tidak ada API route, Server Action, database, atau Resend.

## Alur utama

- **Login demo** di `/login` memakai `demo` / `demo`, menyimpan sesi di `localStorage`, lalu mengarahkan ke WhatsApp. Ini bukan autentikasi aman.
- **Form kontak** menyusun pesan dan membukanya di WhatsApp; tidak ada data yang dikirim ke server.
- Nomor WhatsApp dan data situs ada di `src/lib/site.ts`.
- Situs di-`noindex` karena seluruh identitasnya dummy.

## Aset

Gambar di `public/ai/` sudah dikompres (WebP, sisi terpanjang 1600 px). Original disimpan di `_arsip-public/` (gitignored). Untuk mengoptimasi ulang:

```bash
python scripts/optimize_images.py
```
