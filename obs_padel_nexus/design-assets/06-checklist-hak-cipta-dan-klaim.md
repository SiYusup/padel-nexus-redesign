# Checklist Hak Cipta, Merek, dan Klaim

Indeks: [[00-INDEX]] · Dipakai di semua brief: [[01-panduan-gaya]]

Berkas ini ada supaya keputusan "pakai aset AI saja" berdiri di atas dasar yang benar, bukan asumsi. Saya bukan lawyer, dan posisi hukum untuk gambar AI masih bergerak — jadi bagian akhir menyarankan pemeriksaan khusus untuk keputusan komersial.

## 1. Asumsi "AI tidak punya hak cipta jadi aman" hanya benar satu arah

Hak cipta bekerja dua arah, dan aset Anda menyentuh keduanya.

**Arah keluar — apakah Anda bisa melindungi asetnya.** Di beberapa yurisdiksi, gambar yang murni dihasilkan mesin tanpa kontribusi kreatif manusia yang berarti **tidak dapat didaftarkan**, sehingga orang lain bebas memakainya ulang. Konsekuensinya bukan hukum, tapi bisnis: Anda tidak punya pegangan kalau kompetitor mengambil banner Anda.

**Arah masuk — apakah asetnya melanggar hak orang lain.** Model image generator dilatih dari materi yang sebagian besar berhak cipta, dan keluarannya bisa menyerupai karya atau merek yang sudah ada. "Tidak ada hak cipta atas output saya" **tidak** berarti "output saya tidak menyentuh hak orang lain". Dua pertanyaan ini sering tercampur, dan yang kedua justru yang berisiko untuk situs komersial.

Jadi: beralih ke AI **mengurangi** satu risiko nyata (foto orang lain, aset agensi, watermark pihak ketiga) dan **memindahkan** risikonya ke tempat lain (kemiripan keluaran, ketidakpastian hukum). Bukan menghilangkan.

## 2. Risiko terbesar di aset lama bukan fotonya — ini markahnya

Foto venue itu sendiri hampir pasti milik/atas nama Padel Nexus (watermark `padelNexus` adalah merek mereka sendiri). Yang bermasalah adalah **merek pihak ketiga yang ikut terlihat di dalam foto**:

| Markah terlihat di | Berkas | Jenis |
| --- | --- | --- |
| `mejor set`, `Premium Padel Courts` | `quote.jpg`, `playing_padel.jpg`, `PadelField.jpeg`, `knee_footh.jpg`, `woman_kne.jpg` | merek + produk pemasang lapangan |
| `NOX`, nama model `X-ONE`, `X-HERO`, `FENIX`, `TRILOGY` | `PadelField2.jpeg`, `PadelRacket.jpg`, `knee_footh.jpg` | merek raket |
| `Premier Padel`, `International Padel Federation` | `playing_padel.jpg`, `PadelField.jpeg` | merek penyelenggara + emblem |
| `Nuova Simonelli` | `Cup.jpeg` | merek perkakas |
| `KRIS`, `Samsung` | `AirConditionedCooler.jpeg`, `CupAndEspressoMachine.jpeg` | merek perkakas |

`TASK.md` sudah lama mencatat ini sebagai item terbuka ("hak pakai watermark mejor set / Premier Padel pada foto"). **Inilah yang benar-benar diselesaikan oleh aset AI** — bukan soal hak cipta atas fotonya, tapi soal menampilkan merek orang lain di materi promosi Anda tanpa izin. Karena itu larangan markah di [[01-panduan-gaya]] bukan formalitas, dan gerbang mutu nomor 1 ada di sana.

Catatan penting: menghilangkan merek dari foto juga **menghilangkan bukti** bahwa lapangan Anda dipasang oleh vendor premium itu. Kalau justru itu nilai jual yang ingin ditonjolkan, jalur yang benar adalah izin pemakaian dari vendor, bukan penghapusan. Putuskan ini sebelum generate.

## 3. Yang tidak boleh muncul di aset AI mana pun

Tolak hasil generate bila memuat salah satu ini:

- Teks, angka, atau huruf yang terbaca — termasuk label loker, nama model raket, panel kontrol, tulisan di pita net, logo di sepatu.
- Merek atau emblem pihak ketiga, termasuk yang mirip-mirip (`NOX` → `NOX-ish`).
- Wajah yang menyerupai orang nyata yang bisa dikenali.
- Bendera, lambang negara, seragam bertulis.
- Watermark atau hashtag yang ditiru dari aset lama (`padelNexus`, `#TheBestCourt`).
- Komposisi yang sangat mirip foto lama — kalau keluaran terasa "sama persis tapi bersih", itu tanda model menyalin, bukan menginterpretasi.

## 4. Masalah kedua: foto sintetis untuk venue nyata

Ini bukan isu hukum, isu kejujuran ke pengunjung. Situs Anda memberitahu orang di mana harus datang dan apa yang akan mereka dapat. Kalau foto loker, lounge, atau lapangan digenerate dan bangunan aslinya berbeda, pengunjung yang datang berdasarkan gambar itu sedang dijebak.

Sistem desain sudah punya mekanisme untuk ini — `Plate` menampilkan bingkai berlabel "Foto belum tersedia" untuk slot kosong, dan itu perilaku yang sah. Karena itu, kalau memakai aset sintetis, **beri penanda**.

Aturan yang saya terapkan di semua brief:

- `alt` selalu diawali `Ilustrasi …`
- `caption` di bawah bingkai menyebut "Ilustrasi" dan, untuk venue, "bukan foto dokumentasi venue"
- Jangan pakai aset sintetis untuk klaim spesifik: jumlah lapangan, kondisi bangunan nyata, merek peralatan, hasil olahraga

Ini juga jawaban untuk slot tim di [[04-brief-manusia-pemain-dan-tim]] — potret AI yang menempel pada nama dan jabatan nyata adalah bentuk penyesatan yang paling berisiko di daftar ini.

## 5. Perubahan `DESIGN.md` yang perlu disetujui

Larangan saat ini bertabrakan langsung dengan rencana Anda. Dua baris:

- Baris 313 (komponen Plate): `Jangan memakai foto stok atau gambar lama sebagai pengganti slot foto.`
- Baris 412 (Do's and Don'ts): `Jangan memakai foto stok, ilustrasi AI, atau gambar lama sebagai pengganti slot foto.`

Rumusan pengganti yang saya sarankan:

```
- Jangan memakai foto stok, foto pihak lain tanpa izin, atau gambar lama sebagai pengganti slot foto.
- Aset sintetis (hasil generate) boleh dipakai untuk suasana dan ilustrasi, dengan syarat: diberi penanda "Ilustrasi" di alt dan caption, tidak menampilkan merek atau emblem pihak ketiga, tidak menggambarkan orang nyata, dan tidak dipakai sebagai bukti klaim spesifik (jumlah lapangan, merek peralatan, hasil kesehatan).
- Slot yang belum punya bukti visual tetap memakai bingkai "Foto belum tersedia". Itu perilaku yang benar, bukan kegagalan.
```

Bilang saja kalau Anda mau saya terapkan.

## 6. Jejak yang sebaiknya Anda simpan

Kalau keputusan ini untuk klien (CV Smart Global Nusantara → Padel Nexus), simpan di `obs_padel_nexus/design-assets/provenance/` satu baris per aset:

| Berkas | Generator + versi | Tanggal | Prompt (atau nomor brief) | Diedit lanjut? | Disetujui owner |
| --- | --- | --- | --- | --- | --- |
| `PadelField.jpeg` | … | … | [[02-brief-lapangan-dan-arsitektur]] 02.1 | tidak | ☐ |

Alasannya praktis, bukan hukum: kalau nanti ada keberatan, Anda bisa menunjukkan aset mana dibuat kapan dan dengan instruksi apa. Tanpa catatan ini, 24 aset akan sulit dibedakan satu per satu di kemudian hari.

## 7. Checklist sebelum rilis

- [ ] Tidak ada satu pun aset yang memuat teks atau markah terbaca (gerbang mutu 1).
- [ ] Garis lapangan benar padel, bukan tenis (gerbang mutu 3).
- [ ] Setiap `alt` dan `caption` aset sintetis menyebut "Ilustrasi".
- [ ] Tidak ada potret AI yang menempel pada nama staf nyata, atau slot tim ditunda.
- [ ] Tidak ada klaim baru yang muncul hanya karena gambarnya meyakinkan (harga, "gratis", jumlah lapangan, jam buka).
- [ ] `openingHours`, `email`, `socials`, `coordinates` di `src/lib/site.ts` masih `null` → jangan diisi karangan.
- [ ] Data `isDummy` di `src/content/data/*.json` sudah diganti atau slotnya dikosongkan.
- [ ] `DESIGN.md` sudah diamandemen (bagian 5) supaya sistem desain tidak menyalahi dirinya sendiri.
- [ ] Catatan provenance terisi untuk semua aset yang dipakai.
- [ ] `npm run lint && npm run typecheck && NEXT_DIST_DIR=.next-verify npm run build` bersih.
- [ ] Dicek visual: mode gelap, lebar 360px, `prefers-reduced-motion`.

## 8. Batas dokumen ini

Yang saya tulis di atas adalah pembacaan teknis atas isi repo dan praktik yang lazim, bukan nasihat hukum. Posisi hukum gambar AI berbeda antar negara dan masih berubah — termasuk seberapa besar kontribusi manusia diperlukan, dan bagaimana tanggung jawab atas kemiripan dengan karya berhak cipta dialokasikan. Untuk keputusan mempublikasikan aset sintetis bagi usaha yang berjalan, mintakan peninjauan pada orang yang menangani aspek hukum proyek ini, dan pastikan **owner Padel Nexus menyetujui secara tertulis** bahwa materinya bukan dokumentasi asli.

Dua hal yang sudah pasti dan tidak perlu peninjauan hukum untuk Anda tindak: **jangan tampilkan merek pihak ketiga tanpa izin**, dan **jangan menyamarkan ilustrasi sebagai foto nyata**. Keduanya bisa Anda kendalikan penuh hari ini.
