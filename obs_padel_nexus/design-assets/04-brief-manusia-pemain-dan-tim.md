# Brief 04 — Manusia, Pemain, dan Tim

8 aset: 5 adegan dengan orang + 3 potret tim. Gaya global: [[01-panduan-gaya]].

Indeks: [[00-INDEX]] · Aturan klaim: [[06-checklist-hak-cipta-dan-klaim]]

## Dua hal yang perlu dibaca sebelum generate aset manusia

**1. Persona PRD menentukan siapa yang boleh muncul.** [[1-PRD]] menetapkan dua pembaca utama: Rina (34, mencari olahraga yang tidak membosankan) dan Pak Hendra (52, khawatir cedera, butuh yang ramah sendi). Karena itu komposisi orang di situs harus mencakup **pemain berusia paruh baya ke atas yang terlihat nyaman**, bukan hanya atlet muda. Slot 04.5 memenuhi itu.

**2. Visual tidak boleh menjadi nasihat medis.** Untuk halaman edukasi dan artikel keamanan, jangan pakai pose yang menyakitan, wajah meringis, atau perban. Jangan juga menggambarkan peregangan statis yang sebenarnya tidak disarankan sebelum bermain.

---

## 04.1 Dua pemain dalam reli

```
FILE   : public/playing_padel.jpg
RASIO  : 4:5
PAKAI  : gallery.json "rally", coverImage artikel "apa-itu-padel"
```

**PROMPT**

```
Two recreational padel players mid-rally on an indoor court, one woman in the foreground holding a plain unbranded padel racket in ready position and smiling naturally, another woman slightly behind moving into the ball, both in ordinary tasteful sportswear, green artificial turf with white lines, glass wall and warm clubhouse beyond, blurred white net band across the very bottom of the frame, soft diffuse light, candid sports lifestyle photography, 50mm, f/4, natural motion, realistic skin texture, realistic color science, slight film grain, no legible text anywhere, no logos, no brand marks, no sponsor tape, no watermarks, blank unbranded rackets
```

**ALT** `Ilustrasi dua pemain bersiap dalam reli di lapangan indoor, pita net polos di depan`

**CAPTION** `Ilustrasi permainan ganda di lapangan indoor.`

**CATATAN** Generator sering menggambar tangan salah saat memegang raket. Cek genggaman dan jumlah jari.

---

## 04.2 Langkah dan raket

```
FILE   : public/knee_footh.jpg
RASIO  : 4:5  (DUA OUTPUT — generate juga versi 3:2 untuk page hero /galeri)
PAKAI  : gallery.json "langkah", PageHero /galeri, coverImage artikel "manfaat-padel-untuk-tubuh"
```

**PROMPT**

```
Waist-down view of two padel players walking side by side on green artificial turf, each carrying a plain unbranded padel racket held loosely at their side, one yellow padel ball resting on the turf near a white line, skirts and sports shoes in neutral cream, black and navy, net with a blank white band behind them, soft even light, candid detail shot, 50mm, f/4, realistic color science, slight film grain, no faces, no legible text anywhere, no logos, no brand marks, no shoe logos, no sponsor tape, no watermarks
```

**ALT** `Ilustrasi dua pemain berjalan di lapangan sambil membawa raket`

**CAPTION** `Ilustrasi berjalan di lapangan.`

**CATATAN** Sepatu adalah tempat markah paling sering muncul — minta tanpa logo sepatu.

---

## 04.3 Pemain dan tas raket di depan net

```
FILE   : public/woman_kne.jpg
RASIO  : 4:5
PAKAI  : gallery.json "tas-raket", coverImage artikel "pemanasan-sebelum-bermain-padel"
```

**PROMPT**

```
Neck-down view of a padel player standing at the centre line beside a net, carrying a soft cream padel bag with two plain unbranded racket heads peeking out, white sports shoes on green turf, two yellow balls on the ground, blank white net band with no printing behind, calm pre-match moment, soft diffuse indoor light, candid detail photography, 50mm, f/4, realistic color science, slight film grain, no face visible, no legible text anywhere, no logos, no brand marks, no bag labels, no shoe logos, no watermarks
```

**ALT** `Ilustrasi pemain membawa tas raket berdiri di samping net`

**CAPTION** `Ilustrasi bersiap sebelum bermain.`

**CATATAN** Slot ini menempel di artikel pemanasan — pastikan tidak ada pose peregangan yang keliru sebagai rekomendasi.

---

## 04.4 Beristirahat di bangku samping lapangan

```
FILE   : public/PlentyOfSeating.jpeg
RASIO  : 4:5
PAKAI  : gallery.json "bangku-istirahat"
```

**PROMPT**

```
Three friends of mixed ages resting on woven cream benches beside an indoor padel court, towels over shoulders, water bottles and a plain padel bag on the bench, glass wall and green court behind them, relaxed conversation, one person laughing naturally, soft warm light, documentary lifestyle photography, 35mm, f/4, realistic skin texture, natural varied body types, realistic color science, slight film grain, no legible text anywhere, no logos, no brand marks, no sponsor tape, no watermarks
```

**ALT** `Ilustrasi tiga orang beristirahat di bangku samping lapangan dengan tas raket di antara mereka`

**CAPTION** `Ilustrasi area istirahat.`

**CATATAN** Sumber lama adalah grafis dengan teks "PLENTY OF SEATING". Teks itu hilang, jadi kalimat "banyak tempat duduk" sekarang harus diucapkan oleh copy, bukan gambar.

---

## 04.5 Pemain senior melakukan pukulan

```
FILE   : public/CoolingFansAvailable.jpeg
RASIO  : 4:5
PAKAI  : gallery.json "backhand-below-fan"
```

**PROMPT**

```
A fit man in his early sixties with short grey hair and glasses playing a controlled backhand shot on an indoor padel court, wearing an ordinary dark polo and light shorts, balanced comfortable stance, plain unbranded padel racket, a large black industrial wall fan mounted high on the wire mesh above him, glass court wall beside him, soft diffuse light, respectful non-caricatured sports portrait, 50mm, f/4, realistic skin texture, natural ageing skin, realistic color science, slight film grain, no legible text anywhere, no logos, no brand marks, no sponsor tape, no watermarks
```

**ALT** `Ilustrasi pemain berusia enam puluhan melakukan pukulan backhand di lapangan indoor dengan kipas dinding di atasnya`

**CAPTION** `Ilustrasi padel untuk pemula di usia lanjut.`

**CATATAN** Slot paling penting untuk persona Pak Hendra. Jangan buat ia terlihat heroik muda; yang dijual justru "ini cocok untuk usia saya". Wajah menua yang realistis, bukan kulit di-retouch.

---

## 04.6–04.8 Potret tim

```
FILE   : public/team/rizky-pratama.webp
         public/team/dewi-anggraini.webp
         public/team/bayu-kurniawan.webp
RASIO  : 4:5
PAKAI  : team.json (halaman /tentang)
```

**PROMPT (variasikan warna bidang, jangan variasikan gaya)**

```
Studio portrait of a friendly Indonesian [man/woman, age] in a plain dark polo shirt with no logo, warm confident expression, shoulders squared to camera, evenly lit against a solid [deep teal #123B4A / pale chalk #EDF0EB / soft sage #C9D8D8] backdrop, corporate editorial headshot, 85mm, f/5.6, realistic skin texture, natural pores, no retouching, realistic color science, slight film grain, no legible text anywhere, no logos, no brand marks, no watermarks
```

| Berkas | Subjek | Latar |
| --- | --- | --- |
| `rizky-pratama.webp` | pria Indonesia, sekitar 35 tahun | `court` `#123B4A` |
| `dewi-anggraini.webp` | wanita Indonesia, sekitar 32 tahun | `chalk` `#EDF0EB` |
| `bayu-kurniawan.webp` | pria Indonesia, sekitar 40 tahun | `mist` `#C9D8D8` |

**ALT** `Ilustrasi potret [nama], [peran] Padel Nexus`

**CATATAN TEKNIS** Berkas lama berupa potongan berlatar transparan (`.webp` dengan alpha) karena foto aslinya punya kotak-kotak "transparan" tertanam. Untuk aset AI **tidak perlu transparansi** — `Plate` memotong dengan `object-cover` pada rasio 4:5, jadi latar penuh dari generator justru lebih bersih. Simpan sebagai `.webp` biasa tanpa alpha, atau biarkan `.png` dan ganti ekstensi di `team.json`.

## ⚠️ Jangan lanjut tanpa memutuskan ini

Ketiga berkas itu memakai **nama orang nyata** ("Rizky Pratama, Pendiri"; "Dewi Anggraini, Manajer Operasional"; "Bayu Kurniawan, Kepala Pelatih") dan tampil di halaman "Orang di balik lapangan". Potret AI yang menempel pada nama dan jabatan nyata berarti situs menampilkan **orang yang tidak pernah ada** sebagai staf sungguhan.

`team.json` menandai ketiganya `"isDummy": true`, jadi secara teknis terlacak. Tapi pengunjung tidak melihat penanda itu.

Tiga pilihan, urut dari yang paling aman:

1. **Tunda** — hapus `photo` dari `team.json`. `Plate` otomatis kembali ke bingkai berlabel "Foto belum tersedia", dan itu perilaku yang memang dirancang untuk sistem ini.
2. **Ganti strukturnya** — buang nama orang, tampilkan peran saja ("Pendiri", "Manajer Operasional", "Kepala Pelatih") dengan potret berpenanda "Ilustrasi".
3. **Generate dan pakai** — hanya bila owner sudah benar-benar mengonfirmasi bahwa orang-orang itu tidak akan dikenali sebagai staf nyata, dan caption diberi penanda ilustrasi.

Pilihan 1 tidak butuh aset baru dan tidak menyesatkan. Kalau Anda ingin saya kerjakan, tinggal bilang.
