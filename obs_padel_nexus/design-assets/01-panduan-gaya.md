# Panduan Gaya Global — Generate Aset Padel Nexus

Berlaku untuk semua brief. Baca ini sebelum [[02-brief-lapangan-dan-arsitektur]], [[03-brief-lounge-fasilitas-dan-detail]], [[04-brief-manusia-pemain-dan-tim]], [[05-brief-ikon-og-image-dan-wordmark]].

Indeks: [[00-INDEX]]

## North Star

Aset harus tetap terbaca sebagai **denah klub yang bisa dibaca**, bukan poster turnamen. Tenang, presis, cahaya dalam ruangan, satu titik warna hangat. Kalau hasil generate terasa "iklan olahraga berteriak", buang.

## Palet yang harus menang

Nilai diambil dari `DESIGN.md`. Sebutkan di prompt supaya output tidak melayang ke warna lain.

| Peran | Hex | Muncul sebagai |
| --- | --- | --- |
| `chalk` | `#EDF0EB` | Dinding terang, langit-langit kanopi, kain |
| `concrete` | `#DDE3DF` | Lantai beton, area teduh |
| `court` | `#123B4A` | Elemen biru gelap, tiang, area teduh dalam |
| rumput lapangan | `#3F6B3A` s.d. `#5C8A4E` | Rumput sintetis hijau, jangan neon |
| terakota | `#8C4A32` s.d. `#A85B3E` | Dinding batu terakota lounge |
| rotan krem | `#E8E2D4` + rangka `#C9A227` | Kursi dan bangku anyam |
| `signal` | `#D94F2B` | **Satu** titik per bingkai: bola, grip, aksen kain |

Larangan warna: tidak ada lime atau hijau neon, tidak ada oranye menyala menutupi bidang luas, tidak ada gradien ungu-biru, tidak ada putih klinis `#FFFFFF` sebagai latar.

## Sifat cahaya

- Interior beratap kanopi baja, cahaya difus dari atas, bayangan lembut.
- Lounge: cahaya tungsten hangat dari rak bercahaya, kontras sedang, highlight tidak terbakar.
- Jangan: matahari keras jam siang, flash langsung, golden hour dramatis, lens flare, siluet gelap.

## Bahasa lensa

Tempelkan satu baris ini di akhir tiap prompt:

```
shot on 35mm prime, f/4, natural perspective, no tilt-shift, no fisheye, realistic color science, slight film grain, no HDR tonal compression
```

Untuk makro/detail: `85mm macro, f/5.6, shallow but readable depth`.
Untuk arsitektur: `24mm, camera level, vertical lines straight, no vanishing-point distortion`.

## Aturan markah — ini bagian paling penting

Sumber risiko kekayaan intelektual terbesar di aset lama bukan fotonya, melainkan **merek pihak ketiga yang ikut terlihat**. Wajib tulis di setiap prompt:

```
no legible text anywhere, no logos, no brand marks, no wordmarks, no sponsor tape, no hashtags, no watermarks, no signage, no lettering on equipment, blank unbranded surfaces
```

Yang **tidak boleh** muncul, dan harus ditolak kalau generator menyisipkannya:

- `mejor set`, `NOX`, `Premium Padel Courts` — merek peralatan lapangan
- `Premier Padel`, `International Padel Federation` — merek dan emblem penyelenggara
- `Nuova Simonelli`, `KRIS`, `Samsung` — merek perkakas
- watermark `padelNexus` atau hashtag `#TheBestCourt` — ini milik aset lama; kalau generator menirunya dari referensi, buang hasilnya
- bendera, lambang negara, seragam bertulis

Net dan pita lapangan harus polos. Raket harus tanpa merek, tanpa stiker ukuran, tanpa nama model.

## Yang dilarang karena alasan keamanan orang

Untuk aset berisi manusia, lihat [[04-brief-manusia-pemain-dan-tim]]. Aturan globalnya: tidak ada pose yang memperlihatkan teknik berisiko sebagai contoh benar, tidak ada anak kecil, tidak ada orang yang tampak sedang cedera atau kepayahan ekstrem, tidak ada klaim medis lewat visual.

## Negative prompt baku

Gunakan utuh, jangan diperpendek:

```
text, letters, words, logo, brand, watermark, signature, hashtag, banner, signage, neon, lime green, fluorescent, purple gradient, blue gradient, glow, bloom, lens flare, light streak, bokeh balls, hdr, oversaturated, airbrushed, plastic skin, extra fingers, deformed hands, warped limbs, duplicated equipment, crooked net, bent posts, fisheye, tilt-shift, drone view, cartoon, 3d render look, painting, illustration, sketch, oil painting, anime, stock photo collage, split screen, frame border, vignette, film strip border, timestamp, lowres, jpeg artifacts
```

Tambahan untuk arsitektur: `impossible geometry, floating walls, missing net posts, asymmetric court lines, tennis court markings`

Tambahan untuk manusia: `face retouching, glamour lighting, gym selfie pose, mirror selfie, exaggerated muscle, medical setting, bandage, pain expression`

## Gerbang mutu (periksa sebelum dipakai)

Loloskan hanya kalau **semua** ya:

1. Tidak ada teks, angka, atau markah yang bisa dibaca.
2. Tidak ada lime/neon; hijau rumput masuk akal.
3. Garis lapangan benar dan simetris — lapangan padel punya service line dan garis tengah di area service, **bukan** garis lapangan tenis. Periksa telak bagian ini; generator sering salah.
4. Dinding kaca dan jaring baja tampak struktural, tidak melayang atau hilang tiang.
5. Jari, tangan, dan wajah manusia tidak rusak.
6. Tidak ada artefak HDR, bloom, atau vignette.
7. Rasio cocok dengan slot (`16:9`, `3:2`, `4:5`, atau `1.91:1`).
8. Subjek utama tidak terpotong saat `object-cover` — cek di browser, bukan hanya di viewer generator.
9. Masih terbaca di mode gelap (`--chalk` jadi `#081217`) tanpa kehilangan kontras.
10. Bila digambarkan sebagai foto venue: **sudah diberi penanda "Ilustrasi"** di `alt` dan `caption`. Lihat [[06-checklist-hak-cipta-dan-klaim]].

## Ukuran berkas dan format

- Target ≤ 300 KB per gambar setelah optimasi.
- Generator biasanya keluar PNG/JPEG. Simpan sumber di `public/`, biarkan `next/image` mengonversi ke WebP/AVIF saat request (`next.config.mjs` sudah mengatur `formats: ["image/avif","image/webp"]`).
- Lebar terkecil yang aman: 1080 px. Untuk slot `16:9` penuh, 1600 px.
- Jangan menaruh hasil mentah 4K di repo — memperlambat build dan tidak diperlukan.

## Cara menyimpan

Nama berkas harus sama persis dengan `FILE:` di brief, karena path itu yang divalidasi Zod lewat pola `assetPath` di `src/lib/content.ts` (harus diawali `/`, tanpa spasi). Setelah menaruh berkas, jalankan:

```bash
npm run typecheck
NEXT_DIST_DIR=.next-verify npm run build
```

Build akan gagal bila path konten tidak cocok atau ID ganda.
