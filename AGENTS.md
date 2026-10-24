# Padel Demo — agent notes

Situs company profile **statis** (Next.js 14 App Router, TypeScript 5, Tailwind 3, MDX + JSON). Tidak ada backend, database, API route, middleware, Server Action, atau autentikasi nyata. Target deploy: **surge.sh** lewat `out/`.

## Commands
- `npm run dev` — dev server `http://localhost:3000`
- `npm run build` — static export ke `out/`
- `npm run preview` — server statis lokal dengan clean URL di `http://localhost:4173`
- `npm run deploy` — `npx surge out` (butuh login surge)
- `npm run lint` — `next lint`
- `npm run typecheck` — `tsc --noEmit`
- Tidak ada `npm test` / framework test. Verifikasi: `lint → typecheck → build → preview`
- Jangan jalankan `build` saat `dev` aktif (keduanya memakai `.next/`).
- Jika shim `npm` gagal di Git Bash, panggil binary Node langsung (mis. `node node_modules/typescript/bin/tsc --noEmit`).

## Environment
- `NEXT_PUBLIC_SITE_URL` (lihat `.env.example`) dipakai untuk metadata/canonical/JSON-LD. Set saat build; tanpa itu nilainya `http://localhost:3000`.
- Tidak ada env Resend atau rahasia server. Form kontak membuka WhatsApp, bukan mengirim email.

## Routes & behavior
- `/, /tentang, /layanan, /galeri, /edukasi, /edukasi/artikel, /edukasi/artikel/[slug], /kontak, /login, /robots.txt`
- Situs **noindex** (metadata `robots` + `robots.txt` disallow). `sitemap.ts` sudah dihapus.
- Bahasa Indonesia, `lang="id"`. Tema gelap/terang via `data-theme` + localStorage `pn-theme`.
- Animasi memakai CSS/IntersectionObserver, **tanpa framer-motion**. Keyframes di `src/app/globals.css`; blok `prefers-reduced-motion` menetralkan animasi.
- Form kontak menyusun pesan lalu `window.location.assign(whatsappUrl(...))`. Tidak ada data yang dikirim ke server.
- Login demo: `demo` / `demo`, sesi di localStorage `pn-demo-session`, lalu redirect ke WhatsApp. **Bukan keamanan nyata**; kredensial terlihat di bundle.
- Nomor WhatsApp terpusat di `src/lib/site.ts` (`62882009100522`). Semua CTA memakai `whatsappUrl()`.
- Semua brand dan data operasional adalah dummy ("Padel Demo", alamat fiktif, jam contoh, tim/testimoni fiktif). Jangan menggantinya dengan data asli tanpa diminta.

## Content (validated by Zod at build — invalid content fails the build)
- `src/content/data/*.json` — services, facilities, team, timeline, stats, gallery, faq, benefits, testimonials. Skema di `src/lib/content.ts`. ID duplikat menggagalkan build.
- `src/content/articles/*.mdx` — 5 artikel dengan gray-matter frontmatter. Detail route memakai `generateStaticParams` + `dynamicParams = false`; slug tak dikenal → 404.
- `src/lib/site.ts` — konfigurasi brand/alamat/kontak dummy. Ubah di satu tempat ini bila perlu.

## Design
- `DESIGN.md` adalah sumber desain (Court Atlas). Token CSS di `src/app/globals.css`.
- Archivo + IBM Plex Mono; sudut tajam kecuali chip `9999px`; `signal` satu-satunya aksen.
- `signal` di atas `chalk` 3.58:1 — hanya untuk grafis/teks besar. Pakai `signal-deep` untuk teks aksen kecil.
- Jangan menambah library animasi berat. Prefer CSS transition/keyframes + state kecil.

## Assets
- `public/ai/*.webp` sudah dioptimasi (sisi terpanjang ≤1600 px, WebP q76) + `public/ai/og-image.jpg` 1200×630.
- Original ada di `_arsip-public/` (gitignored, tidak ikut deploy). Jalankan `python scripts/optimize_images.py` bila aset berubah.
- `next/image` memakai `unoptimized` karena static export; kompres ukuran file secara manual.
- Jangan menambahkan foto stok pengganti; media saat ini adalah ilustrasi teknis.

## Deploy (surge.sh)
- `npm run build` → folder `out/`
- `npx surge out <domain>.surge.sh`
- Surge menyajikan `tentang.html` di `/tentang`; uji juga rute artikel bersarang dan `404.html`.
- Header keamanan/CSP tidak tersedia di surge dan sudah dihapus dari `next.config.mjs`.

## Ignored / generated
- `.next/`, `out/`, `*.tsbuildinfo`, `next-env.d.ts`, `.env*.local`, `_arsip-public/`
- `.agents/` dan `.playwright-mcp/` adalah artefak review lokal, bukan kode aplikasi

## References (not app code)
- `obs_padel_nexus/1-PRD.md`, `2-TECH-SPEC.md`, `TASK.md` — requirements dan riwayat tugas
- `.claude/skills/` — skill review UI lokal
