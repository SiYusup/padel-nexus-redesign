# Brief 02 — Lapangan dan Arsitektur

6 aset. Tidak ada manusia sebagai subjek. Gaya global, palet, dan negative prompt ada di [[01-panduan-gaya]].

Indeks: [[00-INDEX]]

Semua `PROMPT` sudah memuat larangan markah. Semua `ALT` diawali "Ilustrasi" — wajib, lihat [[06-checklist-hak-cipta-dan-klaim]].

---

## 02.1 Deretan lapangan di bawah kanopi

```
FILE   : public/PadelField.jpeg
RASIO  : 16:9  (DUA OUTPUT — generate juga versi 3:2 untuk page hero /edukasi/artikel)
PAKAI  : gallery.json "kanopi-lapangan" (bingkai pembuka), PageHero /edukasi/artikel
```

**PROMPT**

```
Interior padel club in Surabaya under a white steel truss canopy roof, three indoor padel courts in a row seen from behind the near court, green artificial turf with crisp white lines, floor-to-ceiling tempered glass walls on black steel posts, black wire mesh upper walls, empty woven cream-and-gold player benches along the courts, large industrial wall fans mounted high, warm terracotta accent wall in the distance, soft diffuse overhead daylight, muted chalk-white and deep teal-blue palette, one small orange accent, architectural interior photography, wide establishing view, 24mm, camera level, vertical lines straight, no vanishing-point distortion, shot on 35mm prime, f/4, natural perspective, realistic color science, slight film grain, no HDR tonal compression, no legible text anywhere, no logos, no brand marks, no wordmarks, no sponsor tape, no hashtags, no watermarks, no signage, no lettering on equipment, blank unbranded surfaces, plain white net band with no printing
```

**ALT** `Ilustrasi deretan lapangan padel indoor di bawah kanopi baja, berdinding kaca dan jaring dengan rumput sintetis hijau`

**CAPTION** `Ilustrasi suasana lapangan indoor — bukan foto dokumentasi venue.`

**CATATAN** Bingkai ini tampil `16:9` penuh di galeri dan `3:2` di page hero. Jangan pakai satu berkas untuk keduanya; subjek akan terpotong. Pastikan net band polos — generator cenderung menempelkan tulisan di pita net.

---

## 02.2 Koridor dinding kaca

```
FILE   : public/TheBestCourt.jpeg
RASIO  : 4:5  (DUA OUTPUT — generate juga versi 3:2 untuk page hero /tentang)
PAKAI  : gallery.json "dinding-kaca", PageHero /tentang, services.json "lapangan"
```

**PROMPT**

```
Side corridor of an indoor padel club, tall frameless tempered glass wall on heavy black steel columns, reflections of the court in the glass, row of empty woven cream benches with gold frames lined along the inside of the glass, green turf visible through the glass, black wire mesh and a wall fan high above, warm cream roof structure, quiet unlit moment before play, muted chalk and teal palette with one orange accent, architectural detail photography, 35mm, camera level, straight verticals, soft diffuse light, realistic color science, slight film grain, no legible text anywhere, no logos, no brand marks, no sponsor tape, no watermarks, no hashtags, no signage, blank unbranded surfaces
```

**ALT** `Ilustrasi dinding kaca lapangan dengan tiang baja hitam dan deretan bangku anyam di sisi area bermain`

**CAPTION** `Ilustrasi koridor samping lapangan.`

**CATATAN** Versi asli punya hashtag cetak di gambar. Jangan biarkan keluaran apa pun memuat teks — ini slot yang paling sering menghasilkan tulisan.

---

## 02.3 Meja dan kursi menghadap lapangan

```
FILE   : public/BenchIndoor2.jpeg
RASIO  : 4:5
PAKAI  : gallery.json "meja-hadap-lapangan", facilities.json "pandang-lapangan"
```

**PROMPT**

```
Spectator seating area of an indoor padel club, solid teak timber tables and woven cream rope chairs arranged in a row facing a full-height glass wall, an empty padel court with green turf and white lines visible through the glass, black steel mullions, warm terracotta wall at one end, soft diffuse interior light, calm clubhouse atmosphere, muted chalk, teal and warm wood palette, interior photography, 35mm, f/4, level camera, realistic color science, slight film grain, no people, no legible text anywhere, no logos, no brand marks, no sponsor tape, no watermarks, no signage, blank unbranded surfaces
```

**ALT** `Ilustrasi meja kayu dan kursi anyam krem menghadap langsung ke lapangan lewat dinding kaca`

**CAPTION** `Ilustrasi area duduk menghadap lapangan.`

**CATATAN** Jangan ada orang — slot ini menjual ruang, bukan aktivitas.

---

## 02.4 Makro permukaan rumput dan pelat penahan

```
FILE   : public/quote.jpg
RASIO  : 4:5
PAKAI  : gallery.json "pelat", coverImage artikel "padel-dan-gaya-hidup-aktif"
```

**PROMPT**

```
Extreme close-up of a premium padel court surface edge, dense green synthetic turf fibres meeting a matte dark bronze metal retaining plate fixed with two countersunk screws, clean diagonal composition, shallow but readable depth of field, soft even light, no harsh speculars, muted green and dark teal palette, product detail photography, 85mm macro, f/5.6, realistic color science, slight film grain, no legible text anywhere, no logos, no brand marks, no engraved lettering, no cut-out wordmark in the metal, blank unbranded plate, no watermarks
```

**ALT** `Ilustrasi permukaan rumput sintetis lapangan dan pelat logam penahan tepi`

**CAPTION** `Ilustrasi detail permukaan lapangan.`

**CATATAN** Ini slot paling berbahaya untuk markah: generator ingin memotong nama merek ke pelat logam. Tolak hasil apa pun dengan huruf berlubang atau terukir.

---

## 02.5 Raket dan bola di bangku

```
FILE   : public/PadelField2.jpeg
RASIO  : 4:5
PAKAI  : gallery.json "raket-di-bangku", PageHero /edukasi
```

**PROMPT**

```
Two unbranded padel rackets and three optic-yellow padel balls resting on a woven cream rope bench with a gold frame, an empty green padel court softly out of focus behind, natural diffuse indoor light, quiet pre-game still life, muted chalk, teal and green palette with a small orange accent on one racket grip, still life photography, 50mm, f/4, realistic color science, slight film grain, no people, no legible text anywhere, no logos, no brand marks, no model names, no size stickers, no printed patterns with lettering, no watermarks, blank unbranded racket faces with plain perforation holes
```

**ALT** `Ilustrasi dua raket padel dan tiga bola tersusun di bangku anyam putih menghadap lapangan`

**CAPTION** `Ilustrasi peralatan sebelum bermain.`

**CATATAN** Permukaan raket harus polos berlubang, tanpa nama model. Wajah raket adalah tempat generator paling sering menulis merek.

---

## 02.6 Tumpukan raket

```
FILE   : public/PadelRacket.jpg
RASIO  : 4:5  (potret ketat — sumber lama hanya 540×960, generate ulang lebih besar)
PAKAI  : gallery.json "raket-tumpuk"
```

**PROMPT**

```
Stack of three unbranded padel rackets leaning on a green woven bench, dark composite faces with plain circular perforation pattern, black and green grips with no printed text, one racket edge showing a thin orange stripe, indoor club light, shallow depth, muted green and teal palette, equipment detail photography, 85mm, f/5.6, realistic color science, slight film grain, no people, no legible text anywhere, no logos, no brand names, no model numbers, no stickers, no watermarks
```

**ALT** `Ilustrasi tumpukan raket padel tanpa merek di atas bangku anyam hijau`

**CAPTION** `Ilustrasi raket yang tersedia di klub.`

**CATATAN** Sumber lama 540×960 dan akan ter-upscaled di bingkai lebar. Generate minimal 1080 px.
