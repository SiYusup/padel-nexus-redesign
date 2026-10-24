# PRD Padel-Nexus (Web Company Profile)

## Bagian 1: Visi & Tujuan Produk

### Visi Produk
Padel-Nexus ingin menjadi pintu masuk digital bagi siapa pun yang ingin hidup lebih sehat lewat olahraga padel. Website company profile ini memperkenalkan siapa kami, apa yang kami tawarkan, dan mengapa padel cocok untuk semua usia. Penyajiannya informatif, animatif, dan interaktif, supaya pengunjung langsung paham dan tertarik mencoba.

### Tujuan Utama
1. **Membangun kredibilitas perusahaan.** Indikator: halaman Tentang Kami, layanan, dan fasilitas lengkap, dengan rata-rata durasi kunjungan > 2 menit.
2. **Mengedukasi tentang padel dan gaya hidup sehat.** Indikator: minimal 5 konten edukatif, dengan scroll depth > 60% di halaman konten.
3. **Memberi pengalaman visual yang menarik.** Indikator: animasi dan elemen interaktif tampil mulus (60 fps) dan bounce rate < 50%.
4. **Menjadi kanal kontak awal.** Indikator: minimal 5% pengunjung menekan tombol kontak atau mengirim form.
5. **Menyiapkan fondasi untuk fitur lanjutan (v2).** Indikator: struktur dan desain siap diperluas untuk booking.

### Value Proposition
- Informatif: semua yang perlu diketahui tentang perusahaan, padel, dan manfaat kesehatannya ada di satu tempat.
- Animatif: tampilan hidup dengan animasi halus yang menjaga perhatian pengunjung.
- Interaktif: pengunjung bisa mengeksplorasi sendiri, misalnya lewat galeri, tab, dan konten yang bergerak saat di-scroll.

## Bagian 2: User Persona

### Persona 1: Rina Wulandari
- **Usia/Pekerjaan:** 34 tahun, manajer pemasaran
- **Level Teknis:** Menengah
- **Tujuan:** Menemukan olahraga yang menyenangkan, bisa dilakukan bersama teman, dan membantu menjaga kebugaran di tengah jadwal kerja yang padat.
- **Pain Points:** Cepat bosan dengan gym, bingung memilih olahraga yang cocok, dan sulit menilai kredibilitas penyedia layanan hanya dari media sosial.
- **Motivasi:** Ingin hidup lebih sehat secara konsisten. Ia mencari informasi jelas dan tampilan yang meyakinkan sebelum mencoba padel.

### Persona 2: Pak Hendra Susilo
- **Usia/Pekerjaan:** 52 tahun, pemilik usaha
- **Level Teknis:** Pemula
- **Tujuan:** Mencari olahraga yang ramah sendi dan cocok untuk usianya, serta ingin tahu apakah padel aman bagi pemula yang lebih tua.
- **Pain Points:** Khawatir cedera, kurang paham aturan dan peralatan padel, dan tidak nyaman dengan situs yang rumit atau bertuliskan kecil.
- **Motivasi:** Dokter menyarankan lebih aktif bergerak. Ia butuh informasi sederhana, jelas, dan mudah dibaca untuk memutuskan mulai berolahraga.

## Bagian 3: User Stories

Format: `Sebagai [peran], saya ingin [tindakan], agar [manfaat].`

### Modul 1: Mengenal Perusahaan
- Sebagai pengunjung baru, saya ingin melihat hero yang jelas dan menarik di halaman utama, agar langsung paham apa itu Padel-Nexus.
- Sebagai calon pelanggan, saya ingin membaca profil, visi, dan tim perusahaan, agar yakin perusahaan ini kredibel.
- Sebagai calon pelanggan, saya ingin melihat layanan dan fasilitas yang tersedia, agar tahu apa yang bisa saya dapatkan.
- Sebagai pengunjung, saya ingin melihat galeri foto dan video, agar bisa membayangkan suasana di lapangan.

### Modul 2: Edukasi Padel & Hidup Sehat
- Sebagai pemula, saya ingin membaca penjelasan singkat tentang padel dan aturan dasarnya, agar tidak bingung saat mencoba.
- Sebagai orang yang ingin hidup sehat, saya ingin tahu manfaat padel bagi tubuh, agar termotivasi mulai berolahraga.
- Sebagai pengunjung usia lanjut, saya ingin informasi tentang keamanan dan tips mencegah cedera, agar merasa aman mencoba.
- Sebagai pengunjung, saya ingin membaca artikel atau tips hidup sehat, agar mendapat manfaat meski belum bermain.

### Modul 3: Pengalaman Interaktif
- Sebagai pengunjung, saya ingin animasi halus saat menggulir halaman, agar membaca terasa menyenangkan.
- Sebagai pengunjung, saya ingin elemen interaktif seperti tab, slider, atau kartu yang bisa diklik, agar bisa menjelajah sesuai minat.
- Sebagai pengguna perangkat apa pun, saya ingin tampilan yang rapi di ponsel, tablet, dan desktop, agar nyaman diakses di mana saja.

### Modul 4: Kontak & Lokasi
- Sebagai calon pelanggan, saya ingin mengirim pesan lewat form kontak, agar bisa bertanya langsung.
- Sebagai calon pelanggan, saya ingin melihat lokasi di peta dan jam operasional, agar mudah datang.
- Sebagai pengunjung, saya ingin tombol cepat ke WhatsApp dan media sosial, agar mudah menghubungi atau mengikuti perusahaan.

## Bagian 4: Functional Requirements

### Modul 1: Navigasi & Halaman Utama

**FR-01: Navigasi Utama**
- **Input:** Klik menu, scroll halaman
- **Proses:** Menampilkan navbar tetap (sticky) dengan penanda seksi aktif; di mobile menjadi menu hamburger
- **Output:** Pengunjung berpindah ke seksi atau halaman tujuan dengan scroll halus
- **Aturan:** Menu: Beranda, Tentang, Layanan, Galeri, Edukasi, Kontak

**FR-02: Hero Section Animatif**
- **Input:** Pemuatan halaman
- **Proses:** Menampilkan headline, sub-headline, visual/video latar, dan tombol ajakan (CTA) dengan animasi masuk
- **Output:** Kesan pertama yang jelas dan menarik
- **Aturan:** Animasi selesai < 2 detik; hormati pengaturan `prefers-reduced-motion`

**FR-03: Ringkasan Beranda**
- **Input:** Scroll
- **Proses:** Menampilkan cuplikan tiap seksi (tentang, layanan, edukasi, kontak) dengan tautan ke detailnya
- **Output:** Gambaran menyeluruh dalam satu halaman
- **Aturan:** Setiap cuplikan punya CTA ke seksi lengkapnya

### Modul 2: Profil Perusahaan

**FR-04: Tentang Kami**
- **Input:** Konten profil, sejarah, visi dan misi
- **Proses:** Menampilkan cerita perusahaan dengan timeline interaktif
- **Output:** Halaman yang membangun kepercayaan
- **Aturan:** Konten dikelola lewat file konten, bukan hardcode di komponen

**FR-05: Tim & Nilai Perusahaan**
- **Input:** Data anggota tim dan nilai perusahaan
- **Proses:** Menampilkan kartu tim (foto, nama, peran) dan nilai inti
- **Output:** Profil tim yang mudah dikenali
- **Aturan:** Kartu menampilkan detail tambahan saat di-hover atau diklik

**FR-06: Angka Pencapaian**
- **Input:** Data statistik (mis. jumlah lapangan, anggota, tahun berdiri)
- **Proses:** Menampilkan penghitung yang berjalan naik saat masuk viewport
- **Output:** Bukti kredibilitas yang visual
- **Aturan:** Animasi hanya berjalan sekali per kunjungan

### Modul 3: Layanan & Galeri

**FR-07: Daftar Layanan**
- **Input:** Data layanan (nama, deskripsi, ikon, gambar)
- **Proses:** Menampilkan kartu layanan dengan efek interaktif
- **Output:** Pengunjung tahu apa yang ditawarkan
- **Aturan:** Layanan baru bisa ditambah tanpa mengubah struktur halaman

**FR-08: Fasilitas Lapangan**
- **Input:** Data fasilitas (lapangan, perlengkapan, area komunitas)
- **Proses:** Menampilkan fasilitas dengan tab atau slider
- **Output:** Gambaran fasilitas yang tersedia
- **Aturan:** Setiap fasilitas memiliki foto dan deskripsi singkat

**FR-09: Galeri Foto & Video**
- **Input:** Kumpulan gambar dan video
- **Proses:** Menampilkan grid dengan lightbox, navigasi panah, dan filter kategori
- **Output:** Galeri yang bisa dijelajahi
- **Aturan:** Gambar dimuat malas (lazy load) dan dioptimalkan

### Modul 4: Edukasi & Hidup Sehat

**FR-10: Pengenalan Padel**
- **Input:** Konten tentang sejarah, peralatan, dan aturan dasar padel
- **Proses:** Menyajikan penjelasan bertahap dengan ilustrasi dan animasi
- **Output:** Pemula paham dasar-dasar padel
- **Aturan:** Bahasa sederhana, tanpa istilah teknis yang tidak dijelaskan

**FR-11: Manfaat Kesehatan**
- **Input:** Konten manfaat padel (kardio, kebugaran, sosial, mental)
- **Proses:** Menampilkan manfaat dalam kartu interaktif atau infografis
- **Output:** Pengunjung termotivasi untuk berolahraga
- **Aturan:** Klaim kesehatan harus netral dan bersumber jelas

**FR-12: Tips & Artikel Hidup Sehat**
- **Input:** Artikel (judul, ringkasan, isi, kategori, tanggal)
- **Proses:** Menampilkan daftar artikel dengan filter kategori dan halaman detail
- **Output:** Konten edukatif yang bisa dibaca
- **Aturan:** Minimal 5 artikel saat peluncuran

**FR-13: Panduan untuk Pemula & Usia Lanjut**
- **Input:** Konten keamanan, pemanasan, dan pencegahan cedera
- **Proses:** Menampilkan panduan khusus dengan checklist atau langkah bertahap
- **Output:** Pengunjung merasa aman memulai
- **Aturan:** Menyertakan catatan agar berkonsultasi dengan tenaga medis bila perlu

**FR-14: FAQ Interaktif**
- **Input:** Daftar pertanyaan dan jawaban
- **Proses:** Menampilkan akordeon yang bisa dibuka dan ditutup
- **Output:** Jawaban cepat atas pertanyaan umum
- **Aturan:** Hanya satu atau beberapa item terbuka sesuai desain, dapat dioperasikan dengan keyboard

### Modul 5: Kontak & Lokasi

**FR-15: Form Kontak**
- **Input:** Nama, email, nomor telepon (opsional), pesan
- **Proses:** Validasi di sisi klien dan server, lalu kirim ke email atau penyimpanan pesan
- **Output:** Pesan konfirmasi sukses atau pesan galat yang jelas
- **Aturan:** Email harus valid, pesan minimal 10 karakter, ada perlindungan spam (honeypot atau captcha ringan)

**FR-16: Peta Lokasi & Jam Operasional**
- **Input:** Koordinat, alamat, jam buka
- **Proses:** Menampilkan peta tersemat dan informasi operasional
- **Output:** Pengunjung bisa menemukan lokasi
- **Aturan:** Tersedia tautan "Buka di Google Maps"

**FR-17: Tombol Kontak Cepat & Media Sosial**
- **Input:** Nomor WhatsApp dan tautan media sosial
- **Proses:** Menampilkan tombol mengambang dan ikon di footer
- **Output:** Pengunjung langsung membuka WhatsApp atau media sosial
- **Aturan:** Tautan terbuka di tab baru, pesan WhatsApp sudah terisi otomatis

### Modul 6: Pengalaman Umum

**FR-18: Animasi Scroll & Transisi**
- **Input:** Posisi scroll dan interaksi pengguna
- **Proses:** Memicu animasi masuk (fade, slide, parallax) pada elemen saat terlihat
- **Output:** Pengalaman bergerak yang halus
- **Aturan:** Animasi dinonaktifkan jika pengguna memilih reduced motion

**FR-19: Tampilan Responsif & Mode Gelap**
- **Input:** Ukuran layar dan preferensi tema
- **Proses:** Menyesuaikan tata letak dan warna otomatis, dengan sakelar tema manual
- **Output:** Tampilan nyaman di semua perangkat
- **Aturan:** Pilihan tema tersimpan di peramban

**FR-20: SEO & Pratinjau Berbagi**
- **Input:** Metadata halaman
- **Proses:** Mengisi judul, deskripsi, Open Graph, sitemap, dan data terstruktur
- **Output:** Situs mudah ditemukan dan tampil baik saat dibagikan
- **Aturan:** Setiap halaman punya judul dan deskripsi unik

## Bagian 5: Non-Functional Requirements

### Performa
- Largest Contentful Paint (LCP) < 2,5 detik pada koneksi 4G
- Skor Lighthouse Performance ≥ 90 (mobile)
- Animasi berjalan mulus (target 60 fps), hanya memakai properti `transform` dan `opacity`
- Gambar dioptimalkan (WebP/AVIF), lazy load, dan ukuran responsif
- Total berat halaman awal < 2 MB

### Keamanan
- HTTPS wajib
- Form kontak divalidasi di sisi server dan dilindungi dari spam serta injeksi
- Header keamanan dasar (CSP, X-Content-Type-Options, Referrer-Policy)
- Tidak menyimpan data pribadi selain pesan kontak
- Kunci API atau kredensial tidak ditaruh di kode klien

### Aksesibilitas
- Mengikuti WCAG 2.1 level AA
- Kontras warna memadai dan ukuran teks nyaman dibaca, penting bagi pengunjung usia lanjut
- Seluruh elemen interaktif dapat dioperasikan dengan keyboard
- Teks alternatif pada gambar dan label pada form
- Menghormati `prefers-reduced-motion`

### SEO & Visibilitas
- Metadata unik tiap halaman, sitemap, dan robots.txt
- Open Graph dan data terstruktur (Organization, LocalBusiness)
- Skor Lighthouse SEO ≥ 90

### Skalabilitas & Pemeliharaan
- Siap menampung lonjakan kunjungan lewat hosting statis atau CDN
- Konten (artikel, layanan, tim, galeri) dipisah dari komponen agar mudah diperbarui
- Struktur kode siap diperluas untuk fitur v2 (booking, login)

### Usability
- Responsif: ponsel, tablet, dan desktop
- Bahasa Indonesia (struktur siap untuk multibahasa)
- Mendukung mode gelap dan terang
- Browser didukung: dua versi terbaru Chrome, Safari, Edge, dan Firefox

## Bagian 6: Out of Scope & Dependensi

### Out of Scope (Tidak Dikerjakan di V1)
- Booking lapangan online: ditunda ke v2
- Registrasi, login, dan akun pengguna: ditunda ke v2
- Pembayaran online dan e-commerce perlengkapan: ditunda ke v2
- Pencarian lawan main, komunitas, dan papan skor: ditunda ke v2
- Dashboard admin atau CMS penuh: ditunda ke v2 (konten V1 dikelola lewat file konten)
- Multibahasa (selain Bahasa Indonesia): ditunda ke v2
- Aplikasi mobile native: ditunda ke v2

### Dependensi
- Framework frontend dan library animasi (dipilih di Tech Spec): untuk komponen dan animasi
- Layanan hosting statis/CDN: untuk deployment dan kecepatan akses
- Layanan pengiriman email atau form backend: untuk form kontak
- Google Maps embed (atau alternatif): untuk peta lokasi
- WhatsApp click-to-chat: untuk kontak cepat
- Layanan font dan ikon: untuk tipografi dan ikonografi
- Aset konten dari perusahaan: logo, foto, video, teks profil, data tim, dan artikel

### Asumsi
- Pengunjung punya koneksi internet yang cukup stabil
- Perusahaan menyediakan aset visual dan konten berkualitas sebelum peluncuran
- Informasi kontak, alamat, dan jam operasional sudah final
- Klaim kesehatan ditinjau agar akurat dan netral
- Domain dan hosting disiapkan oleh pemilik proyek
