# Brief 03 — Lounge, Fasilitas, dan Detail

7 aset. Tidak ada manusia sebagai subjek. Gaya global dan negative prompt: [[01-panduan-gaya]].

Indeks: [[00-INDEX]] · Alt/caption berpenanda "Ilustrasi": [[06-checklist-hak-cipta-dan-klaim]]

## Catatan khusus berkas ini

Lima dari tujuh slot ini sebelumnya berupa **grafis Instagram dengan teks Inggris baked-in** ("PERSONAL LOCKERS", "PLENTY OF SEATING", "FREE FACE COLD TOWEL", "COOLING FANS AVAILABLE", "AIR CONDITIONED COOLER"). Dua konsekuensi:

1. Teks itu hilang total di versi AI — bagus, karena melanggar aturan "Bahasa Indonesia" dan "tanpa markah".
2. **Klaim yang tadinya dibawa teks sekarang harus pindah ke copy.** Kata "gratis" pada handuk dingin, misalnya, tidak boleh disisipkan ke gambar maupun ditulis di deskripsi sebelum owner mengonfirmasi. Lihat catatan tiap slot.

---

## 03.1 Lounge sofa terakota

```
FILE   : public/BenchIndoor.jpeg
RASIO  : 4:5
PAKAI  : gallery.json "sofa-terakota", PageHero /kontak, services.json "lounge"
```

**PROMPT**

```
Warm clubhouse lounge corner, deep tan boucle sofa with matching scatter cushions against a matte terracotta plaster wall, a rectangular mirror framed in chunky irregular stone mosaic above the sofa, round solid teak coffee table in front, a green-and-red woven rope chair partly entering the frame, one leafy plant at the edge, soft warm tungsten light, calm residential-club atmosphere, muted terracotta, chalk and warm wood palette, interior photography, 35mm, f/4, level camera, realistic color science, slight film grain, no people, no legible text anywhere, no logos, no brand marks, no watermarks, no signage, no reflection of lettering in the mirror
```

**ALT** `Ilustrasi sofa krem dan kursi anyam hijau di lounge berdinding terakota dengan cermin berbingkai batu`

**CAPTION** `Ilustrasi sudut lounge.`

**CATATAN** Cermin adalah jebakan teks — generator sering memantulkan huruf. Tolak bila ada.

---

## 03.2 Lounge kayu dan dinding batu

```
FILE   : public/waiting_room.jpg
RASIO  : 4:5  (DUA OUTPUT — generate juga versi 3:2 untuk page hero /layanan)
PAKAI  : gallery.json "lounge", facilities.json "lounge-hangat", PageHero /layanan, coverImage artikel "memulai-padel-di-usia-lanjut"
```

**PROMPT**

```
Indoor padel club lounge, a row of teak armchairs with green woven webbing backs and rust-orange seat cushions, small round timber tables, a blank dark flat screen mounted on a warm ochre split-face stone tile wall, green painted column at one edge, dark stone floor, low warm light, quiet empty room, muted ochre, teal and timber palette, interior photography, 35mm, f/4, level camera, realistic color science, slight film grain, no people, no legible text anywhere, no logos, no brand marks, no watermarks, blank switched-off screen showing no channel logo
```

**ALT** `Ilustrasi kursi kayu beranyam hijau di lounge dengan dinding batu hangat`

**CAPTION** `Ilustrasi lounge tempat beristirahat setelah bermain.`

**CATATAN** Layar harus mati total tanpa logo channel. Slot ini dipakai di 4 tempat, jadi generate sekali lalu verifikasi di keempatnya.

---

## 03.3 Loker bernomor

```
FILE   : public/PersonalLockers.jpeg
RASIO  : 4:5
PAKAI  : gallery.json "loker-pribadi", facilities.json "loker-pribadi"
```

**PROMPT**

```
Row of sage-green metal personal lockers with warm brass frames, each door with a small rectangular viewing slot, a ventilation triangle of punched holes and a simple key lock, mounted against a rough warm stone tiled wall, soft directional interior light, orderly and clean, muted green, brass and ochre palette, architectural detail photography, 35mm, f/4, straight verticals, realistic color grain, no people, no legible text anywhere, no numbers, no letters, no labels, no logos, no brand marks, no watermarks, no signage
```

**ALT** `Ilustrasi loker hijau berbingkai kuningan di sisi ruang ganti`

**CAPTION** `Ilustrasi loker pribadi anggota.`

**CATATAN** Sumber asli memakai label `M1`–`M6`. Prompt di atas **melarang angka dan huruf** — kalau generator tetap memberi label, itu bukan kegagalan fatal tapi wajib masuk peninjau ulang, karena nomor loker adalah teks yang terbaca.

**KLAIM** Jangan tulis "gratis", "termasuk sewa lapangan", atau kapasitas loker apa pun sebelum owner mengonfirmasi.

---

## 03.4 Dispenser handuk dingin

```
FILE   : public/FreeFaceColdTowel.jpeg
RASIO  : 4:5
PAKAI  : gallery.json "handuk-wajah", facilities.json "handuk-dingin"
```

**PROMPT**

```
Close view of a dark chilled dispenser cabinet holding neat rows of rolled white terry towels on a black wire shelf, one hand reaching in to take a roll, fingers natural and correctly formed, deep matte black interior contrasted with bright clean white towels, soft cool light from above, hygienic spa-club feeling, muted charcoal and chalk palette, one small orange accent, detail photography, 50mm, f/4, realistic color science, slight film grain, no face visible, no legible text anywhere, no logos, no brand marks, no watermarks, no signage
```

**ALT** `Ilustrasi tangan mengambil handuk putih bergulung dari dispenser`

**CAPTION** `Ilustrasi handuk wajah dingin.`

**CATATAN** Tangan adalah sumber cacat paling umum. Cek jari satu per satu. Kalau gagal terus, generate tanpa tangan dan ganti `ALT` menjadi tanpa kata "tangan".

**KLAIM** Sumber lama menyebut "FREE". Jangan tulis gratis di deskripsi fasilitas sampai owner mengonfirmasi; kata "tersedia" sudah cukup dan sudah dipakai di `facilities.json`.

---

## 03.5 Sudut pendingin

```
FILE   : public/AirConditionedCooler.jpeg
RASIO  : 4:5
PAKAI  : gallery.json "pendingin-portabel"
```

**PROMPT**

```
Tall white portable evaporative air cooler standing beside a small high table and woven cream bar stools against a textured terracotta wall, dark doorway at one side, soft warm interior light, uncluttered corner of a club lounge, muted white, terracotta and chalk palette, interior detail photography, 35mm, f/4, level camera, realistic color science, slight film grain, no people, no legible text anywhere, no brand name on the appliance, no control-panel lettering, no energy-rating sticker, no logos, no watermarks
```

**ALT** `Ilustrasi pendingin udara portabel berdiri di sisi kursi anyam dekat dinding terakota`

**CAPTION** `Ilustrasi pendingin di area lounge.`

**CATATAN** Panel kontrol unit asli penuh tulisan. Minta tanpa huruf, dan jangan klaim "AC sentral" — yang terlihat adalah unit portabel.

---

## 03.6 Bar dan rak bercahaya

```
FILE   : public/CupAndEspressoMachine.jpeg
RASIO  : 4:5
PAKAI  : gallery.json "rak-bar", facilities.json "sudut-minum"
```

**PROMPT**

```
Backlit light-oak shelving grid in a club lounge, each cubby lit from a hidden warm strip, holding stacked glassware, clear canisters, ceramic bowls and a small potted plant, below it a dark stone counter with an unbranded coffee grinder, a gooseneck kettle and a compact espresso machine, moody warm tungsten light against deep shadow, muted honey wood and charcoal palette, interior photography, 35mm, f/4, level camera, realistic color science, slight film grain, no people, no legible text anywhere, no logos, no brand marks, no machine badges, no packaging, no boxes, no watermarks
```

**ALT** `Ilustrasi rak kayu bercahaya berisi gelas dan perkakas kopi di atas meja bar`

**CAPTION** `Ilustrasi sudut minum di lounge.`

**CATATAN** Sumber asli menaruh kardus di atas meja — jangan masuk. Jangan tulis menu atau harga.

---

## 03.7 Cangkir di atas mesin

```
FILE   : public/Cup.jpeg
RASIO  : 4:5
PAKAI  : gallery.json "cangkir-espresso"
```

**PROMPT**

```
Row of empty ceramic cups resting upside down on the mirrored chrome top of an espresso machine, one striped sage-green cup, one speckled cream cup, one dark glazed cup and a small glass, warm backlit timber shelving softly out of focus behind, reflections of a court net abstracted into lines on the chrome, shallow depth of field, muted cream, sage and warm metal palette, still life detail photography, 85mm, f/5.6, realistic color science, slight film grain, no people, no legible text anywhere, no logos, no brand name on the machine, no watermarks
```

**ALT** `Ilustrasi deretan cangkir keramik di atas mesin espresso dengan latar rak bercahaya hangat`

**CAPTION** `Ilustrasi cangkir di sudut minum.`

**CATATAN** Krom memantulkan apa pun di ruangan — pastikan pantulannya tidak membentuk huruf yang terbaca.
