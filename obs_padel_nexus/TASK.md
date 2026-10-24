# Task List Padel-Nexus (Web Company Profile)

Acuan: [[1-PRD]] · [[2-TECH-SPEC]]

Status: `Todo` / `In Progress` / `Done`. Prioritas: High / Medium / Low.
Hosting: **tidak di-deploy** di V1 (hanya lokal).

## Ringkasan
| ID | Task | Modul | Prioritas | Dependensi | Status |
|----|------|-------|-----------|------------|--------|
| T-01 | Setup project Next.js + Tailwind | Setup | High | - | Done |
| T-02 | Install dependensi & konfigurasi lingkungan | Setup | High | T-01 | Done |
| T-03 | Design tokens, font, tema terang/gelap | Fondasi | High | T-01 | Done |
| T-04 | Skema konten (Zod) & loader MDX/JSON | Konten | High | T-02 | Done |
| T-05 | Data konten awal (JSON & 5 artikel MDX) | Konten | High | T-04 | Done |
| T-06 | Layout: Navbar, Footer, ThemeToggle, WhatsAppButton | Layout | High | T-03 | Done |
| T-07 | Komponen UI & Reveal (animasi scroll) | Fondasi | High | T-03 | Done |
| T-08 | Beranda: Hero & ringkasan seksi | Beranda | High | T-06, T-07, T-05 | Done |
| T-09 | StatCounter (angka pencapaian) | Beranda | Medium | T-07, T-05 | Done |
| T-10 | Halaman Tentang: profil, timeline, tim | Profil | High | T-06, T-07, T-05 | Done |
| T-11 | Halaman Layanan & Fasilitas | Layanan | High | T-06, T-07, T-05 | Done |
| T-12 | Halaman Galeri + filter + Lightbox | Galeri | Medium | T-06, T-07, T-05 | Done |
| T-13 | Halaman Edukasi: pengenalan, manfaat, panduan | Edukasi | High | T-06, T-07, T-05 | Done |
| T-14 | FAQ Accordion interaktif | Edukasi | Medium | T-07, T-05 | Done |
| T-15 | Artikel: daftar, filter, halaman detail | Edukasi | High | T-04, T-05, T-06 | Done |
| T-16 | Halaman Kontak: form, peta, jam operasional | Kontak | High | T-06, T-07 | Done |
| T-17 | Server Action `sendContactMessage` (Zod, honeypot, rate limit, Resend) | Kontak | High | T-02, T-16 | Done |
| T-18 | SEO: metadata, sitemap, robots, JSON-LD, OG | SEO | Medium | T-08 s.d. T-16 | Done |
| T-19 | Header keamanan & .env.example | Keamanan | Medium | T-02 | Done |
| T-20 | Aksesibilitas & reduced motion | Kualitas | High | T-08 s.d. T-16 | Done |
| T-21 | Optimasi performa (gambar, font, dynamic import) | Kualitas | Medium | T-08 s.d. T-16 | Done |
| T-22 | Halaman 404 & penanganan galat | Kualitas | Low | T-06 | Done |
| T-23 | Verifikasi akhir (lint, typecheck, build, Lighthouse) | QA | High | semua | Done |

---

## Detail Task

### Setup
**T-01: Setup project Next.js + Tailwind** · High · Done
- Buat project Next.js 14+ (App Router, TypeScript, Tailwind, ESLint, `src/`).
- Selesai bila: `npm run dev` berjalan di `localhost:3000`.
- File: `package.json`, `tailwind.config.ts`, `next.config.mjs`, `src/app/*`.

**T-02: Install dependensi & konfigurasi lingkungan** · High · Done
- Install `framer-motion`, `zod`, `resend`, `@next/mdx`, `gray-matter`. Tambah skrip `typecheck`.
- Buat `.env.example` (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`).
- Selesai bila: `npm run build` berhasil.

### Fondasi
**T-03: Design tokens, font, tema terang/gelap** · High · Done
- Definisikan warna, tipografi, spasi di `globals.css`/Tailwind. Pasang `next/font`.
- Tema mengikuti `prefers-color-scheme`, tanpa kedipan saat dimuat (FR-19).
- Disarankan menjalankan `/impeccable init` dan `shape` lebih dulu untuk arah visual.
- File: `src/styles/globals.css`, `tailwind.config.ts`, `src/app/layout.tsx`.

**T-07: Komponen UI & Reveal** · High · Done
- Buat `Button`, `Card`, `Accordion`, `Reveal` di `src/components/ui`.
- `Reveal` memakai Framer Motion, hanya `transform` dan `opacity`, menghormati reduced motion (FR-18).

### Konten
**T-04: Skema konten (Zod) & loader** · High · Done
- Schema untuk Article, Service, Facility, TeamMember, Milestone, Stat, GalleryItem, Faq, HealthBenefit.
- Loader baca JSON dan frontmatter MDX, urutkan artikel berdasarkan tanggal.
- File: `src/lib/content.ts`, `src/lib/site.ts`.

**T-05: Data konten awal** · High · Done
- Isi `src/content/data/*.json` dan minimal 5 artikel `src/content/articles/*.mdx` (FR-12).
- Konten sementara (placeholder) jelas ditandai bila aset final belum ada.
- Klaim kesehatan netral dan bersumber jelas (FR-11).

### Layout
**T-06: Layout** · High · Done
- `Navbar` sticky dengan penanda seksi aktif dan hamburger di mobile (FR-01).
- `Footer` dengan ikon media sosial, `ThemeToggle`, `WhatsAppButton` (FR-17, 19).
- File: `src/components/layout/*`.

### Halaman
**T-08: Beranda** · High · Done
- Hero animatif (selesai < 2 detik), cuplikan seksi dengan CTA (FR-02, 03).
- File: `src/app/page.tsx`, `src/components/sections/Hero.tsx`.

**T-09: StatCounter** · Medium · Done
- Hitung naik saat masuk viewport, sekali per kunjungan (FR-06).

**T-10: Tentang** · High · Done
- Profil, visi misi, `Timeline` interaktif, kartu tim, nilai (FR-04, 05).
- File: `src/app/tentang/page.tsx`.

**T-11: Layanan & Fasilitas** · High · Done
- Kartu layanan dan fasilitas dengan tab/slider (FR-07, 08).
- File: `src/app/layanan/page.tsx`.

**T-12: Galeri** · Medium · Done
- Grid, filter kategori, `Lightbox` dengan navigasi keyboard dan fokus kembali (FR-09).
- File: `src/app/galeri/page.tsx`, `Gallery.tsx`, `Lightbox.tsx`.

**T-13: Edukasi** · High · Done
- Pengenalan padel, manfaat kesehatan, panduan pemula/usia lanjut dengan catatan konsultasi medis (FR-10, 11, 13).
- File: `src/app/edukasi/page.tsx`.

**T-14: FAQ** · Medium · Done
- Accordion dapat dioperasikan keyboard dengan ARIA (FR-14).

**T-15: Artikel** · High · Done
- Daftar dengan filter kategori, detail lewat `generateStaticParams`, slug tak dikenal menjadi 404 (FR-12).
- File: `src/app/edukasi/artikel/page.tsx`, `[slug]/page.tsx`.

### Kontak
**T-16: Halaman Kontak** · High · Done
- `ContactForm` (validasi klien, status kirim), peta tersemat, jam operasional, tautan Google Maps (FR-15, 16).
- File: `src/app/kontak/page.tsx`, `ContactForm.tsx`.

**T-17: Server Action kontak** · High · Done
- Validasi Zod di server, honeypot, rate limit per IP, kirim email via Resend, kembalikan `{ ok, errors? }`.
- Email valid, pesan minimal 10 karakter.
- File: `src/app/actions/contact.ts`.

### SEO, Keamanan, Kualitas
**T-18: SEO** · Medium · Done
- `generateMetadata` unik per halaman, `sitemap.ts`, `robots.ts`, Open Graph, JSON-LD (FR-20).

**T-19: Keamanan** · Medium · Done
- Header (CSP, X-Content-Type-Options, Referrer-Policy, X-Frame-Options, Permissions-Policy) di `next.config.mjs`.
- `rel="noopener noreferrer"` pada tautan eksternal.

**T-20: Aksesibilitas** · High · Done
- WCAG 2.1 AA: kontras, fokus terlihat, label form, teks alternatif, navigasi keyboard, reduced motion.

**T-21: Performa** · Medium · Done
- `next/image` (WebP/AVIF, lazy load, `priority` hanya hero), video `preload="none"`, `next/dynamic` untuk galeri dan lightbox.

**T-22: 404 & galat** · Low · Done
- `not-found.tsx` dan `error.tsx` yang ramah pengguna.

**T-23: Verifikasi akhir** · High · Done
- `npm run lint`, `npm run typecheck`, `npm run build` bersih.
- Lighthouse mobile: Performance, Accessibility, SEO ≥ 90; LCP < 2,5 detik.
- Uji responsif (ponsel, tablet, desktop) dan mode gelap.

---

## Urutan Pengerjaan yang Disarankan
1. Setup: T-01, T-02
2. Fondasi dan konten: T-03, T-04, T-05, T-07
3. Layout: T-06
4. Halaman: T-08 s.d. T-17
5. Penyempurnaan: T-18 s.d. T-22
6. Verifikasi: T-23

## Di Luar Cakupan V1
Booking, login, pembayaran, CMS/admin, multibahasa, aplikasi native, dan **deployment**.



---

## Hasil Verifikasi Akhir (T-23)
- `npm run typecheck`, `npm run lint`, `npm run build`: bersih (17 halaman statis).
- Detector Impeccable: 0 temuan.
- Lighthouse mobile (build produksi, simulasi 4G lambat): Accessibility 100, SEO 100, Best Practices 93-96, Performance 87-99 (bervariasi antar-run). CLS 0 setelah perbaikan galeri.
- LCP: 2,1 detik (artikel) sampai 2,9 detik (beranda). Beranda masih di atas target < 2,5 detik pada simulasi throttling Lighthouse; penyebabnya pemuatan font web (LCP berupa teks h1). Layak diuji di perangkat nyata.
- Belum diuji: animasi reveal secara visual (pane browser tersembunyi menghentikan render), pengiriman email (butuh kunci Resend), `npm audit` (12 kerentanan bawaan dependensi scaffold, belum ditangani).

## Data contoh yang harus diganti
- `src/content/data/team.json`: 3 anggota tim (nama, peran, bio, foto).
- `src/content/data/testimonials.json`: 3 testimoni.
- `src/content/data/stats.json`: jumlah lapangan, anggota, sesi per bulan.
- `src/content/data/timeline.json`: tahap Awal, Pembangunan, Kini.
- `src/content/data/services.json`: layanan bertanda `isDummy` (sesi perkenalan, pelatihan, komunitas, acara).
- `src/content/articles/*.mdx`: tanggal terbit dan isi perlu ditinjau; belum ada sumber rujukan (`sources`) untuk klaim kesehatan.

## Masih terbuka
- Jam operasional, email, tautan media sosial, koordinat peta (di `src/lib/site.ts`).
- Kunci Resend di `.env.local` agar form kontak aktif.
- Logo resolusi tinggi (SVG/PNG), video, dan hak pakai watermark mejor set / Premier Padel pada foto.
- Foto tim, hosting, dan domain (`NEXT_PUBLIC_SITE_URL`).
## Finish Review Desain
- Review dilakukan in-thread (tidak ada subagen reviewer di sesi ini), berdasarkan tangkapan layar desktop dan mobile di `.impeccable/review/`.
- Disposition awal: fix. Temuan material: (1) galeri meninggalkan celah hitam di bawah kolom pertama, (2) label metadata di atas judul artikel (eyebrow). Keduanya sudah diperbaiki; galeri diverifikasi ulang lewat recapture.
- Dicatat tetapi tidak diubah: seksi angka beranda dan beberapa seksi manfaat memakai pola yang dilarang craft floor (angka besar dan kartu ikon-judul-teks berukuran mirip); keduanya dituntut PRD.
- `DESIGN.md` dan `.impeccable/design.json` ditulis dari kode yang dibangun (North Star: The Glass Wall). Detector: 0 temuan.
- Belum diverifikasi secara visual: animasi reveal saat scroll dan mode gelap di semua halaman.
## Revisi Desain v2 (referensi rocketpadel.com)
- Desain diganti dari "dinding kaca" ke "poster olahraga": latar putih, tipografi 800 raksasa, foto penuh lebar, aksen lime, blok hijau logo.
- Animasi pengganti video: judul naik bertopeng, foto membuka dengan clip dan parallax, marquee miring mengikuti scroll, teks menyala per kata, galeri horizontal berpin saat scroll, hover menyapu lime (tombol, baris, kartu foto), tab dengan garis meluncur dan isi bergeser, akordeon animasi tinggi, navbar bersembunyi saat scroll turun dan menu layar penuh, tirai lime antarhalaman, garis kemajuan baca, tombol WhatsApp muncul setelah hero, angka naik.
- Semua animasi mati ke kondisi akhir pada reduced motion.
- Diperbaiki saat verifikasi: bentrok kelas h-1/h-2/h-3 dengan utilitas tinggi Tailwind (diganti t-*), pin horizontal rusak oleh overflow-hidden pada leluhur, kontras kata pudar, aria-label pada paragraf.
- Lighthouse mobile (build produksi): Accessibility 92 sebelum perbaikan aria dan kontras (diperbaiki, belum diukur ulang), SEO 100, Best Practices 100, Performance 93-99, LCP 2,2-3,0 dtk.
## Revisi: label Contoh, testimoni, fasilitas otomatis
- Label "Contoh" dihapus dari seluruh tampilan. Data dummy (tim, testimoni, statistik, timeline, beberapa layanan) kini tampil tanpa penanda, tetapi tetap bertanda `isDummy` di file JSON `src/content/data/` agar mudah dilacak dan diganti dengan data asli sebelum rilis.
- Testimoni: 4 orang (dummy) dalam slider yang berganti sendiri tiap 6,5 detik, bisa dijeda, dan bisa dinavigasi manual (panah dan titik).
- Fasilitas (halaman Layanan): tab berganti sendiri tiap 5,5 detik dengan isi lime di garis aktif sebagai penanda waktu. Berhenti saat kursor atau fokus ada di dalamnya, ada tombol jeda, dan mati pada reduced motion.
## Revisi: foto tim
- Tiga foto (`public/Rizky_Pratama.jpg`, `Dewi_Anggraini.jpg`, `Bayu_Kurniawan.jpg`) berisi pola kotak-kotak "transparan" yang tertanam di piksel JPG. Latar dipotong secara lokal menjadi WebP transparan di `public/team/` (20 sampai 73 KB), lalu dipasang di kartu tim halaman Tentang dengan latar hijau, lime, dan kertas.
- File JPG asli (sekitar 2 MB masing-masing) masih ada di `public/` tetapi tidak dipakai; aman dihapus bila tidak diperlukan.
- Untuk build verifikasi tersedia `NEXT_DIST_DIR` (mis. `.next-verify`) agar tidak bentrok dengan `npm run dev`.