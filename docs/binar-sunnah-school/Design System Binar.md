# Design System Binar

Design system untuk **Binar Sunnah School**, sekolah TK dan SD Islam berbasis Al-Qur'an dan As-Sunnah di Petukangan Selatan, Jakarta Selatan. Instagram: [@binarsunnahschool](https://www.instagram.com/binarsunnahschool).

> **Sumber data.** Isi dokumen ini diambil dari website resmi [binarsunnah.org](https://binarsunnah.org) pada 24 November 2026: HTML, CSS, file logo, ikon, dan foto. Warna logo diambil langsung dari piksel PNG resminya. Untuk Instagram, referensinya satu poster feed (Ujian Tahfidz Juz 30) yang dikirim tim. Pola grid dan caption feed secara keseluruhan belum terverifikasi.
>
> Setiap bagian membedakan dua hal:
> - **Kondisi saat ini**: apa yang benar-benar dipakai sekarang.
> - **Usulan**: rekomendasi supaya brand lebih konsisten.
>
> Versi visualnya ada di [`brand-audit.html`](./brand-audit.html).

---

## Dipakai bersama Claude Code

Design system ini terhubung ke Claude Code lewat tiga file:

| File | Fungsi |
|---|---|
| `.claude/skills/binar-design-system/SKILL.md` | Skill yang dimuat otomatis saat mengerjakan materi Binar. Berisi token, aturan wajib, dan checklist. |
| `CLAUDE.md` (root repo) | Instruksi proyek: semua pekerjaan Binar wajib memakai skill di atas. |
| `tokens.css` | Token CSS siap pakai untuk template dan halaman baru. |

Setiap aturan baru yang disepakati dicatat di dokumen ini **dan** di `SKILL.md`.

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
| `--binar-amber` | `#F8A012` | **Aksen**: bintang, angka besar (juz, statistik) |
| `--binar-blue` | `#386BB7` | **Sekunder**: link, ujung gradien |
| `--binar-blue-50` | `#E3EAF5` | **Panel sekunder**: kartu jadwal/info, latar tag. Tint 14% dari `--binar-blue` |
| `--ink` | `#111111` | Heading |
| `--text` | `#333333` | Body |
| `--muted` | `#5D6470` | Teks sekunder |
| `--canvas` | `#F0F2F4` | Latar halaman |
| `--surface` | `#FFFFFF` | Kartu |
| `--panel-dark` | `#1F1F1F` | Hanya footer website. **Bukan** untuk panel konten atau poster |
| `--alert` | `#E24C4A` | Semantik: tanggal event, info penting (pakai hemat) |

**Catatan `--binar-blue-50`:**
- Website sudah memakai kartu biru muda `#F1F7FC` (kartu "Unduh biaya SD"). Warna itu terlalu pucat di atas kanvas `#F0F2F4`, jadi untuk Instagram dan panel di atas kanvas dipakai `#E3EAF5`. `#F1F7FC` hanya untuk kartu di atas latar putih.
- Kontras teks navy di atas `--binar-blue-50` sekitar 8:1, jadi aman.

**Gradien baru (usulan):** `linear-gradient(262deg, #F8A012 0%, #386BB7 55%, #2A3B8B 100%)`

**Proporsi (usulan):** 60% netral (kanvas dan putih), 25% navy, 10% amber, 5% lainnya.

**Kontras:**
- Teks putih di atas navy dan teks `#111` di atas amber aman untuk body text.
- Hindari teks amber di atas putih untuk body text karena kontrasnya rendah. Amber hanya untuk judul besar atau elemen dekoratif.

### 3.4 Aturan kombinasi warna

> 🚫 **Jangan pakai hitam/charcoal dengan amber.**
> Hitam (`#000`–`#333`) atau charcoal `#1F1F1F` yang dipasangkan dengan amber atau oranye menimbulkan asosiasi yang tidak pantas untuk sekolah Islam anak-anak. Ini berlaku untuk:
> - panel
> - tombol
> - badge
> - overlay foto
> - latar poster

| ✅ Pakai | 🚫 Hindari |
|---|---|
| Navy + amber (kombinasi utama brand) | Hitam/charcoal + amber/oranye |
| `--binar-blue-50` + navy (panel sekunder) | Panel charcoal untuk jadwal/info |
| Putih + navy + aksen amber | Overlay foto hitam di bawah amber |
| Overlay foto gradien **navy** | Overlay foto gradien hitam |

Kalau butuh panel yang "gelap", pakai **navy**, bukan charcoal.

Aturan lain:
- Satu kuning saja, yaitu amber `#F8A012`. Jangan campur dengan kuning lemon (`#F9E82A`) atau kuning lain.
- Hindari merah/coral bersebelahan langsung dengan amber dalam ukuran besar.

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

**Dua varian:**

| Varian | Spesifikasi | Pemakaian |
|---|---|---|
| **Netral** | Pill putih, border `--line` 1.5px, teks `--text` Manrope 500 | Kategori, label umum (misalnya "Tahfidz", "SD Islam") |
| **Highlight** | Pill `--binar-navy`, teks **putih** Manrope 600 | Data pendukung yang ingin ditonjolkan: jumlah halaman, jumlah surat, nama surat |

**Teks di dalam pill harus *middle* (tengah vertikal).** Font Manrope punya ruang atas dan bawah yang tidak sama, jadi padding biasa membuat teks tampak turun. Semua pill (tag, kategori, tombol) memakai:

```css
padding: 15px 20px;                    /* untuk teks 22px */
text-box: trim-both cap alphabetic;    /* teks dipusatkan dari tinggi huruf kapital */
```

Kalau pill berisi ikon atau titik (flex), terapkan `text-box` juga ke elemen teksnya (`.tag > span`).

**Aturan tag highlight:**
- **Amber hanya untuk satu fokus**, yaitu angka besar (juz, statistik). Tag di sekitarnya memakai **navy**, supaya angka tetap jadi pusat perhatian dan tag terbaca sebagai info pendukung.
- Kontras putih di atas navy sekitar 10:1, jadi aman untuk ukuran apa pun.
- Isinya tetap label pendek (1–4 kata).

*Riwayat: tag highlight sempat memakai amber dengan teks putih. Diganti ke navy karena pill amber menyatu dengan angka juz dan kontrasnya rendah (2.1:1).*

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

> Kartu prestasi, kartu event, dan bar kontak di website saat ini memakai charcoal. Untuk materi baru, ganti dengan **navy** atau **`--binar-blue-50`** sesuai aturan di bagian 3.4.

---

## 7. Ikonografi

- **Gaya:** filled-outline, yaitu garis hitam tebal dengan isian warna flat dan sudut membulat.
- **Karakter:** ceria dan ramah anak, dengan detail lucu (misalnya tangan dengan wajah tersenyum untuk TK).
- **Set saat ini:** tangan warna-warni (PAUD/TK), gedung sekolah (SD), mushaf di atas rehal dengan tulisan "اقرأ" (Klub Bahasa Arab), orang dengan roda gigi (Life Skill).
- ⚠️ Warna isiannya (hijau, pink, kuning, cokelat) di luar palet brand.
- **Usulan:** pertahankan gaya garisnya, tapi batasi isian ke navy, amber, biru muda, dan satu netral hangat. Bintang empat sudut dari logo bisa dipakai sebagai ornamen.

### 7.0 Ornamen

Semua ornamen diturunkan dari **bintang empat sudut** di logo ("Binar" = cahaya). Tidak ada blob, gradien warna-warni, atau bentuk lain.

| Ornamen | Spesifikasi | Kapan dipakai |
|---|---|---|
| **Bintang** | Bintang empat sudut solid. Satu bintang besar amber (boleh terpotong di tepi kartu), ditambah 2–4 bintang kecil putih (opacity 18–50%) atau amber. | Semua kartu hero navy. |
| **Pola bintang** | Bintang kecil putih berulang dengan grid 64px, opacity **≤ 8%**. Dipudarkan (mask) supaya hanya muncul di ruang kosong. | Latar kartu navy yang punya ruang kosong besar, misalnya hero Poster Kajian. |
| **Orbit** | Lingkaran garis putus-putus 1.5px, putih 12–20%, berpusat di bintang amber besar. Maksimal 2 lingkaran. | Di sekitar bintang besar, sebagai efek "cahaya yang memancar". |
| **Garis penyerta** | Garis tipis 40px setelah label huruf kapital, misalnya "SEKOLAH ORANG TUA —". | Nama seri atau eyebrow di kartu hero. |
| **Ikon garis** | Ikon garis navy 2px, 24px (kalender, pin lokasi, mikrofon). | Label di kartu info. |
| **Emblem** | Lingkaran 270px dengan garis luar putih 35%, teks melingkar Manrope 700 huruf kapital (nama seri ✦ kategori), lingkaran dalam putus-putus, dan inti putih berisi **ikon kitab terbuka** navy dengan bintang amber kecil di atasnya. | Pojok kanan atas hero poster acara (kajian, seminar). Pengganti stempel bulat di poster lama. |
| **Sinar** | Sinar putih 7% yang memancar dari emblem (`repeating-conic-gradient`, 6° terang dan 12° kosong), dipudarkan melingkar. | Hanya di belakang emblem. |
| **Watermark kata** | Satu kata Sora 600 sekitar 210px, putih 5–6%, boleh terpotong di tepi kartu. Contoh: "Tarbiyah", "Adab". | Ruang kosong di hero, di belakang judul dan pemateri. Harus tetap samar supaya teks di atasnya terbaca. |
| **Pola di kartu info** | Pola bintang navy 12% di pojok kartu biru muda, atau bintang `--binar-blue-50` besar yang terpotong di pojok kartu putih. | Kartu tanggal dan lokasi, supaya tidak terlihat kosong. |

**Ikon kitab terbuka** (SVG garis navy 3px, dengan bintang amber kecil di atasnya) adalah ikon resmi untuk konteks ilmu dan kajian. Sumbernya ada di `templates/Poster Kajian/Poster Kajian.html` (elemen `.book`).

**Foto yang memudar ke navy:** pakai mask dengan **kurva ease**, bukan gradien linear dua titik, supaya tidak ada batas yang terlihat kasar. Mulai dari 0% di tepi foto dan capai 100% di sekitar 72% lebar foto:

```css
--fade: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,.03) 8%, rgba(0,0,0,.1) 16%,
  rgba(0,0,0,.22) 24%, rgba(0,0,0,.38) 32%, rgba(0,0,0,.56) 40%, rgba(0,0,0,.73) 48%,
  rgba(0,0,0,.87) 56%, rgba(0,0,0,.96) 64%, #000 72%);
mask-image: var(--fade);
```

Batasan:
- Ornamen tidak boleh menimpa teks.
- **Tidak ada lingkaran, orbit, atau bentuk apa pun di belakang foto santri.** Ornamen di template foto hanya bintang.

### 7.1 Logo platform pihak ketiga (YouTube, Instagram, WhatsApp, dll.)

Logo platform **selalu memakai file resmi** dari pemiliknya. Logo ini tidak ikut aturan warna Binar.

| Aturan | Detail |
|---|---|
| Pakai file resmi | Jangan menggambar ulang dengan CSS atau shape sendiri. Simpan file aslinya, PNG transparan atau SVG. |
| Warna asli | Ikon YouTube tetap merah `#FF0000` dengan segitiga putih. Jangan diubah ke navy atau amber. |
| Proporsi | Jangan di-stretch, dipotong, atau diberi efek (bayangan, outline, gradien). |
| Ukuran | Di tombol pill poster 1080px, tinggi ikon **26px**, dengan jarak 12px ke teks. |
| Latar | Taruh di latar yang kontras dan polos. Di tombol navy, ikon YouTube merah terbaca dengan jelas. |
| Penulisan nama | "YouTube" (Y dan T kapital), "Instagram", "WhatsApp". |

**File yang tersedia:**
- `templates/Poster Ujian Tahfidz/youtube-icon.png`: ikon YouTube resmi, 240×168px, latar transparan.

Ikon resmi pernah dibuat ulang dengan CSS di versi awal template. Hasilnya bentuknya tidak persis, jadi sekarang diganti dengan file resmi.

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

## 10. Template Instagram

Kanvas feed: **1080×1350 (4:5)**. Story: 1080×1920.

### 10.1 Gaya Instagram sebelumnya (referensi: poster Ujian Tahfidz Juz 30)
- **Latar:** pink pucat `#F5ECEB`, dengan logo di tengah atas.
- **Kotak:** satu kotak navy `#203B82` dengan radius sangat besar, berisi kartu dalam berwarna pink pucat.
- **Font:** Poppins Bold dan Bold Italic.
- **Kuning:** dua sekaligus, yaitu lemon `#F9E82A` (lingkaran di belakang foto, bintang) dan amber `#F9B033` (angka, tombol, bintang).
- **Foto:** foto santri dengan latar dihapus, keluar dari batas kotak.
- **Info:** ikon kalender dan lokasi, plus tombol "Live Streaming" berwarna amber.

**Penyesuaian ke design system:**
- **Font:** Poppins diganti Sora dan Manrope.
- **Kuning:** cukup amber `#F8A012`, tanpa lemon.
- **Navy:** pakai navy logo `#2A3B8B`.
- **Latar:** kanvas `#F0F2F4`.
- **Layout:** bento dengan kartu ber-radius seragam, mengikuti website.

### 10.2 Template resmi

| Template | Status | Lokasi |
|---|---|---|
| **Poster Ujian Tahfidz** | ✅ Siap pakai | [`templates/Poster Ujian Tahfidz/`](./templates/Poster%20Ujian%20Tahfidz/) |
| **Poster Kajian** | ✅ Siap pakai | [`templates/Poster Kajian/`](./templates/Poster%20Kajian/) |
| **Poster Event** | ✅ Siap pakai | [`templates/Poster Event/`](./templates/Poster%20Event/) |

#### Poster Ujian Tahfidz

![Poster Ujian Tahfidz](./templates/Poster%20Ujian%20Tahfidz/preview.png)

**Poster Ujian Tahfidz** adalah layout bento dengan empat area:
- **Header:** logo sejajar tepi kiri kartu, tag sejajar tepi kanan kartu.
- **Kartu foto (kiri):** navy dengan foto santri di tengah dan gradien navy di bawah nama.
- **Kartu info (kanan atas):** putih, berisi judul dan "Juz **30**". Angkanya Sora 600 200px, **solid amber**. Angka dan tag highlight (jumlah halaman/surat dan nama surat, **navy** dengan teks putih) dikelompokkan di bagian bawah kartu dengan jarak 28px.
- **Kartu jadwal (kanan bawah):** `--binar-blue-50`, berisi badge tanggal navy dan tombol pill navy dengan **ikon YouTube resmi** (lihat 7.1).

Aturan template ini:
- Angka besar selalu **solid**, bukan outline.
- **Tidak ada lingkaran atau bentuk dekoratif** di belakang foto.
- Logo dan tag sejajar dengan **tepi kartu**, bukan dengan isi kartu.
- Kartu jadwal **tidak boleh hitam/charcoal** (lihat 3.4).
- Margin poster 56px, jarak antar kartu 20px, padding kartu 40px, radius kartu 36px.

#### Poster Kajian

![Poster Kajian](./templates/Poster%20Kajian/preview.png)

**Poster Kajian** dipakai untuk pengumuman kajian, misalnya seri Sekolah Orang Tua. Fokusnya ke **judul dan pemateri**, berbeda dari Poster Ujian Tahfidz yang fokus ke foto santri. Layoutnya bertumpuk dari atas ke bawah:
- **Header:** logo di kiri, tag netral "Terbuka untuk umum" di kanan.
- **Hero navy selebar poster, isinya rata kiri:**
  - nama seri dalam huruf kapital berjarak, diikuti garis tipis
  - pill kategori outline putih dan judul Sora 400 78px (maksimal 3 baris), sebagai satu kelompok yang **berada di tengah secara vertikal**: jarak dari label seri ke pill sama dengan jarak dari judul ke garis pemateri
  - garis pemisah, lalu pemateri: avatar atau ikon mikrofon, nama Sora 600, gelar Arab (Noto Naskh Arabic), dan peran
  - ornamen (lihat 7.0):
    - **emblem** di pojok kanan atas: teks melingkar "SEKOLAH ORANG TUA ✦ KAJIAN TARBIYAH ISLAM", dengan **ikon kitab terbuka** di tengah
    - **sinar** samar yang memancar dari emblem
    - **watermark** "Tarbiyah" besar dan samar di belakang judul dan pemateri
    - bintang kecil putih dan amber, serta pola bintang samar
- **Ikon garis** kalender dan pin di label kartu tanggal dan lokasi.
- **Pola di kartu info:** bintang biru muda yang terpotong di pojok kartu tanggal, dan pola bintang navy samar di pojok kartu lokasi.
- **Baris info, tiga kartu:**
  - tanggal (putih, **angka tanggal besar solid amber**)
  - lokasi (`--binar-blue-50`)
  - QR Maps (putih, QR navy)
- **Strip keuntungan:** satu pill putih berisi maksimal 3 butir, dengan bullet bintang navy.

Penyesuaian dari poster kajian lama:
- **Latar:** latar amber penuh dengan gradien blob diganti kanvas, kartu navy, dan kartu putih.
- **Warna:** kuning lemon dihapus. Amber hanya dipakai untuk angka tanggal dan bintang.
- **Font:** Poppins diganti Sora dan Manrope.
- **Badge stempel:** badge melingkar "Terbuka untuk umum" dipindah menjadi tag netral di header. Bentuk melingkarnya dipertahankan sebagai **emblem** seri kajian, dengan ikon kitab terbuka di tengah.

#### Poster Event

![Poster Event](./templates/Poster%20Event/preview.png)

**Poster Event** dipakai untuk acara sekolah yang memakai **foto ilustrasi**, misalnya edukasi alam, field trip, lomba, atau bazar. Informasi terpentingnya adalah **waktu dan tempat**.
- **Header:** logo di kiri, tag netral di kanan.
- **Hero navy:**
  - eyebrow dengan garis penyerta, judul Sora 600 88px, subjudul
  - **foto ilustrasi** di 72% sisi kanan. Foto memudar ke navy dari kiri secara **halus** dengan kurva ease, bukan gradien linear yang kasar, plus overlay navy tipis di bawah
  - kalau foto kosong, tampil placeholder pola bintang dengan tulisan "Foto acara"
- **Waktu dan tempat (dua kartu terbesar):**
  - **kartu waktu** putih: angka tanggal 132px solid amber, hari dan bulan, pill jam navy besar
  - **kartu tempat** biru muda yang lebih lebar: nama tempat Sora 600 46px, alamat
- **Apa yang dipelajari:** kartu putih dengan 2–4 kolom ikon garis dalam lingkaran biru muda. Pilihan ikon: hewan, cari, daun, kitab, bintang, orang.

Penyesuaian dari poster event lama:
- **Latar:** gradien hijau-merah muda dan blob kuning diganti hero navy dengan foto yang memudar.
- **Waktu dan tempat:** sebelumnya kecil di pojok kanan bawah, sekarang jadi kartu terbesar.
- **Ikon materi:** lingkaran putih di atas amber diganti ikon garis navy di lingkaran biru muda. Amber hanya untuk angka tanggal.
- **Font:** Poppins diganti Sora dan Manrope.
- **Ayat dan terjemahan** di bagian bawah dihapus, supaya poster fokus ke foto, waktu, dan tempat.

### 10.3 Template lain (usulan)

| Template | Latar | Isi |
|---|---|---|
| **Program / target** | Navy solid | Eyebrow program, judul besar Sora, tag target hafalan, monogram di pojok |
| **Foto kegiatan** | Foto + overlay gradien navy di bawah | Eyebrow kategori, judul putih, logo putih kecil |
| **Pengumuman / SPMB** | Amber solid | Judul `#111`, tombol pill navy "Daftar sekarang" |
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
| 🟠 Sedang | Panel charcoal dipasangkan dengan amber/coral (kartu event, prestasi, bar kontak) | Ganti dengan navy atau `--binar-blue-50` (aturan 3.4) |
| 🟠 Sedang | Instagram memakai dua kuning (lemon + amber) dan font Poppins | Pakai amber saja, serta Sora dan Manrope |
| 🔵 Rendah | Typo di poster Instagram: "channel Binar **Sunah**" | "Binar Sunnah" |
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
  --binar-blue-50: #E3EAF5;   /* panel sekunder, tint 14% dari --binar-blue */
  --binar-gradient: linear-gradient(262deg, #F8A012 0%, #386BB7 55%, #2A3B8B 100%);

  /* Netral */
  --ink: #111111;
  --text: #333333;
  --muted: #5D6470;
  --line: #DDE1E7;
  --canvas: #F0F2F4;
  --surface: #FFFFFF;
  --panel-dark: #1F1F1F;      /* hanya footer web, JANGAN dipasangkan dengan amber */

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
    "brand": { "navy": "#2A3B8B", "amber": "#F8A012", "blue": "#386BB7", "blue50": "#E3EAF5" },
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
  "radius": { "xs": 5, "sm": 10, "card": 25, "cardInstagram": 36, "pill": 9999 },
  "rules": {
    "forbiddenPairs": [["panelDark", "amber"], ["#000000", "amber"]]
  }
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
