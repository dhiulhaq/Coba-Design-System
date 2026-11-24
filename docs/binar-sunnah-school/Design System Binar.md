# Design System Binar

Design system untuk **Binar Sunnah School**, sekolah TK dan SD Islam berbasis Al-Qur'an dan As-Sunnah di Petukangan Selatan, Jakarta Selatan. Instagram: [@binarsunnahschool](https://www.instagram.com/binarsunnahschool).

> **Sumber data.** Isi dokumen ini diambil dari website resmi [binarsunnah.org](https://binarsunnah.org) pada 24 November 2026: HTML, CSS, file logo, ikon, dan foto. Warna logo diambil langsung dari piksel PNG resminya. Feed Instagram belum bisa diakses saat analisis, jadi pola grid dan caption Instagram belum terverifikasi.
>
> Setiap bagian membedakan dua hal:
> - **Kondisi saat ini**: apa yang benar-benar dipakai sekarang.
> - **Usulan**: rekomendasi supaya brand lebih konsisten.
>
> Versi visualnya ada di [`brand-audit.html`](./brand-audit.html).

---

## 1. Profil brand

| | |
|---|---|
| Nama | Binar Sunnah School |
| Jenjang | PAUD, TK, SD Islam (ada juga program persiapan TK, Klub Bahasa Arab, Komunitas Life Skill) |
| Manhaj | Ahlus Sunnah wal Jama'ah (Salafus Shalih) |
| Sejarah | Berawal dari majelis taklim sejak 1990 |
| Bahasa | Indonesia, Arab, Inggris |
| Audiens utama | Orang tua ("Ayah & Bunda") |
| Tagline web | "Menuntun Langkah Menuju Cahaya Ilmu dan Ketakwaan" |
| Pesan inti | Beriman, berilmu, berakhlak mulia |

**Makna nama:** "Binar" berarti cahaya atau sinar. Simbol bintang di logo dan frasa "cahaya ilmu" di tagline berasal dari makna ini.

---

## 2. Logo

### Anatomi
| Elemen | Deskripsi |
|---|---|
| Monogram | Huruf **B** navy berbentuk punggung buku, dengan pita pembatas amber di bagian bawah |
| Bintang | Bintang empat sudut berwarna amber di dalam huruf B, sebagai simbol cahaya ilmu |
| Wordmark | Sans geometris bold, kapital semua, ditumpuk 3 baris rata kiri: **BINAR / SUNNAH** amber, **SCHOOL** navy |

### Varian yang tersedia
| Varian | File di website | Pemakaian |
|---|---|---|
| Logo utama (navy + amber) | `Logo-Binar-Blue-Yellow-512.png`, `logo-binar-sunnah-school-blue-yellow-web-300/350.png` | Latar terang |
| Logo putih | `binar-logo-white-transparent-2.png` | Latar navy, charcoal, atau foto |
| Ikon / monogram | `logo-icon-binar-school.png`, `cropped-Logo-Icon-Binar-Blue-Yellow-512-*.png` | Favicon, avatar, watermark |

### Aturan pakai (usulan)
- Area kosong di sekeliling logo minimal setinggi bintangnya.
- Lebar minimum logo lengkap 96px (digital); di bawah itu, pakai monogram saja.
- Di atas foto, pakai logo putih dengan overlay gelap di belakangnya.
- **Jangan**: mengganti warna wordmark, memberi efek bayangan atau gradien pada logo, memutar logo, atau menaruh logo utama di atas latar amber.

---

## 3. Warna

### 3.1 Palet logo (identitas inti)
| Token | Hex | Peran |
|---|---|---|
| Binar Navy | `#2A3B8B` | Monogram, "SCHOOL" |
| Binar Amber | `#F8A012` | Bintang, pita, "BINAR SUNNAH" |

### 3.2 Palet website saat ini (dari CSS tema)
| Nama | Hex | Frekuensi di HTML | Pemakaian |
|---|---|---|---|
| Coral | `#F14F44` | 42× | Badge tanggal, nomor telepon, range |
| Merah | `#E24C4A` | 32× | Teks "Tarbiyah", bar jam operasional, ujung gradien |
| Biru tema | `#386BB7` | 20× | Ujung gradien |
| Charcoal | `#1F1F1F` | 13× | Panel gelap, footer |
| Teks | `#333333` / `#111111` | 53× / 8× | Body / heading |
| Kanvas | `#F0F2F4` | 7× | Latar halaman |
| Abu muda | `#F5F5F5` | 32× | Teks di panel gelap, latar sekunder |
| Abu garis | `#ADADAD` | 14× | Border input, teks sekunder |
| Putih | `#FFFFFF` | 52× | Kartu |

**Gradien saat ini:** `linear-gradient(262deg, #E24C4A 14.51%, #386BB7 95.96%)`. Dipakai untuk border tombol, teks khusus, dan angka statistik.

> ⚠️ **Masalah utama:** palet website (merah/biru) tidak berasal dari logo (navy/amber). Keduanya tampil bersamaan, sehingga brand terasa seperti template yang hanya diberi logo.

### 3.3 Palet yang diusulkan
| Token | Hex | Peran |
|---|---|---|
| `--binar-navy` | `#2A3B8B` | **Primer**: judul penting, tombol solid, latar post |
| `--binar-amber` | `#F8A012` | **Aksen**: bintang, highlight, angka statistik |
| `--binar-blue` | `#386BB7` | **Sekunder**: link, ujung gradien |
| `--ink` | `#111111` | Heading |
| `--text` | `#333333` | Body |
| `--muted` | `#5D6470` | Teks sekunder |
| `--canvas` | `#F0F2F4` | Latar halaman |
| `--surface` | `#FFFFFF` | Kartu |
| `--panel-dark` | `#1F1F1F` | Panel gelap, footer |
| `--alert` | `#E24C4A` | Semantik: tanggal event, info penting (pakai hemat) |

**Gradien baru (usulan):** `linear-gradient(262deg, #F8A012 0%, #386BB7 55%, #2A3B8B 100%)`

**Proporsi (usulan):** 60% netral (kanvas dan putih), 25% navy, 10% amber, 5% lainnya.

**Kontras:**
- Teks putih di atas navy dan teks `#111` di atas amber aman untuk body text.
- Hindari teks amber di atas putih untuk body text karena kontrasnya rendah. Amber hanya untuk judul besar atau elemen dekoratif.

---

## 4. Tipografi

| Peran | Font | Sumber |
|---|---|---|
| Display / heading | **Sora** | Google Fonts |
| Body / UI | **Manrope** | Google Fonts |

Tema juga memuat Roboto, Roboto Slab, Inter, dan Cardo yang tidak terlihat dipakai. **Usulan:** hapus keempatnya.

### Skala (terukur dari website, desktop)
| Level | Font | Weight | Size / Line-height | Letter-spacing | Contoh |
|---|---|---|---|---|---|
| H1 / Display | Sora | 600 | 120px / 100px | -3.6px (-3%) | "Sekolah Islam Berbasis Quran & Sunnah" |
| H2 | Sora | 400 | 45px / 52px | -1.35px (-3%) | "Menuntun Langkah Menuju Cahaya Ilmu…" |
| H3 | Sora | 400 | 40px / 35px | -1.2px | — |
| H4 / judul kartu | Sora | 400 | 30px / 35px | -0.9px | "Program Sekolah Dasar Islam Terpadu" |
| Body | Manrope | 400 | 16px / ~1.85 | normal | Paragraf |
| Button | Manrope | 500 | 14px | normal | "› Temukan lebih detail" |
| Tag / label | Manrope | 500 | 11–12px | normal | "100 Doa Harian" |

### Aturan
- Heading selalu memakai tracking negatif sekitar -3%. Ini kunci kesan modern dan padat.
- Heading umumnya Sora weight 400. Weight 600 hanya untuk display paling besar.
- Body diberi line-height longgar (1.8–1.9) supaya mudah dibaca orang tua.
- Teks Arab (doa, ayat, nama lomba) diberi ruang yang cukup. **Usulan:** pasangkan dengan font Arab seperti *Noto Naskh Arabic* atau *Amiri*.
- Wordmark logo memakai font yang berbeda dari Sora. Jangan mengetik ulang logo; selalu pakai file logonya.

### Skala untuk Instagram (usulan, kanvas 1080×1350)
| Level | Font | Size |
|---|---|---|
| Judul post | Sora 600 | 96–120px, tracking -3% |
| Subjudul | Sora 400 | 48–56px |
| Body slide | Manrope 500 | 32–36px |
| Label / eyebrow | Manrope 600 | 24px, kapital, tracking +4% |

---

## 5. Bentuk, radius, dan layout

### Radius (frekuensi di CSS)
| Token | Nilai | Frekuensi | Pemakaian |
|---|---|---|---|
| `--radius-xs` | 3–5px | 52× (5px) | Badge tanggal |
| `--radius-sm` | 10px | 20× | Thumbnail, input |
| `--radius-card` | **25px** | **110×** | Kartu, panel, hero (ciri utama) |
| `--radius-pill` | 9999px | 31× | Tombol, tag |
| `--radius-round` | 50% | 84× | Tombol ikon bulat |

### Pola layout website
- Kanvas abu muda `#F0F2F4`. Semua konten disusun sebagai **kartu** putih atau charcoal dengan radius 25px.
- Hero berupa dua kolom: foto besar dengan judul putih raksasa di atasnya, ditambah kartu teks putih dan kartu kontak charcoal.
- Banyak ruang kosong di antara section; teks kecil diletakkan di samping ikon atau visual yang besar.
- Kata tunggal raksasa sebagai aksen tipografi, misalnya "**Tarbiyah**" merah di samping foto kubah hijau.
- Garis vertikal tipis di latar sebagai grid dekoratif.

---

## 6. Komponen

### 6.1 Tombol
| Varian | Spesifikasi |
|---|---|
| **Outline gradien** (utama di web) | Pill, latar transparan/putih, border 1px gradien, teks Manrope 500 14px, diawali chevron `›` |
| **Solid navy** | Pill, latar `#2A3B8B`, teks putih, chevron `›` (contoh: "Temukan lebih detail") |
| **Ikon bulat** | Lingkaran 40px, latar charcoal, ikon `›` putih |
| **Slider** | Dua chevron `‹ ›` dalam satu pill outline |

Pola label: kata kerja ajakan, misalnya "Temukan program kami", "Unduh PDF", "Lihat lebih banyak", "Berlangganan".

### 6.2 Tag / chip
Pill outline tipis, teks 11–12px. Isinya **target konkret** program, misalnya `100 Doa Harian` · `50 Hadits` · `Target Juz 30` · `25 Hadits` · `Target 15 Surat Pendek`. Di kartu event, tag dipakai untuk kategori, misalnya `akhlak` · `tarbiyah` · `kompetisi`.

### 6.3 Statistik
Angka besar Sora Light berupa **outline** dengan gradien, dan tanda `+` berwarna merah. Label di bawahnya: "Lulusan TK", "Terima di Ponpes Sunnah", "Ayah & Bunda bahagia", "Lomba & kompetisi".
> ⚠️ Saat ini semua counter menampilkan "0+". Isi dengan angka asli.

### 6.4 Kartu
| Jenis | Isi |
|---|---|
| Kartu program | Gambar di atas, tag target hafalan, judul Sora, tombol bulat `›` |
| Kartu layanan | Ikon ilustrasi di kiri, judul H4 di kanan, paragraf, garis pemisah bawah |
| Kartu biaya | Latar abu atau biru muda, judul "Unduh biaya TK/SD", ikon, daftar poin, tombol "Unduh PDF" |
| Kartu prestasi | Panel charcoal, foto, judul putih (boleh bercampur teks Arab) |
| Kartu event | Latar gelap, tag kategori, **badge tanggal** coral (`Jul / 24` + angka besar `30`) |
| Kartu testimoni | Putih, border tipis, nama di atas, huruf pertama dibuat besar (drop cap), disusun masonry |

### 6.5 Bar info
Bar merah "Senin – Kamis 7:30 – 11:00 | Jum'at 7:30 – 10:00" berdampingan dengan bar charcoal "Segera hubungi kami".

---

## 7. Ikonografi

- **Gaya:** filled-outline, yaitu garis hitam tebal dengan isian warna flat dan sudut membulat.
- **Karakter:** ceria dan ramah anak, dengan detail lucu (misalnya tangan dengan wajah tersenyum untuk TK).
- **Set saat ini:** tangan warna-warni (PAUD/TK), gedung sekolah (SD), mushaf di atas rehal dengan tulisan "اقرأ" (Klub Bahasa Arab), orang dengan roda gigi (Life Skill).
- ⚠️ Warna isiannya (hijau, pink, kuning, cokelat) di luar palet brand.
- **Usulan:** pertahankan gaya garisnya, tapi batasi isian ke navy, amber, biru muda, dan satu netral hangat. Bintang empat sudut dari logo bisa dipakai sebagai ornamen.

---

## 8. Fotografi

### Kondisi saat ini
- Close-up anak dengan depth of field dangkal dan cahaya hangat keemasan; tone cokelat dan krem.
- Setting: masjid, karpet sajadah, mushaf di atas rehal, kelas.
- Subjek: anak laki-laki berpeci atau baju koko, anak perempuan berjilbab, dengan ekspresi tersenyum.
- ⚠️ Sebagian besar foto tampak hasil AI atau foto stok. Hanya foto hero (anak berseragam merah) yang terlihat seperti dokumentasi asli.

### Arahan (usulan)
- Utamakan **dokumentasi kegiatan asli**: halaqah, setoran hafalan, mabit, lomba, wisuda.
- Satu grading warna yang konsisten: hangat, highlight sedikit keemasan, kontras lembut.
- Ambil gambar sejajar mata anak dan fokus pada tangan, mushaf, dan ekspresi.
- Perhatikan adab dan privasi:
  - Hindari wajah anak perempuan dalam close-up kalau kebijakan sekolah melarangnya.
  - Minta izin orang tua.
  - Jangan tampilkan nama lengkap anak.
- Teks di atas foto selalu diberi overlay gradien gelap dari bawah.

---

## 9. Bahasa dan konten

### Nada
Hangat, lembut, religius, dan meyakinkan. Ditulis untuk orang tua dengan sapaan **"Ayah & Bunda"** dan **"ananda"**.

### Kosakata khas
`Tarbiyah` · `Adab` · `Akhlak` · `Tauhid` · `Fitrah anak` · `Ustadzah` · `Hafalan` · `Salafus Shalih` · `Cahaya ilmu` · `Generasi Qur'ani` · `Ridha Allah`

### Pilar konten
1. **Program dan target hafalan.** Angka konkret seperti Juz 30, 100 doa harian, dan 50 hadits adalah pembeda terkuat sekolah.
2. **Event dan prestasi.** Mabit Mini (Malam Bina Iman dan Taqwa), Lomba Cerdas Cermat Islam (LCCI), Festival Anak Shalih, Binar Qur'ani Fair, Islamic Knowledge Olympiad.
3. **Testimoni orang tua.** Cerita perubahan anak, misalnya dari yang dulu menangis saat masuk sekolah menjadi hafal surat, berani, dan beradab.
4. **Pendaftaran (SPMB).** Biaya, alur pendaftaran, dan kontak.

### Aturan penulisan
- Tulis shalawat dan pujian sesuai kebiasaan sekolah: ﷺ setelah nama Nabi, ﷻ setelah nama Allah.
- Kalimat pendek dan aktif, dengan ajakan yang jelas di akhir.
- Teks Arab ditulis dengan harakat untuk doa dan ayat.

---

## 10. Template Instagram (usulan)

Kanvas feed: **1080×1350 (4:5)**. Story: 1080×1920.

| Template | Latar | Isi |
|---|---|---|
| **Program / target** | Navy solid | Eyebrow program, judul besar Sora, tag target hafalan, monogram di pojok |
| **Foto kegiatan** | Foto + overlay gelap bawah | Eyebrow kategori, judul putih, logo putih kecil |
| **Pengumuman / SPMB** | Amber solid | Judul `#111`, tombol pill navy "Daftar sekarang" |
| **Event** | Charcoal | Badge tanggal, judul, tag kategori, lokasi |
| **Testimoni** | Putih / kanvas | Kutipan Sora 400, nama orang tua, drop cap |
| **Doa / hadits harian** | Navy + bintang amber | Teks Arab besar, terjemahan Manrope, sumber |

**Pola grid:** selang-seling kartu warna solid dan foto (checkerboard) supaya feed rapi dan mudah dikenali.

**Penanda brand:** bintang empat sudut dari monogram selalu ada di pojok kanan bawah.

---

## 11. Audit: yang perlu dirapikan

| Prioritas | Temuan | Rekomendasi |
|---|---|---|
| 🔴 Tinggi | Warna logo (navy/amber) tidak sama dengan warna website (merah/biru) | Ganti gradien dan aksen dengan palet usulan di bagian 3.3 |
| 🔴 Tinggi | Foto AI atau stok yang generik | Ganti dengan dokumentasi asli yang diberi grading seragam |
| 🟠 Sedang | Placeholder belum diisi: counter "0+", kartu program tanpa gambar, alamat New York di halaman blog | Isi data asli |
| 🟠 Sedang | Warna ikon di luar palet | Warnai ulang dengan palet brand |
| 🔵 Rendah | 6 keluarga font dimuat, hanya 2 yang dipakai | Hapus Roboto, Roboto Slab, Inter, dan Cardo |

---

## 12. Design tokens

### CSS
```css
:root {
  /* Brand */
  --binar-navy: #2A3B8B;
  --binar-amber: #F8A012;
  --binar-blue: #386BB7;
  --binar-gradient: linear-gradient(262deg, #F8A012 0%, #386BB7 55%, #2A3B8B 100%);

  /* Netral */
  --ink: #111111;
  --text: #333333;
  --muted: #5D6470;
  --line: #DDE1E7;
  --canvas: #F0F2F4;
  --surface: #FFFFFF;
  --panel-dark: #1F1F1F;

  /* Semantik */
  --alert: #E24C4A;

  /* Tipografi */
  --font-display: "Sora", Arial, Helvetica, sans-serif;
  --font-body: "Manrope", Arial, Helvetica, sans-serif;
  --tracking-display: -0.03em;
  --leading-body: 1.85;

  --fs-display: 120px;
  --fs-h2: 45px;
  --fs-h3: 40px;
  --fs-h4: 30px;
  --fs-body: 16px;
  --fs-button: 14px;
  --fs-tag: 12px;

  /* Bentuk */
  --radius-xs: 5px;
  --radius-sm: 10px;
  --radius-card: 25px;
  --radius-pill: 9999px;
}
```

### JSON
```json
{
  "color": {
    "brand": { "navy": "#2A3B8B", "amber": "#F8A012", "blue": "#386BB7" },
    "neutral": {
      "ink": "#111111", "text": "#333333", "muted": "#5D6470", "line": "#DDE1E7",
      "canvas": "#F0F2F4", "surface": "#FFFFFF", "panelDark": "#1F1F1F"
    },
    "semantic": { "alert": "#E24C4A" }
  },
  "font": {
    "display": "Sora",
    "body": "Manrope"
  },
  "fontSize": {
    "display": 120, "h2": 45, "h3": 40, "h4": 30, "body": 16, "button": 14, "tag": 12
  },
  "radius": { "xs": 5, "sm": 10, "card": 25, "pill": 9999 }
}
```

### Legacy (warna tema website saat ini, untuk referensi migrasi)
```css
--legacy-coral: #F14F44;
--legacy-red: #E24C4A;
--legacy-blue: #386BB7;
--legacy-gradient: linear-gradient(262deg, #E24C4A 14.51%, #386BB7 95.96%);
```

---

*Disusun dari analisis binarsunnah.org, 24 November 2026. Kirim screenshot feed @binarsunnahschool untuk melengkapi bagian Instagram.*
