# Coba Design System

Repo eksperimen untuk membangun **design system dan materi visual** dengan bantuan Claude Code. Proyek utamanya adalah **Design System Binar** untuk [Binar Sunnah School](https://binarsunnah.org), sekolah TK dan SD Islam di Jakarta Selatan ([@binarsunnahschool](https://www.instagram.com/binarsunnahschool)).

<p align="center">
  <img src="docs/binar-sunnah-school/templates/Poster%20Ujian%20Tahfidz/preview.png" alt="Template Poster Ujian Tahfidz" width="360">
</p>

---

## Isi repo

```
.
├── CLAUDE.md                              # Instruksi proyek untuk Claude Code
├── .claude/skills/
│   ├── binar-design-system/SKILL.md       # Skill Design System Binar
│   └── banner-design/                     # Skill desain banner umum
├── docs/binar-sunnah-school/
│   ├── Design System Binar.md             # Dokumentasi lengkap design system
│   ├── tokens.css                         # Token CSS siap pakai
│   ├── brand-audit.html                   # Audit visual brand (halaman HTML)
│   └── templates/
│       └── Poster Ujian Tahfidz/          # Template Instagram 1080×1350
├── assets/banners/1212-cheesecake/        # Contoh banner (3 art direction)
└── skills-lock.json                       # Versi skill pihak ketiga
```

---

## Design System Binar

Dokumentasi lengkap ada di [`docs/binar-sunnah-school/Design System Binar.md`](docs/binar-sunnah-school/Design%20System%20Binar.md). Ringkasannya:

### Warna
| | Token | Hex | Peran |
|---|---|---|---|
| 🟦 | `--binar-navy` | `#2A3B8B` | Primer: kartu foto, tombol, badge |
| 🟧 | `--binar-amber` | `#F8A012` | Aksen: angka besar (juz, statistik), bintang |
| 🔷 | `--binar-blue` | `#386BB7` | Sekunder: link |
| ⬜ | `--binar-blue-50` | `#E3EAF5` | Panel sekunder: kartu jadwal/info |
| ⬜ | `--canvas` | `#F0F2F4` | Latar halaman / poster |

### Tipografi
- **Sora** untuk judul: weight 400/600, letter-spacing −3%.
- **Manrope** untuk isi dan UI: line-height sekitar 1.8.

### Bentuk
- Radius kartu 25px di web dan 36px di poster Instagram.
- Tombol dan tag berbentuk pill.

### Aturan penting
- 🚫 **Jangan pakai hitam/charcoal dengan amber.** Untuk warna gelap, pakai navy.
- **Satu kuning saja, yaitu amber.** Angka besar solid, tidak outline.
- Logo Binar dan logo platform (YouTube, dll.) memakai **file resmi**.
- **Foto santri tidak di-commit** ke repo.

### Template

| Template | Ukuran | Folder |
|---|---|---|
| Poster Ujian Tahfidz | 1080×1350 | [`templates/Poster Ujian Tahfidz`](docs/binar-sunnah-school/templates/Poster%20Ujian%20Tahfidz/) |

Untuk membuat poster:
1. Isi objek `DATA` di file HTML template.
2. Taruh `foto.png` (PNG transparan) di folder template.
3. Ekspor ke PNG:

```bash
cd "docs/binar-sunnah-school/templates/Poster Ujian Tahfidz"
```

```bash
node export.js poster-nama-santri.png
```

`export.js` butuh [Playwright](https://playwright.dev) dengan Chromium terpasang.

---

## Dipakai bersama Claude Code

Repo ini sudah terhubung ke Claude Code:

- **`CLAUDE.md`** dibaca otomatis setiap sesi. Isinya: semua pekerjaan Binar wajib memakai skill `binar-design-system`.
- **Skill `binar-design-system`** dimuat saat kamu meminta materi Binar, misalnya *"Buatkan poster wisuda tahfidz untuk Binar"*. Skill ini juga bisa dipanggil langsung dengan `/binar-design-system`.

Cara memakai di komputer sendiri:

```bash
git clone https://github.com/dhiulhaq/Coba-Design-System.git
```

```bash
cd Coba-Design-System && claude
```

Setiap aturan desain baru yang disepakati dicatat di **`Design System Binar.md`** dan **`SKILL.md`** sekaligus, supaya dokumentasi dan perilaku Claude Code tetap sama.

---

## Materi lain

| Materi | Isi |
|---|---|
| [`assets/banners/1212-cheesecake`](assets/banners/1212-cheesecake/) | Banner promo 12.12 cheesecake 1080×1080 dalam 3 art direction: bold type, dark moody, illustrated |

---

## Sumber
- Analisis brand diambil dari [binarsunnah.org](https://binarsunnah.org) (HTML, CSS, aset logo) dan poster Instagram yang dikirim tim.
- Font: [Sora](https://fonts.google.com/specimen/Sora) dan [Manrope](https://fonts.google.com/specimen/Manrope) dari Google Fonts.
- Skill `banner-design` dari [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill).
