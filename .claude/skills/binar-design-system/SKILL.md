---
name: binar-design-system
description: "Design System Binar untuk Binar Sunnah School (TK & SD Islam, Jakarta Selatan). Pakai setiap kali membuat atau mengubah materi visual Binar Sunnah School: poster/feed/story Instagram, banner, website, slide, brosur, sertifikat, atau komponen UI. Juga dipakai saat diminta mengikuti 'brand Binar', 'design system Binar', '@binarsunnahschool', atau template 'Poster Ujian Tahfidz'. Berisi token warna, tipografi, radius, komponen, aturan kombinasi warna, dan template resmi."
argument-hint: "[jenis materi] [ukuran]"
---

# Design System Binar

Sumber kebenaran lengkap: [`docs/binar-sunnah-school/Design System Binar.md`](../../../docs/binar-sunnah-school/Design%20System%20Binar.md). Baca file itu kalau butuh detail di luar ringkasan ini. Kalau ada yang bertentangan, ikuti file itu.

Dalam urusan warna, font, dan aturan, skill ini **mengalahkan** skill desain umum lain (misalnya `banner-design`). Skill lain boleh dipakai untuk proses kerja, tapi token dan aturannya tetap dari sini.

## Langkah kerja
1. Baca `docs/binar-sunnah-school/Design System Binar.md`, setidaknya bagian 3 (Warna), 4 (Tipografi), 6 (Komponen), 7.1 (Logo pihak ketiga), dan 10 (Template Instagram).
2. Cek apakah sudah ada template resmi di `docs/binar-sunnah-school/templates/`. Kalau ada, **pakai template itu**, jangan membuat dari nol.
3. Pakai token dari `docs/binar-sunnah-school/tokens.css`. Jangan menulis hex lain yang tidak ada di token.
4. Sebelum menyerahkan hasil, render ke PNG dan cek dengan **Checklist** di bawah.

## Token inti

| Token | Nilai | Peran |
|---|---|---|
| `--binar-navy` | `#2A3B8B` | Primer: kartu foto, tombol, badge, teks penting |
| `--binar-amber` | `#F8A012` | Aksen: angka besar, bintang (satu fokus per desain) |
| `--binar-blue` | `#386BB7` | Sekunder: link |
| `--binar-blue-50` | `#E3EAF5` | Panel sekunder: kartu jadwal/info |
| `--ink` / `--text` / `--muted` | `#111111` / `#333333` / `#5D6470` | Teks |
| `--canvas` / `--surface` | `#F0F2F4` / `#FFFFFF` | Latar halaman / kartu |
| `--line` | `#DDE1E7` | Border tag netral |

**Font:**
- **Sora** untuk judul: weight 400, atau 600 untuk display, letter-spacing `-0.03em`.
- **Manrope** untuk isi: weight 400–700, line-height sekitar 1.8.
- Keduanya dari Google Fonts.

**Radius:**
- Kartu web 25px, kartu poster Instagram 1080px **36px**.
- Badge 10px, tombol dan tag pill 9999px.

## Aturan wajib
- 🚫 **Jangan pakai hitam/charcoal dengan amber.** Ini berlaku untuk panel, tombol, badge, overlay foto, dan latar. Kalau butuh warna gelap, pakai **navy**.
- Overlay di atas foto memakai gradien **navy** (`rgba(42,59,139,.92)`), bukan hitam.
- **Satu kuning saja, yaitu amber `#F8A012`.** Jangan pakai kuning lemon atau oranye kedua.
- Angka besar (juz, statistik) **solid amber**, tidak outline.
- Tag ada dua varian:
  - **Netral:** putih, border `--line`, teks `--text`. Untuk kategori.
  - **Highlight:** latar **navy**, teks **putih** weight 600, isi 1–4 kata. Untuk data pendukung hafalan (jumlah halaman/surat, nama surat).
- Amber hanya untuk **satu fokus**, yaitu angka besar. Jangan memberi warna amber pada tag di sekitar angka itu.
- Tombol: pill navy, teks putih, diakhiri chevron `›`.
- Logo Binar: pakai file resmi, jangan diketik ulang atau diwarnai ulang. Di poster, logo sejajar dengan **tepi kartu**, bukan dengan isi kartu.
- Logo platform (YouTube, Instagram, WhatsApp): pakai **file resmi** dengan warna aslinya, jangan digambar ulang dengan CSS. Ikon YouTube ada di `docs/binar-sunnah-school/templates/Poster Ujian Tahfidz/youtube-icon.png`.
- Tidak ada lingkaran atau blob dekoratif di belakang foto santri. Ornamen yang dipakai hanya **bintang empat sudut** dari logo.
- Penulisan: "Binar Sunnah" (dua n), "YouTube", "Jum'at". Sapaan ke orang tua: "Ayah & Bunda", ke anak: "ananda".

## Privasi anak
- **Jangan commit foto santri** ke repo. Folder template sudah punya `.gitignore` untuk `foto*.png` dan `poster*.png`.
- Preview yang di-commit memakai siluet placeholder.
- Jangan menulis nama lengkap santri di file yang di-commit. Pakai "Nama Santri".

## Template resmi

| Template | Folder | Ukuran |
|---|---|---|
| Poster Ujian Tahfidz | `docs/binar-sunnah-school/templates/Poster Ujian Tahfidz/` | 1080×1350 |
| Poster Kajian | `docs/binar-sunnah-school/templates/Poster Kajian/` | 1080×1350 |

**Memilih template:**
- Ujian, setoran, atau prestasi santri (fokus ke foto anak) → **Poster Ujian Tahfidz**.
- Kajian, seminar, atau acara orang tua (fokus ke judul dan pemateri) → **Poster Kajian**. Pada template ini amber hanya dipakai untuk angka tanggal.

**Cara pakai Poster Ujian Tahfidz:**
1. Isi objek `DATA` di file HTML.
2. Taruh `foto.png` (PNG transparan) di folder template.
3. Jalankan `node export.js poster-<nama>.png`.

**Membuat template baru:**
- Turunkan dari struktur Poster Ujian Tahfidz: margin 56px, jarak antar kartu 20px, padding kartu 40px, kanvas `--canvas`.
- Simpan di `docs/binar-sunnah-school/templates/<Nama Template>/` dengan isi `<Nama Template>.html`, `README.md`, `preview.png`, dan `.gitignore` untuk foto.
- Daftarkan di bagian 10.2 `Design System Binar.md`.

## Checklist sebelum selesai
- [ ] Hanya warna dari token. Tidak ada hitam atau charcoal yang bersebelahan dengan amber.
- [ ] Judul Sora dengan tracking negatif, isi Manrope.
- [ ] Radius konsisten (36px kartu poster, pill untuk tombol dan tag).
- [ ] Logo Binar dan logo platform memakai file resmi.
- [ ] Elemen sejajar: logo dan tag header di tepi kartu, isi kartu memakai padding yang sama.
- [ ] Ejaan "Binar Sunnah" benar dan tidak ada sisa teks placeholder.
- [ ] Tidak ada foto anak yang ikut ter-commit.
- [ ] Kalau aturan baru disepakati dengan user, tambahkan ke `Design System Binar.md` **dan** ke skill ini.
