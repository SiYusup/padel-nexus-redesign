# Brief 05 — Ikon, OG-Image, dan Wordmark

3 item. Indeks: [[00-INDEX]] · Gaya global: [[01-panduan-gaya]]

## 05.1 Ikon — jangan digenerate

Ikon di aplikasi bukan aset raster. `src/components/ui/Icon.tsx` mengimpor 26 ikon dari **`lucide-react`** (lisensi ISC), dirender inline sebagai SVG stroke.

Ini sudah benar dan tidak perlu disentuh, karena:

- Vektor, jadi tajam di semua densitas dan tidak menambah beban halaman.
- ISC adalah lisensi terbuka yang **jelas mengizinkan pemakaian komersial** — justru kebalikan dari posisi abu-abu gambar AI.
- Semuanya memakai stroke seragam, sesuai aturan `DESIGN.md`: "Ikon memakai stroke 1.75px, ukuran 18–24px."

Kalau Anda ingin ikon yang lebih spesifik-padel (mis. siluet raket atau denah lapangan), **gambar sebagai SVG tangan**, bukan hasil AI. Alasannya praktis: generator raster tidak menghasilkan vektor bersih, dan ikon AI hampir selalu punya ketebalan stroke tidak konsisten yang menabrak aturan di atas.

Langkah menambah ikon sendiri: tempel SVG di `Icon.tsx`, pastikan `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, `strokeWidth={1.75}`, lalu beri `aria-hidden` bila dekoratif.

**Aset yang perlu dibuat: nol.**

---

## 05.2 Gambar pratinjau berbagi (og-image)

Belum ada `opengraph-image` di repo, jadi tautan situs saat dibagikan tampil tanpa gambar. Ini satu-satunya aset raster baru yang benar-benar belum ada.

```
FILE   : public/og-image.png  (1200×630, rasio 1.91:1)
PAKAI  : src/app/layout.tsx → openGraph.images dan twitter.images
```

**PROMPT**

```
Wide abstract editorial banner for a padel club, a court seen from a low angle, deep teal-blue field with crisp white geometric line markings and a single small orange ball resting on a line, generous calm negative space on the left third for text overlay, matte chalk-white roof structure above, flat graphic-photographic hybrid look, muted premium palette, soft even light, no people, 16:9 composition cropped to 1.91:1, no legible text anywhere, no logos, no brand marks, no watermarks
```

**NEGATIVE** (tambahan dari baku di [[01-panduan-gaya]])

```
text, headline, lettering, logo, brand mark, busy right side, people, faces, lens flare, neon, gradient mesh
```

**Aturan khusus og-image**

- Teks **tidak boleh** dibakar ke dalam gambar. Generate bidang kosong di sepertiga kiri, lalu pasang teks lewat `next/og` (`ImageResponse`) supaya tajam di retina dan mudah diubah tanpa generate ulang.
- Teks yang aman: `Padel Nexus` + `Pusat padel dan gaya hidup sehat di Surabaya`. Jangan taruh angka statistik — data itu masih `isDummy`.
- Uji kontras: `signal` `#D94F2B` di atas `chalk` hanya 3.58:1 — cukup untuk grafis besar, tidak cukup untuk teks kecil. Pakai `signal-deep` `#B23A1C` untuk teks aksen.

**Pemasangan** — perlu mengubah `src/app/layout.tsx`:

```ts
openGraph: {
  images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ilustrasi lapangan padel Padel Nexus" }],
},
```

Alternatif yang lebih baik: buat `src/app/opengraph-image.tsx` dengan `next/og` sehingga teks dirender sebagai teks, bukan piksel.

---

## 05.3 Wordmark — jangan digenerate juga

Wordmark `padelNexus` sudah ada sebagai komponen: `src/components/ui/Wordmark.tsx` (teks) dan `src/app/icon.svg` (vektor). `Logo.jpg` 150×150 di `public/` tidak dirujuk di mana pun dan terlalu kecil untuk apa pun.

Generate logo AI adalah ide buruk di sini karena:

- Logo harus vektor dan bisa dikecilkan ke favicon 16px.
- Wordmark saat ini dibangun dari font yang sama dengan situs (Archivo), jadi konsisten gratis.
- Logo AI tidak bisa dilindungi hak ciptanya **dan** berisiko menyerupai markah yang sudah terdaftar — risiko terburuk dari kedua arah.

**Aset yang perlu dibuat: nol.** Kalau owner akhirnya mengirim logo resmi, taruh sebagai `public/logo.svg` dan pakai di `Wordmark.tsx`, bukan hasil generate.

## Ringkasan berkas ini

| Item | Perlu generate? | Alasan |
| --- | --- | --- |
| Ikon | Tidak | Sudah SVG dari lucide-react, lisensi ISC jelas |
| `og-image` | **Ya** | Belum ada; satu-satunya aset baru di berkas ini |
| Wordmark | Tidak | Sudah komponen; logo AI tidak dapat dilindungi |
