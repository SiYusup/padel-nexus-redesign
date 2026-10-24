# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion; konten statis MDX/JSON. Dipilih pengguna. Belum di-deploy (hanya lokal, hosting belum ditentukan).

## Users
Pengunjung yang ingin mengenal Padel-Nexus: semua umur, dengan prioritas orang yang sungguh-sungguh ingin hidup sehat. Mereka datang sebagai calon pemain atau pelanggan yang mengevaluasi perusahaan sebelum mencoba padel. Dua persona di PRD: Rina (34, manajer pemasaran, level teknis menengah) dan Pak Hendra (52, pemilik usaha, pemula teknis, khawatir cedera, butuh teks besar dan sederhana).

## Product Purpose
Web company profile Padel-Nexus (fase 1) sebagai etalase bagi orang yang ingin melihat perusahaan ini. Sukses berarti pengunjung memahami siapa Padel-Nexus, apa yang ditawarkan, mengapa padel baik untuk kesehatan semua umur, lalu menghubungi perusahaan. Booking, login, dan pembayaran ditunda ke v2.

## Positioning
Pusat padel yang menempatkan padel sebagai jalan menuju gaya hidup sehat untuk semua umur, bukan sekadar penyewaan lapangan.

## Operating Context
Pengunjung membuka situs dari ponsel maupun desktop, sering sambil membandingkan beberapa pilihan. Sebagian pengunjung usia lanjut atau pemula teknis. Konten diperbarui lewat file di repo, tanpa CMS.

## Capabilities and Constraints
- Cakupan V1: beranda, tentang, layanan dan fasilitas, galeri, edukasi (pengenalan padel, manfaat kesehatan, panduan pemula/usia lanjut, FAQ, artikel), kontak (form, peta, WhatsApp).
- Pengalaman harus informatif, animatif, dan interaktif; animasi menghormati `prefers-reduced-motion`.
- Bahasa Indonesia. Responsif. Mode terang dan gelap.
- Klaim kesehatan harus netral dan bersumber jelas; panduan pemula/usia lanjut menyertakan catatan konsultasi medis.
- Form kontak dikirim lewat email (Resend); pesan tidak disimpan.
- Target performa dan aksesibilitas: Lighthouse ≥ 90, WCAG 2.1 AA.
- Belum diputuskan: hosting dan domain, nama pengirim email, isi final timeline dan tim.

## Brand Commitments
Nama resmi tampil sebagai "padelNexus" (padel tipis, Nexus tebal miring), logo putih di atas hijau tua (`public/Logo.jpg`, resolusi kecil). Pada 19 Oktober 2026 pengguna menetapkan referensi visual yang mengikat: gaya rocketpadel.com (halaman putih bersih, tipografi raksasa, foto sebagai aset utama, satu aksen neon, menu layar penuh) dengan animasi sebagai pengganti video sinematik: parallax, transisi tab dan navbar, animasi hover dan kartu, serta landing page dengan animasi paling menarik. Yang diambil hanya bahasa visualnya; logo, teks, dan tata letak persis rocketpadel.com tidak disalin.

## Evidence on Hand
Aset yang diserahkan pengguna ada di `public/`:
- `Logo.jpg`: wordmark "padel**Nexus**" (padel tipis, Nexus tebal miring) putih di atas latar hijau tua. Resolusi sangat kecil (sekitar 2 KB); perlu versi lebih besar atau SVG/PNG transparan untuk dipakai di navbar dan hero.
- `playing_padel.jpg`: dua pemain di lapangan indoor, net berlogo sponsor (potret).
- `knee_footh.jpg`: close-up kaki dua pemain membawa raket (potret).
- `woman_kne.jpg`: pemain menenteng tas raket di depan net berlogo padelNexus (potret).
- `waiting_room.jpg`: area tunggu/lounge dengan dinding batu bata hangat dan kursi hijau-kayu (potret, ada watermark padelNexus).
- `quote.jpg`: close-up rumput lapangan dengan pelat logam bertuliskan "mejor set, Premium Padel Courts" (ada watermark padelNexus).
- `free_trial.jpg`: poster "Free Trial / Soft Opening", 14 Feb sampai 18 Feb, untuk komunitas padel reclub yang terpilih di Surabaya. Ini materi promosi lama, bukan konten situs.

Fakta yang bisa dibaca dari aset: Padel-Nexus berlokasi di Surabaya, dan lapangannya bermerek "mejor set — Premium Padel Courts" (lapangan indoor rumput sintetis hijau). Hanya fakta itu yang boleh dipakai.

Data kontak resmi dari pengguna:
- Alamat: Jl. Laguna Kejawan Putih Slt Blok MUI No.2, RT.000/RW.00, Kejawaan Putih Tamba, Mulyorejo, Surabaya, East Java 60112.
- Telepon/WhatsApp: 6281130811110 (format wa.me; tampil sebagai +62 811-3081-1110).

Dummy yang diizinkan pengguna: nama dan foto anggota tim, testimoni, dan angka pencapaian boleh memakai data contoh, dan harus ditandai sebagai dummy untuk diganti dengan data asli. Video akan ditambahkan pengguna belakangan; rancang slot video dengan poster dan fallback, jangan mengarang video.

Belum ada: video, jam buka, email, foto tim asli. Jam buka tetap placeholder yang jelas ditandai. Pekerjaan berikutnya tidak boleh mengarang jam buka atau klaim komersial lain sebagai fakta. Foto semua berorientasi potret atau persegi, jadi komposisi lebar (hero) perlu memperhitungkan crop. Foto orang di kaki dan tidak memperlihatkan pemain usia lanjut; jangan menyiratkan bahwa foto mewakili pemula atau usia lanjut.

## Product Principles
1. Edukasi sebelum penjualan: pengunjung harus merasa lebih paham dan lebih yakin, bukan didesak.
2. Terbuka untuk semua umur: informasi mudah dibaca dan tidak membuat pemula atau usia lanjut merasa tersisih.
3. Gerak yang bermakna: animasi dan interaksi membantu memahami konten, bukan sekadar hiasan.
4. Klaim jujur: kesehatan dan pencapaian hanya ditulis bila bisa dipertanggungjawabkan.
5. Fondasi untuk v2: struktur situs siap diperluas ke booking dan akun tanpa membongkar ulang.

## Accessibility & Inclusion
WCAG 2.1 AA. Pengunjung usia lanjut: kontras dan ukuran teks nyaman dibaca. Navigasi keyboard penuh, teks alternatif gambar, dan dukungan `prefers-reduced-motion`.
