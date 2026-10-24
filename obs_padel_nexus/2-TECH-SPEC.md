# Tech Spec Padel-Nexus (Web Company Profile)

Acuan: [[1-PRD]]

## Bagian 1: Tech Stack & Arsitektur

### Tech Stack
| Layer | Technology | Versi |
|-------|------------|-------|
| Frontend | Next.js (App Router) | 14+ |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.x |
| Animasi | Framer Motion (+ CSS untuk animasi ringan) | 11.x |
| Konten | MDX / JSON di repo (artikel, layanan, tim, FAQ) | - |
| State | React state/Context (tema, menu); tanpa library global | - |
| Backend | Next.js Server Actions / Route Handler (hanya form kontak) | - |
| Email | Resend (kirim pesan form kontak) | - |
| Database | Tidak dipakai di V1 | - |
| Auth | Tidak dipakai di V1 | - |
| Hosting | Belum ditentukan, **tidak di-deploy dulu** (hanya lokal) | - |
| Caching | Static generation + CDN bawaan hosting kelak | - |

### Arsitektur Sistem
```
Pengunjung → Next.js (halaman statis SSG) → konten MDX/JSON di repo
                    ↓
          Server Action (form kontak) → Resend (email)
```
- Semua halaman dirender statis saat build (SSG) untuk kecepatan dan SEO.
- Satu-satunya logika server adalah form kontak.

### Struktur Folder
```
Padel-Nexus/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx            # layout, font, tema, metadata
│  │  ├─ page.tsx              # Beranda (hero, ringkasan seksi)
│  │  ├─ tentang/page.tsx
│  │  ├─ layanan/page.tsx
│  │  ├─ galeri/page.tsx
│  │  ├─ edukasi/
│  │  │  ├─ page.tsx           # pengenalan, manfaat, panduan, FAQ
│  │  │  └─ [slug]/page.tsx    # detail artikel
│  │  ├─ kontak/page.tsx
│  │  ├─ actions/contact.ts    # Server Action form kontak
│  │  ├─ sitemap.ts
│  │  └─ robots.ts
│  ├─ components/
│  │  ├─ layout/               # Navbar, Footer, ThemeToggle, WhatsAppButton
│  │  ├─ sections/             # Hero, Stats, Timeline, ServiceCards, Gallery, Faq, ContactForm
│  │  └─ ui/                   # Button, Card, Accordion, Lightbox, Reveal
│  ├─ content/
│  │  ├─ articles/*.mdx
│  │  └─ data/*.json           # layanan, fasilitas, tim, faq, statistik
│  ├─ lib/                     # util konten, validasi (zod), konstanta situs
│  └─ styles/globals.css
├─ public/                     # gambar, video, ikon, og-image
├─ tailwind.config.ts
├─ next.config.mjs
└─ package.json
```

### Justifikasi
- **Next.js:** SSG dan metadata bawaan cocok untuk kebutuhan SEO, performa, dan halaman informatif (FR-20, NFR performa).
- **Tailwind + Framer Motion:** pengembangan UI cepat, animasi scroll dan interaksi halus (FR-02, FR-18) dengan dukungan `prefers-reduced-motion`.
- **Tanpa database:** V1 hanya menampilkan konten; MDX/JSON di repo cukup dan mudah dirawat. Kebutuhan database baru muncul di v2 (booking, login).
- **Hosting ditunda:** proyek berjalan lokal dulu. Karena berupa Next.js, nanti bisa dipasang ke Vercel atau host lain tanpa perubahan besar.

## Bagian 2: Database Design

V1 **tidak memakai database**. Data berupa konten statis di repo (MDX/JSON) yang dibaca saat build, lalu divalidasi dengan Zod agar salah ketik tertangkap sebelum build selesai.

### Ringkasan Penyimpanan
| Item | Detail |
|------|--------|
| Database | Tidak ada di V1 |
| Penyimpanan konten | File MDX (artikel) dan JSON (data terstruktur) di `src/content` |
| Validasi | Zod schema di `src/lib/content.ts` |
| Pendekatan | File-based content (dibaca saat build, SSG) |
| Migrasi ke v2 | Skema yang sama dapat dipindah ke PostgreSQL + Prisma saat booking dan login dibutuhkan |

### Entity Overview
| Entity | Sumber | Key Fields | Relasi |
|--------|--------|-----------|--------|
| Article | `content/articles/*.mdx` | slug, title, summary, category, date, coverImage, readingTime, body | → Category (N:1) |
| Category | enum di kode | id, label | ← Article |
| Service | `data/services.json` | id, name, description, icon, image | - |
| Facility | `data/facilities.json` | id, name, description, image | - |
| TeamMember | `data/team.json` | id, name, role, photo, bio | - |
| Milestone | `data/timeline.json` | year, title, description | - |
| Stat | `data/stats.json` | id, label, value, suffix | - |
| GalleryItem | `data/gallery.json` | id, type (foto/video), src, alt, category | - |
| Faq | `data/faq.json` | id, question, answer | - |
| HealthBenefit | `data/benefits.json` | id, title, description, icon | - |
| SiteConfig | `lib/site.ts` | name, address, coords, openingHours, whatsapp, socials | - |
| ContactMessage | tidak disimpan | name, email, phone?, message | dikirim via email, bukan ditulis ke database |

### Index Strategy
Tidak relevan karena tanpa database. Untuk pencarian dan filter (artikel per kategori, galeri per kategori), data difilter di sisi klien dari daftar yang sudah dimuat saat build.

### Data Flow
- **Build time:** loader membaca file MDX/JSON → Zod memvalidasi → halaman statis dirender (SSG).
- **Runtime:** pengunjung memuat HTML statis. Filter dan interaksi galeri/artikel berjalan di klien.
- **Form kontak:** input pengunjung → validasi Zod → Server Action → email via Resend. Pesan tidak disimpan.

## Bagian 3: Interface Design

Arsitektur: Next.js App Router. Halaman berupa route statis (SSG), dan satu-satunya interface server adalah Server Action untuk form kontak. Tidak ada REST API publik di V1.

### Routes (Halaman)
| Method | Path | Deskripsi | FR | Auth |
|--------|------|-----------|----|------|
| GET | `/` | Beranda: hero, ringkasan seksi, statistik, CTA | FR-01, 02, 03, 06 | No |
| GET | `/tentang` | Profil, visi misi, timeline, tim, nilai | FR-04, 05 | No |
| GET | `/layanan` | Daftar layanan dan fasilitas | FR-07, 08 | No |
| GET | `/galeri` | Galeri foto/video dengan filter dan lightbox | FR-09 | No |
| GET | `/edukasi` | Pengenalan padel, manfaat kesehatan, panduan pemula/usia lanjut, FAQ | FR-10, 11, 13, 14 | No |
| GET | `/edukasi/artikel` | Daftar artikel dengan filter kategori | FR-12 | No |
| GET | `/edukasi/artikel/[slug]` | Detail artikel (SSG via `generateStaticParams`) | FR-12 | No |
| GET | `/kontak` | Form kontak, peta, jam operasional | FR-15, 16 | No |
| GET | `/sitemap.xml`, `/robots.txt` | Dihasilkan dari `sitemap.ts` dan `robots.ts` | FR-20 | No |
| GET | `/not-found` | Halaman 404 | - | No |

### Server Action
| Action | Lokasi | Deskripsi | Auth |
|--------|--------|-----------|------|
| `sendContactMessage(formData)` | `src/app/actions/contact.ts` | Validasi Zod, cek honeypot, kirim email via Resend, kembalikan `{ ok, errors? }` | N/A |

### Komponen Interaktif Utama (Client Components)
| Komponen | Fungsi | FR |
|----------|--------|----|
| `Navbar` | Sticky, penanda seksi aktif, menu hamburger di mobile | FR-01 |
| `Hero` | Animasi masuk, CTA | FR-02 |
| `StatCounter` | Hitung naik saat masuk viewport, sekali saja | FR-06 |
| `Timeline` | Timeline interaktif | FR-04 |
| `Gallery` + `Lightbox` | Grid, filter kategori, navigasi panah | FR-09 |
| `Accordion` (FAQ) | Buka-tutup, dapat dioperasikan keyboard | FR-14 |
| `ContactForm` | Validasi klien, status kirim, pesan sukses/galat | FR-15 |
| `ThemeToggle` | Terang/gelap, tersimpan di `localStorage` | FR-19 |
| `Reveal` | Pembungkus animasi scroll (Framer Motion), menghormati reduced motion | FR-18 |
| `WhatsAppButton` | Tombol mengambang, pesan terisi otomatis | FR-17 |

### Metadata
Setiap halaman mengekspor `generateMetadata` (judul, deskripsi, Open Graph). Data terstruktur `Organization`/`LocalBusiness` (JSON-LD) dipasang di layout (FR-20).

## Bagian 4: Alur Logika & Business Rules

Alur memakai pola: Pengunjung → Next.js (halaman statis) → konten MDX/JSON. Auth tidak dibahas karena PRD V1 tidak memuat fitur login.

### Alur Menjelajah Halaman (FR-01, 03, 04, 07)
1. Pengunjung membuka URL atau menekan menu di Navbar.
2. Next.js menyajikan HTML statis hasil build (konten sudah divalidasi Zod saat build).
3. Client Components di-hydrate, lalu `Reveal` memicu animasi masuk saat elemen terlihat.
4. Navbar menandai seksi aktif berdasarkan posisi scroll dan melakukan scroll halus saat menu ditekan.

### Alur Animasi Scroll & Reduced Motion (FR-02, 06, 18)
1. Komponen memeriksa `prefers-reduced-motion` lewat `useReducedMotion`.
2. Jika aktif: elemen tampil langsung tanpa animasi, dan `StatCounter` menampilkan nilai akhir.
3. Jika tidak: `IntersectionObserver` memicu animasi saat elemen masuk viewport.
4. Animasi hanya memakai `transform` dan `opacity`, dan berjalan sekali per kunjungan.

### Alur Galeri & Filter (FR-09)
1. `GalleryItem` dimuat dari JSON saat build, gambar memakai `next/image` dengan lazy load.
2. Pengunjung memilih kategori, daftar difilter di klien.
3. Klik item membuka `Lightbox`. Panah kiri/kanan atau tombol navigasi berpindah item, Esc menutup, fokus dikembalikan ke item semula.

### Alur Artikel & Edukasi (FR-10 s.d. 14)
1. Daftar artikel dibaca dari MDX (frontmatter), diurutkan berdasarkan tanggal terbaru.
2. Filter kategori berjalan di klien.
3. Detail artikel dibuat statis lewat `generateStaticParams`. Slug tidak dikenal menghasilkan halaman 404.
4. FAQ memakai Accordion yang dapat dioperasikan keyboard dengan atribut ARIA.

### Alur Form Kontak (FR-15)
1. Pengunjung mengisi nama, email, telepon (opsional), dan pesan.
2. Validasi klien (Zod) menampilkan galat per field sebelum kirim.
3. `sendContactMessage` memvalidasi ulang di server dan memeriksa field honeypot. Jika terisi, permintaan diabaikan dan seolah sukses.
4. Server membatasi frekuensi kirim per IP (rate limit sederhana).
5. Email dikirim lewat Resend ke alamat perusahaan.
6. Server mengembalikan `{ ok: true }` atau `{ ok: false, errors }`, dan UI menampilkan pesan sukses atau galat yang jelas. Isi pesan tidak disimpan.

### Alur Tema & Kontak Cepat (FR-17, 19)
- **Tema:** saat pertama dimuat, tema mengikuti `prefers-color-scheme`. Pilihan manual disimpan di `localStorage` dan diterapkan sebelum render agar tidak berkedip.
- **WhatsApp:** tombol membuka `https://wa.me/<nomor>?text=<pesan terisi>` di tab baru dengan `rel="noopener noreferrer"`.

### Business Rules (dari PRD)
- Email harus valid, pesan minimal 10 karakter (FR-15).
- Form kontak wajib memiliki perlindungan spam (honeypot dan rate limit).
- Animasi harus dinonaktifkan jika pengguna memilih reduced motion (FR-02, 18).
- Animasi hero selesai kurang dari 2 detik (FR-02).
- Animasi penghitung statistik hanya berjalan sekali per kunjungan (FR-06).
- Minimal 5 artikel tersedia saat peluncuran (FR-12).
- Klaim kesehatan harus netral dan bersumber jelas. Panduan pemula/usia lanjut menyertakan catatan untuk berkonsultasi dengan tenaga medis (FR-11, 13).
- Setiap halaman memiliki judul dan deskripsi unik (FR-20).
- Gambar dimuat malas dan dioptimalkan (FR-09).
- Tautan eksternal terbuka di tab baru (FR-17).
- Pilihan tema tersimpan di peramban (FR-19).

## Bagian 5: Keamanan, Performa, & Deployment

### Keamanan
- **Validasi input:** form kontak divalidasi dengan Zod di klien dan server. Output email di-escape agar tidak ada injeksi HTML.
- **Anti-spam:** field honeypot dan rate limit sederhana per IP pada Server Action.
- **Header keamanan** di `next.config.mjs`: Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, X-Frame-Options, Permissions-Policy.
- **Rahasia:** kunci Resend dan alamat tujuan email hanya di `.env.local` (tidak di-commit, tidak diekspos ke klien). Sediakan `.env.example`.
- **Tautan eksternal:** `rel="noopener noreferrer"`.
- **Privasi:** tidak ada akun dan pesan kontak tidak disimpan. Analytics, jika dipakai kelak, harus yang ramah privasi.
- **HTTPS:** wajib saat nanti dipublikasikan (disediakan oleh hosting yang dipilih).

### Performa
- **SSG:** semua halaman dirender statis saat build.
- **Gambar:** `next/image` dengan format WebP/AVIF, ukuran responsif, lazy load, dan `priority` hanya untuk gambar hero.
- **Video:** `preload="none"` atau poster, dimuat saat dibutuhkan, tanpa autoplay bersuara.
- **Font:** `next/font` (self-host, `display: swap`) dengan sedikit varian.
- **JavaScript:** komponen server secara default. `"use client"` hanya untuk komponen interaktif, dan lightbox serta galeri dimuat dengan `next/dynamic`.
- **Animasi:** hanya `transform` dan `opacity`, tanpa menganimasikan layout.
- **Target:** LCP < 2,5 detik, Lighthouse Performance, Accessibility, dan SEO ≥ 90, halaman awal < 2 MB.

### Aksesibilitas & SEO
- Semantic HTML, label form, teks alternatif gambar, kontras sesuai WCAG 2.1 AA, fokus terlihat, dan navigasi keyboard penuh.
- `sitemap.ts`, `robots.ts`, Open Graph, dan JSON-LD (lihat Bagian 3).

### Deployment
- **Hosting belum ditentukan dan proyek belum di-deploy.** V1 hanya berjalan lokal (`npm run dev`, `npm run build`, `npm run start`).
- Persiapan agar mudah dipublikasikan kelak: build berhasil tanpa galat, variabel lingkungan terdokumentasi di `.env.example`, dan tidak ada ketergantungan pada hosting tertentu.
- Saat siap deploy, pilih host (mis. Vercel, Netlify, atau VPS), isi variabel lingkungan, dan hubungkan domain. Keputusan ini dibahas terpisah.

### Kualitas Kode
- ESLint (`next/core-web-vitals`), Prettier, dan `tsc --noEmit` di skrip `lint` dan `typecheck`.
- Pemeriksaan Lighthouse dan aksesibilitas manual sebelum rilis.

### Development Setup
```bash
# Prasyarat: Node.js 20+
npx create-next-app@latest padel-nexus --typescript --tailwind --app --src-dir --eslint
cd padel-nexus
npm install framer-motion zod resend @next/mdx gray-matter
cp .env.example .env.local   # isi RESEND_API_KEY dan CONTACT_TO_EMAIL
npm run dev                  # http://localhost:3000
```
Skrip yang tersedia: `npm run build`, `npm run start`, `npm run lint`, `npm run typecheck`.

**Tech Spec selesai.**
