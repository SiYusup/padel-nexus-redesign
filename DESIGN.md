---
version: beta
name: Court Atlas
description: Sistem visual Padel Nexus. Kertas kapur, tinta biru-hitam, bidang lapangan biru, satu aksen sinyal oranye, tipografi Archivo, dan label teknis IBM Plex Mono.
colors:
  chalk: "#EDF0EB"
  concrete: "#DDE3DF"
  surface: "#F8F9F5"
  ink: "#0B1519"
  ink-soft: "#4D5A60"
  ink-faint: "#586468"
  line: "rgba(11, 21, 25, 0.16)"
  grid-line: "rgba(11, 21, 25, 0.08)"
  court: "#123B4A"
  court-lit: "#0E2F3B"
  on-court: "#F8F9F5"
  on-court-soft: "#C3D6D7"
  on-court-faint: "#A9C2C4"
  signal: "#D94F2B"
  signal-deep: "#B23A1C"
  on-signal: "#081217"
  mist: "#C9D8D8"
  focus: "#B23A1C"
  night-chalk: "#081217"
  night-concrete: "#0D1B21"
  night-surface: "#11242C"
  night-ink: "#F1EEE5"
  night-ink-soft: "#B7C3C4"
  night-ink-faint: "#9FB0B3"
  night-line: "rgba(241, 238, 229, 0.20)"
  night-grid-line: "rgba(241, 238, 229, 0.08)"
  night-court: "#1B4E63"
  night-court-lit: "#23647A"
  night-on-court: "#F8F9F5"
  night-on-court-soft: "#D0E0E0"
  night-on-court-faint: "#B6CDCE"
  night-signal: "#FF7A4D"
  night-signal-deep: "#FF9A75"
  night-on-signal: "#081217"
  night-mist: "#23383F"
  night-focus: "#FF7A4D"
typography:
  display:
    fontFamily: Archivo, system-ui, sans-serif
    fontSize: "clamp(3.35rem, 0.4rem + 10.4vw, 9rem)"
    fontWeight: "800"
    lineHeight: "0.86"
    letterSpacing: "-0.065em"
  heading:
    fontFamily: Archivo, system-ui, sans-serif
    fontSize: "clamp(2.15rem, 1.35rem + 3.1vw, 4.25rem)"
    fontWeight: "700"
    lineHeight: "0.94"
    letterSpacing: "-0.052em"
  subheading:
    fontFamily: Archivo, system-ui, sans-serif
    fontSize: "clamp(1.3rem, 1.12rem + 0.72vw, 1.7rem)"
    fontWeight: "650"
    lineHeight: "1.12"
    letterSpacing: "-0.028em"
  body:
    fontFamily: Archivo, system-ui, sans-serif
    fontSize: "1.0625rem"
    fontWeight: "400"
    lineHeight: "1.65"
  lead:
    fontFamily: Archivo, system-ui, sans-serif
    fontSize: "clamp(1.15rem, 1.08rem + 0.3vw, 1.3rem)"
    fontWeight: "400"
    lineHeight: "1.55"
  eyebrow:
    fontFamily: IBM Plex Mono, ui-monospace, monospace
    fontSize: "0.6875rem"
    fontWeight: "500"
    lineHeight: "1.3"
    letterSpacing: "0.14em"
rounded:
  none: "0"
  pill: "9999px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 4rem)"
  section: "clamp(4.5rem, 10vw, 9rem)"
  measure: "64ch"
  control: "52px"
  target: "48px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.chalk}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    height: "52px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    border: "1px {colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    height: "52px"
  button-signal:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-signal}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    height: "52px"
  plate:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    border: "bottom 1px {colors.line}"
    typography: "{typography.body}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    border: "1px {colors.line}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
---

# Court Atlas

## Overview

Padel Nexus adalah klub lingkungan, bukan arena turnamen. Situs harus terasa seperti **denah klub yang bisa dibaca**: tenang, presisi, dan mengundang orang masuk. Arah visualnya memindahkan situs dari poster olahraga yang berteriak menjadi peta lapangan yang jelas.

Tiga bahan membentuk seluruh sistem:

1. **Kertas kapur** sebagai latar utama. Sejuk, tidak putih klinis, dan menjaga foto tetap menjadi fokus.
2. **Tinta biru-hitam** sebagai struktur: teks, garis, tombol utama, dan bidang informasi.
3. **Biru lapangan** sebagai bidang kedalaman: blok statistik, panduan, testimoni, dan elemen denah.

Satu aksen **sinyal oranye** menandai tindakan, garis aktif, dan satu titik fokus. Aksen ini tidak boleh menjadi latar seksi besar atau warna teks kecil di atas kertas kapur.

Tipografi memakai Archivo untuk semua teks dan IBM Plex Mono untuk label teknis, nomor, metadata, serta tombol. Grid 12 kolom dengan komposisi asimetris 8/4 atau 7/4. Garis rambut 1px memisahkan konten; garis 2px hanya untuk pembuka seksi. Kedalaman dibangun dari bidang warna dan garis, bukan bayangan.

Situs berbahasa Indonesia. Nada copy: hangat, spesifik, tanpa klaim pemasaran berlebihan. Sebut angka dan fakta hanya jika sudah dikonfirmasi di `src/lib/site.ts` atau konten.

### Prinsip

- **Satu aksen.** Sinyal oranye muncul sebagai garis, penanda, titik, atau satu tombol per layar. Bukan dekorasi berulang.
- **Denah, bukan kartu.** Informasi disusun sebagai baris, bidang, dan label yang bisa dipindai seperti wayfinding venue.
- **Foto sebagai bukti.** Setiap bingkai punya nomor, rasio, dan keterangan. Jika foto belum tersedia, tampilkan placeholder teknis berlabel.
- **Asimetri yang disengaja.** Judul dan isi tidak selalu berada di kolom yang sama. Ruang kosong adalah bagian komposisi.
- **Tenang, bukan kosong.** Hierarki dibangun lewat ukuran, garis, dan ritme vertikal.
- **Aksesibilitas menyatu dengan token.** Kontras, fokus, target sentuh, dan reduced motion ditentukan bersama sistem.

## Colors

Palet terang adalah default. Mode gelap memakai peran yang sama dengan nilai yang disesuaikan, bukan inversi otomatis. Token berada di `src/app/globals.css`; pemetaan Tailwind di `tailwind.config.ts`.

### Terang

| Token | Nilai | Peran |
| --- | --- | --- |
| `chalk` | `#EDF0EB` | Latar halaman |
| `concrete` | `#DDE3DF` | Latar seksi alternatif |
| `surface` | `#F8F9F5` | Kartu, dialog, bidang terangkat |
| `ink` | `#0B1519` | Teks utama, garis tebal, tombol utama |
| `ink-soft` | `#4D5A60` | Teks sekunder |
| `ink-faint` | `#586468` | Metadata, keterangan, placeholder |
| `line` | `rgba(11, 21, 25, 0.16)` | Garis rambut pada bidang terang |
| `grid-line` | `rgba(11, 21, 25, 0.08)` | Grid placeholder |
| `court` | `#123B4A` | Bidang kedalaman, denah, panel gelap |
| `court-lit` | `#0E2F3B` | Hover pada bidang biru |
| `on-court` | `#F8F9F5` | Teks utama di atas biru |
| `on-court-soft` | `#C3D6D7` | Teks sekunder di atas biru |
| `on-court-faint` | `#A9C2C4` | Metadata di atas biru |
| `signal` | `#D94F2B` | Aksen, garis aktif, bidang sinyal |
| `signal-deep` | `#B23A1C` | Teks aksen kecil dan hover sinyal |
| `on-signal` | `#081217` | Teks di atas bidang sinyal |
| `mist` | `#C9D8D8` | Pesan sukses, bidang informasi ringan |
| `focus` | `#B23A1C` | Cincin fokus |

### Gelap

| Token | Nilai | Peran |
| --- | --- | --- |
| `night-chalk` | `#081217` | Latar halaman |
| `night-concrete` | `#0D1B21` | Latar seksi alternatif |
| `night-surface` | `#11242C` | Kartu, dialog |
| `night-ink` | `#F1EEE5` | Teks utama |
| `night-ink-soft` | `#B7C3C4` | Teks sekunder |
| `night-ink-faint` | `#9FB0B3` | Metadata |
| `night-line` | `rgba(241, 238, 229, 0.20)` | Garis rambut |
| `night-court` | `#1B4E63` | Bidang kedalaman |
| `night-court-lit` | `#23647A` | Hover bidang biru |
| `night-on-court` | `#F8F9F5` | Teks utama di atas biru |
| `night-on-court-soft` | `#D0E0E0` | Teks sekunder di atas biru |
| `night-on-court-faint` | `#B6CDCE` | Metadata di atas biru |
| `night-signal` | `#FF7A4D` | Aksen |
| `night-signal-deep` | `#FF9A75` | Teks aksen kecil dan hover |
| `night-on-signal` | `#081217` | Teks di atas sinyal |
| `night-mist` | `#23383F` | Pesan sukses |
| `night-focus` | `#FF7A4D` | Cincin fokus |

### Kontras terverifikasi

Rasio dihitung dengan rumus WCAG 2.x. Teks normal membutuhkan 4.5:1; teks besar dan elemen non-teks membutuhkan 3:1.

| Pasangan | Rasio | Aturan |
| --- | --- | --- |
| `ink` / `chalk` | 16.08 | Teks utama |
| `ink-soft` / `chalk` | 6.20 | Teks sekunder |
| `ink-faint` / `chalk` | 5.31 | Metadata |
| `ink-faint` / `concrete` | 4.69 | Metadata pada seksi alternatif |
| `signal` / `chalk` | 3.58 | **Hanya** grafik dan teks besar; jangan teks kecil |
| `signal-deep` / `chalk` | 5.20 | Teks aksen kecil |
| `ink` / `signal` | 4.60 | Teks di atas tombol sinyal |
| `chalk` / `signal-deep` | 5.20 | Hover tombol sinyal |
| `chalk` / `court` | 10.44 | Teks pada bidang biru |
| `on-court` / `court` | 11.35 | Teks utama pada biru |
| `on-court-soft` / `court` | 7.95 | Teks sekunder pada biru |
| `on-court-faint` / `court` | 6.40 | Metadata pada biru |
| `night-ink` / `night-chalk` | 16.32 | Teks utama |
| `night-ink-soft` / `night-chalk` | 10.47 | Teks sekunder |
| `night-ink-faint` / `night-chalk` | 8.42 | Metadata |
| `night-signal` / `night-chalk` | 7.34 | Aksen dan fokus |
| `night-signal-deep` / `night-chalk` | 9.13 | Teks aksen kecil |
| `night-on-signal` / `night-signal` | 7.34 | Teks di atas tombol sinyal |
| `night-on-court` / `night-court` | 8.57 | Teks utama pada biru |
| `night-on-court-soft` / `night-court` | 6.66 | Teks sekunder pada biru |
| `night-on-court-faint` / `night-court` | 5.44 | Metadata pada biru |

Aturan warna:

- Jangan memakai `signal` untuk teks kecil di atas `chalk`, `concrete`, atau `surface`; gunakan `signal-deep`.
- Jangan memakai warna saja untuk menandai keadaan. Sertakan garis, ikon, atau teks.
- `.on-court` menimpa `--line` agar garis tetap terlihat di atas biru.
- Cincin fokus memakai `--focus`; di dalam `.on-court` berubah menjadi `on-court`.

## Typography

Hanya dua keluarga font:

- **Archivo** untuk display, judul, body, navigasi, dan angka.
- **IBM Plex Mono** untuk eyebrow, label tombol, nomor bingkai, metadata teknis, dan tabel.

| Peran | Ukuran | Weight | Line-height | Tracking |
| --- | --- | --- | --- | --- |
| Display | `clamp(3.35rem, 0.4rem + 10.4vw, 9rem)` | 800 | 0.86 | -0.065em |
| Heading | `clamp(2.15rem, 1.35rem + 3.1vw, 4.25rem)` | 700 | 0.94 | -0.052em |
| Subheading | `clamp(1.3rem, 1.12rem + 0.72vw, 1.7rem)` | 650 | 1.12 | -0.028em |
| Lead | `clamp(1.15rem, 1.08rem + 0.3vw, 1.3rem)` | 400 | 1.55 | 0 |
| Body | `1.0625rem` | 400 | 1.65 | 0 |
| Small | `0.875rem` | 400 | 1.55 | 0 |
| Eyebrow | `0.6875rem` | 500 | 1.3 | 0.14em, uppercase |

Aturan:

- Display hanya untuk H1 dan angka besar. Jangan mengecilkan body di bawah 17px untuk memaksa teks masuk.
- Judul seksi memakai `t-2`; subjudul memakai `t-3`.
- Body maksimum `64ch`. Paragraf pengantar maksimum `40–48ch` agar tetap mudah dipindai.
- Nomor dan statistik memakai `tabular-nums lining-nums`.
- Nomor bingkai selalu dua digit: `01`, `02`, `03`.
- Jangan memakai huruf miring dekoratif. Tidak ada font ketiga.

## Layout

- Container maksimum `1440px` dengan gutter `clamp(1.25rem, 5vw, 4rem)`.
- Grid 12 kolom. Hero dan page hero memakai 8/4; header seksi memakai 7/4 dengan intro mulai kolom 9.
- Jarak antar seksi `clamp(4.5rem, 10vw, 9rem)`.
- Pembuka seksi memakai garis atas `2px` berwarna `ink`; isi memakai garis `1px` berwarna `line`.
- Di mobile, semua kolom menjadi satu kolom mengikuti urutan DOM. Jangan memakai `order` untuk membalik urutan baca.
- Navbar setinggi `72px` di mobile dan `80px` di desktop. Saat scroll, navbar memakai `chalk` solid dan garis bawah; tanpa blur.
- Target sentuh minimum `44×44px`; tombol utama dan kontrol ikon `48–52px`.
- Gunakan kelipatan 4px. Jangan mencampur margin vertikal yang tidak konsisten.
- Halaman dalam selalu dimulai dengan `PageHero`: label halaman, judul, ringkasan, lalu bingkai `01`.

## Elevation & Depth

Sistem ini tidak memakai bayangan. Kedalaman dibangun dengan:

1. Perbedaan bidang: `chalk` → `concrete` → `surface`.
2. Bidang `court` untuk blok statistik, panduan, dan testimoni.
3. Garis rambut 1px dan garis seksi 2px.
4. Overlap terkontrol dan ruang kosong.
5. Skala tipografi, bukan efek visual.

Satu-satunya pengecualian adalah tombol WhatsApp mengambang: garis `ink` 1px, latar `surface`, tanpa bayangan. Dialog memakai garis dan backdrop gelap, bukan drop shadow.

Jangan memakai glassmorphism, gradient dekoratif, glow, atau bayangan lembut.

## Shapes

- Sudut tajam untuk semua tombol, bingkai, kartu, input, dan dialog.
- `9999px` hanya untuk chip filter dan elemen status berbentuk pil.
- Garis 1px untuk batas; 2px untuk fokus, garis aktif, dan pembuka seksi.
- Bingkai foto memiliki bilah atas berisi nomor dan rasio, dipisahkan garis rambut.
- Ikon memakai stroke 1.75px, ukuran 18–24px. Ikon dekoratif selalu `aria-hidden`.

## Components

### Tombol

- **Primary**: latar `ink`, teks `chalk`, tinggi minimum 52px. Hover menjadi `court`. Satu aksi utama per layar.
- **Outline**: transparan, teks `ink`, garis `ink` 1px. Hover menjadi `ink` dengan teks `chalk`.
- **Signal**: latar `signal`, teks `on-signal`. Hover menjadi `signal-deep` dengan teks `chalk`. Hanya untuk satu ajakan tindakan utama di halaman kontak atau penutup.
- Label memakai IBM Plex Mono 11px, uppercase, tracking 0.11em, dan kata kerja: "Chat WhatsApp", "Kenali padel", "Kirim pesan".
- Fokus memakai cincin 2px dengan offset 3px. Jangan mengandalkan hover saja.
- Tombol nonaktif memakai opacity 0.6 dan kursor `not-allowed`.

### Bingkai Foto (Plate)

- Latar `surface` atau `court`; garis `line` 1px; tanpa bayangan.
- Bilah atas berisi `PLATE 01` dan rasio, dipisahkan garis rambut.
- Area gambar memakai rasio yang tertera. `src` diisi lewat `next/image` dengan `fill`; rasio foto potret dipotong `object-cover` kecuali bingkai pratinjau memakai `fit="contain"` di atas grid teknis.
- Placeholder memakai grid 24px dan label "Foto belum tersedia".
- Caption berada di bawah bingkai: judul kecil dan metadata `ink-faint`.
- Halaman galeri memakai bingkai pertama `16:9` dan sisanya `4:5`.
- Jangan memakai foto stok, foto pihak lain tanpa izin, atau gambar lama sebagai pengganti slot foto.
- Aset sintetis (hasil generate) boleh dipakai untuk suasana dan ilustrasi dengan syarat: diberi penanda "Ilustrasi" di `alt` dan `caption`, tidak memuat merek atau emblem pihak ketiga, tidak menggambarkan orang nyata, dan tidak dijadikan bukti klaim spesifik.
- Slot yang belum punya bukti visual tetap memakai bingkai "Foto belum tersedia". Itu perilaku yang benar, bukan kegagalan.

### Baris Interaktif

- `.row-link` memakai garis atas, nomor, judul, deskripsi, dan panah.
- Hover atau fokus mengubah garis menjadi `signal`, latar menjadi `surface`, dan menggeser panah 4px.
- Gunakan untuk manfaat, layanan, dan daftar yang bisa dipindai. Jangan membungkusnya dalam kartu berbayang.

### Chip

- Pil dengan garis `line`, teks `ink`, IBM Plex Mono uppercase.
- Chip aktif memakai latar `ink` dan teks `chalk`.
- Hover menebalkan garis dan memakai `surface`; jangan memakai `signal` sebagai latar chip.

### Formulir

- Input memakai latar transparan, garis bawah `line` 1px, padding vertikal 12px.
- Fokus mengubah garis bawah menjadi `signal` 2px; error memakai `signal-deep` dan teks error 14px.
- Label selalu terlihat. Placeholder bukan pengganti label.
- Error dihubungkan dengan `aria-describedby` dan diberi `role="alert"`.
- Honeypot tidak terlihat, tetapi tetap berada di DOM dan diberi `aria-hidden`.
- Status pengiriman memakai `role="status"` dan menerima fokus setelah berubah.

### Navigasi

- Tautan nav memakai Archivo 14px 600. Tautan aktif ditandai garis bawah `signal` 2px, bukan warna saja.
- Menu mobile memakai panel `chalk` penuh, garis atas, tautan besar, dan tombol tutup 48px.
- Fokus terkurung di dalam menu saat terbuka. Escape menutup dan mengembalikan fokus ke pemicu.

### Tabs

- Pola ARIA: `tablist`, `tab`, `tabpanel`; panah kiri/kanan, Home, dan End.
- Garis aktif meluncur dengan spring; isi bergeser horizontal.
- Autoplay 5500ms di halaman layanan. Berhenti saat hover atau fokus, bisa dijeda, dan mati saat reduced motion.
- Panel memakai id stabil agar `aria-controls` tidak berubah.

### Testimoni

- Slider 6500ms dengan tombol sebelumnya/berikutnya, indikator, dan kontrol jeda.
- Kutipan memakai `t-2` di atas bidang `court`.
- Hentikan autoplay saat hover atau fokus; hormati reduced motion.
- Jangan mengubah kutipan atau atribusi tanpa sumber.

### Galeri

- Filter Semua/Pemain/Lounge/Detail (kategori tanpa item tidak ditampilkan).
- Pratinjau memakai `<dialog>` native dengan `showModal()`.
- Panah kiri/kanan berpindah bingkai; Escape dan klik backdrop menutup.
- Saat terbuka, scroll halaman dikunci dan header serta tombol mengambang disembunyikan.

## Motion

- Judul hero memakai mask per baris dengan stagger 80ms.
- Judul seksi memakai `SplitHeading` dengan stagger 55ms per kata.
- `Reveal` menggeser 14px dan memudar 0.6s saat masuk viewport.
- Curtain navigasi 0.85s; hanya berjalan setelah mount untuk menghindari hydration mismatch.
- Hover dan transisi warna 300ms; garis aktif tabs memakai spring.
- Statistik menghitung 1.6s dan berhenti di nilai final.
- `prefers-reduced-motion` mematikan autoplay, menyembunyikan kontrol jeda secara visual, dan membuat transisi instan.
- Jangan mencabangkan markup atau `initial` pada `useReducedMotion`; nilai itu berbeda antara server dan klien. Gunakan durasi 0, `exit` kondisional, atau `motion-reduce:hidden`.

## Accessibility

- Semua teks normal memenuhi 4.5:1; kontrol dan fokus memenuhi 3:1.
- Skip link menuju `#konten` dan terlihat saat fokus.
- Fokus terlihat di semua tautan dan tombol dengan cincin 2px offset 3px.
- Gambar dekoratif `aria-hidden`; gambar bermakna memakai alt yang menjelaskan isi.
- Dialog galeri mengembalikan fokus dan mengunci scroll.
- Formulir memakai label eksplisit, pesan error spesifik, dan status yang diumumkan.
- Hormati zoom 200%, mode gelap, dan `prefers-reduced-motion`.
- Uji minimal 360px, 390px, 768px, 1024px, dan 1440px.

## Content Rules

- Bahasa Indonesia, `lang="id"`.
- Gunakan hanya fakta yang dikonfirmasi di `src/lib/site.ts` atau konten terkurasi.
- Jam buka, email, sosial, dan koordinat masih kosong; jangan mengarang nilai.
- Aset visual saat ini adalah **ilustrasi sintetis** di `public/ai/`, dipasang lewat `Plate` (prop `src` + `alt`). Setiap `alt` dan `caption` diawali "Ilustrasi", dan `meta` bingkai menyebut "ILUSTRASI" — ini penanda yang disengaja, bukan ornamen.
- Foto venue asli milik owner tetap ada di `public/` dan `public/new/` tetapi tidak dirujuk. Bila nanti dipakai, penanda "Ilustrasi" pada slot tersebut harus dilepas.
- Bingkai tanpa `src` tampil sebagai placeholder berlabel "Foto belum tersedia". Slot tim sengaja dibiarkan begitu sampai ada potret orang sungguhan.
- Video belum tersedia; slot video memakai poster bila ada.
- Statistik klub di `stats.json` adalah data contoh dan tidak boleh diklaim sebagai angka nyata.
- Informasi kesehatan adalah informasi umum, bukan nasihat medis. Sertakan saran konsultasi dokter.
- Jangan menambahkan harga, fasilitas, atau jadwal yang belum dikonfirmasi.

## Do's and Don'ts

### Lakukan

- Gunakan `chalk` sebagai latar default dan `court` hanya untuk bidang yang memang ingin ditekankan.
- Pertahankan satu aksen oranye per layar.
- Tampilkan placeholder berlabel untuk setiap media yang belum tersedia.
- Gunakan garis dan ruang kosong untuk memisahkan konten.
- Uji keyboard, mode gelap, reduced motion, dan lebar 360px.
- Tulis caption spesifik: apa yang terlihat dan mengapa penting.

### Jangan

- Jangan memakai lime, neon, atau aksen kedua.
- Jangan memakai bayangan, glassmorphism, gradient dekoratif, atau glow.
- Jangan membulatkan bingkai, tombol, input, atau dialog; hanya chip yang berbentuk pil.
- Jangan memakai foto stok, foto pihak lain tanpa izin, atau gambar lama sebagai pengganti slot foto.
- Jangan menaruh merek, emblem, atau teks terbaca di dalam aset sintetis — itu memindahkan masalah, bukan menyelesaikannya.
- Jangan menyamarkan ilustrasi sebagai dokumentasi: setiap aset generate wajib terbaca sebagai "Ilustrasi" di `alt` dan `caption`.
- Jangan memakai `signal` untuk teks kecil di atas `chalk` atau `concrete`.
- Jangan memakai warna saja untuk menandai status, error, atau tautan aktif.
- Jangan menambahkan font ketiga, marquee, parallax, atau animasi magnetik.
- Jangan mengklaim fasilitas, harga, jam buka, atau kontak yang belum dikonfirmasi.

## Implementation Map

- Token dan utilitas: `src/app/globals.css`.
- Pemetaan warna dan font: `tailwind.config.ts`.
- Font, tema awal, metadata, JSON-LD: `src/app/layout.tsx`.
- Tombol: `src/components/ui/Button.tsx`.
- Bingkai dan placeholder: `src/components/ui/Plate.tsx`.
- Judul dan seksi: `src/components/sections/PageHero.tsx`, `src/components/ui/SplitHeading.tsx`.
- Navigasi: `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`.
- Interaksi: `src/components/ui/AnimatedTabs.tsx`, `src/components/sections/TestimonialSlider.tsx`, `src/components/sections/Gallery.tsx`.
- Motion: `src/components/ui/Reveal.tsx`, `src/app/template.tsx`.
