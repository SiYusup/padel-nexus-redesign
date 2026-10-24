# Aset Desain Padel Nexus — Brief Generate AI

Indeks kerja penggantian aset visual. Ganti posisi: foto venue asli milik owner → aset hasil generate AI.

Acuan: [[1-PRD]] · [[2-TECH-SPEC]] · `DESIGN.md` (Court Atlas) · [[01-panduan-gaya]] · [[06-checklist-hak-cipta-dan-klaim]]

## Kenapa dokumen ini ada

Situs selesai dibangun sampai revisi "Court Atlas", dan seluruh slot gambar sudah punya jalur data (`Plate` menerima `src` + `alt`). Yang tersisa hanya mengganti berkas di `public/`. Brief ini menulis ulang tiap slot menjadi instruksi generate yang bisa langsung ditempel ke generator gambar.

## Peta berkas

| Berkas | Isi | Aset |
| --- | --- | --- |
| [[01-panduan-gaya]] | Aturan global: palet, lensa, cahaya, larangan markah, negative prompt dasar, gerbang mutu | – |
| [[02-brief-lapangan-dan-arsitektur]] | Lapangan, dinding kaca, koridor, makro permukaan, raket | 6 |
| [[03-brief-lounge-fasilitas-dan-detail]] | Lounge, bar, loker, handuk, pendingin, cangkir | 7 |
| [[04-brief-manusia-pemain-dan-tim]] | Pemain, pemain senior, potret tim | 8 |
| [[05-brief-ikon-og-image-dan-wordmark]] | OG-image (ikon dan wordmark tidak perlu aset) | 1 |
| [[06-checklist-hak-cipta-dan-klaim]] | Yang boleh dan tidak boleh diklaim, penanda "Ilustrasi", jejak sumber | – |
| [provenance/aset-terpasang](provenance/aset-terpasang.md) | Jejak sumber tiap aset yang kini terpasang + hasil gerbang mutu | – |

**22 berkas, 25 kali generate.** Selisih 3 muncul dari slot bertanda `DUA OUTPUT` — satu adegan dipakai pada dua rasio berbeda (16:9 dan 3:2) dan tidak bisa dilayani satu berkas.

Angka ini mengikuti slot yang benar-benar terpakai di kode saat ini, bukan daftar keinginan.

## Cara pakai

1. Baca [[01-panduan-gaya]] sekali — bagian "Pola prompt wajib" berlaku untuk semua brief.
2. Generate per berkas brief. Satu slot = satu blok prompt. Jangan menyingkat `NEGATIVE`.
3. Simpan hasil dengan nama berkas yang persis sama seperti di blok `FILE`.
4. Taruh di `public/` (atau `public/team/` bila tertulis begitu).
5. Ganti `alt` dan `caption` mengikuti teks yang disediakan — jangan tulis ulang sendiri.
6. Verifikasi: `npm run lint && npm run typecheck && NEXT_DIST_DIR=.next-verify npm run build`
7. Cek visual: mode gelap, lebar 360px, dan `prefers-reduced-motion`.

## Rasio dan cropping

`Plate` memotong dengan `object-cover` pada rasio yang dideklarasikan, jadi rasio generate menentukan apakah subjek terpotong atau tidak.

| Rasio | Dipakai oleh | Catatan |
| --- | --- | --- |
| `16:9` | Bingkai pertama galeri | Bingkai pembuka, selalu lanskap |
| `3:2` | Page hero 6 halaman dalam | Ganti rasio ini bila foto induknya lanskap ketat |
| `4:5` | Grid galeri, kartu artikel, tab fasilitas, kartu tim | Rasio default `Plate` |
| `1.91:1` | `og-image` | Wajib 1200×630, teks aman di tengah |

Satu adegan yang dipakai di dua rasio berbeda saya tandai `DUA OUTPUT` di brief-nya — generate dua kali, jangan pakai satu berkas untuk keduanya.

## Slot → berkas

| Slot di kode | Berkas target | Brief |
| --- | --- | --- |
| `gallery.json` (18 item) | lihat [[02-brief-lapangan-dan-arsitektur]] dan [[03-brief-lounge-fasilitas-dan-detail]] | per item |
| `facilities.json` (6 tab) | ikut induk galerinya | 03 / 02 |
| `services.json` (2 gambar) | ikut induk galerinya | 02 |
| `team.json` (3 potret) | `public/team/*.webp` | 04 |
| `articles/*.mdx` (`coverImage`, 5) | ikut induk galerinya | 02 / 03 / 04 |
| Page hero ×6 | ikut induk galerinya | 02 / 03 |
| `app/opengraph-image` | `public/og-image.png` | 05 |
| Ikon UI (`Icon.tsx`) | tetap SVG inline | 05 |

## Yang sengaja tidak digenerate

- **`Hero` beranda** memakai `CourtPlan` SVG (denah lapangan). Itu inti Court Atlas dan lebih murah untuk LCP daripada foto. Jangan diganti foto.
- **`free_trial.jpg`** — promo "Soft Opening 14 Feb till 18 Feb" yang sudah lewat masa berlaku. Tidak masuk sistem desain evergreen.
- **`Logo.jpg` 150×150** — terlalu kecil untuk pratinjau berbagi; favicon sudah ditangani `app/icon.svg`.

## Perubahan yang perlu Anda setujui dulu

`DESIGN.md` masih melarang ilustrasi AI di dua tempat: baris 313 dan 412. Selama larangan itu berdiri, aset hasil generate menyalahi sistem desainnya sendiri. [[06-checklist-hak-cipta-dan-klaim]] menyediakan rumusan pengganti yang mengizinkan aset sintetis dengan syarat diberi penanda "Ilustrasi".
