# Petak — Media Belajar Informatika SMA Negeri 11 Pinrang

Media pembelajaran berbasis web untuk mata pelajaran Informatika kelas X, XI, dan XII.
Seluruh isinya diturunkan langsung dari perangkat ajar berbasis Pembelajaran Mendalam
yang disusun oleh **Mutmainnah Syam, S.Pd., M.Pd.** (NIP 199303212024212034),
SMA Negeri 11 Pinrang, Tahun Pelajaran 2026/2027.

## Isi

| Bagian | Jumlah |
|---|---|
| Unit pembelajaran | 15 (4 di kelas X, 5 di kelas XI, 6 di kelas XII) |
| Pertemuan | 104 |
| Slide | 586 |
| Simulasi interaktif | 20 |
| LKPD lengkap dengan tabel kerja | 44 |
| Soal pilihan ganda berkunci | 115 |
| Diagram SVG | 37 |

## Susunan per pertemuan

Isi setiap unit dipecah menurut pertemuannya, mengikuti peta pertemuan pada modul
ajar. Membuka sebuah unit berarti membuka rel pertemuan: satu petak untuk tiap
pertemuan, lengkap dengan topik, alokasi JP, jumlah slide, simulasi, dan nomor LKPD-nya.

Di dalam satu pertemuan tersedia:

- **kepala pertemuan** berisi tiga gerak Pembelajaran Mendalam untuk pertemuan itu —
  memahami, mengaplikasi, merefleksi — beserta rencana pelaksanaan beserta pembagian
  menitnya bila pertemuan tersebut punya skenario terperinci;
- **Slide** khusus pertemuan itu, dibuka dengan slide judul pertemuan dan slide alur,
  ditutup dengan slide tugas;
- **Simulasi** yang dipakai pada pertemuan itu saja;
- **LKPD** yang dikerjakan pada pertemuan itu saja.

Tombol lanjut menuntun urutannya sendiri: slide terakhir membuka simulasi, simulasi
membuka LKPD, LKPD membuka pertemuan berikutnya, dan pertemuan terakhir membuka kuis.

Di tingkat unit tetap tersedia tab **Kuis** dan **Modul ajar** (identifikasi, desain
pembelajaran, pengalaman belajar, asesmen, rubrik, refleksi).

## Cara memasang di GitHub Pages

1. Buat repositori baru di GitHub, misalnya `informatika-sman11pinrang`.
2. Unggah berkas di folder ini ke repositori tersebut (cukup seret dan lepas
   lewat tombol **Add file → Upload files**).
3. Buka **Settings → Pages**.
4. Pada bagian *Build and deployment*, pilih **Deploy from a branch**,
   lalu pilih branch `main` dan folder `/ (root)`. Simpan.
5. Tunggu satu sampai dua menit. Alamatnya akan muncul di halaman yang sama,
   berbentuk `https://namaakun.github.io/informatika-sman11pinrang/`.

Berkas `index.html` berdiri sendiri. Jika hanya berkas itu yang diunggah,
situs tetap berjalan penuh.

## Berkas

| Berkas | Wajib | Keterangan |
|---|---|---|
| `index.html` | ya | Seluruh situs: slide, simulasi, LKPD, kuis, modul ajar, gaya, dan data |
| `sw.js` | tidak | Membuat halaman tetap terbuka penuh walau perangkat sama sekali tanpa internet |
| `manifest.webmanifest` | tidak | Agar bisa dipasang sebagai aplikasi di layar utama ponsel |
| `icon.svg` | tidak | Ikon aplikasi |
| `README.md` | tidak | Berkas ini |

## Gambar dan penyimpanan permanen

Saat pertama dibuka, situs menawarkan **Unduh sekarang** di pojok kanan bawah.
Sekali ditekan:

- gambar dicari di Wikimedia Commons, lalu **disimpan permanen** sebagai blob di
  IndexedDB peramban, lengkap dengan nama pembuat dan lisensinya;
- berkas huruf (Fraunces, Plus Jakarta Sans, IBM Plex Mono) ikut disimpan dan
  didaftarkan ulang lewat `FontFace` pada pembukaan berikutnya.

Setelah itu **tidak ada unduhan ulang sama sekali**. Pembukaan berikutnya mengambil
gambar dari penyimpanan internal, termasuk ketika perangkat sepenuhnya tanpa internet.
Seluruh diagram digambar sebagai SVG oleh halaman itu sendiri, jadi tidak pernah
bergantung pada jaringan.

Penyimpanan dapat dilihat, diunduh ulang, atau dihapus lewat tombol unduh di kanan atas.

## Pintasan papan ketik

| Tombol | Fungsi |
|---|---|
| `←` `→` | Pindah slide, dan menyeberang ke pertemuan sebelah di ujungnya |
| `Spasi` | Slide berikutnya |
| `F` | Mode presenter layar penuh |
| `Esc` | Keluar dari mode presenter |

## Catatan

- Kemajuan belajar (slide yang sudah dibuka dan hasil kuis) disimpan di
  `localStorage` masing-masing perangkat. Tidak ada data yang dikirim ke mana pun.
- Situs tidak memuat pelacak, iklan, maupun layanan pihak ketiga selain
  pengambilan gambar sekali dari Wikimedia Commons.
- Tema terang dan gelap mengikuti pengaturan perangkat dan dapat diubah manual.

## Sumber materi

1. Buku Panduan Guru dan Buku Siswa Informatika SMA/MA Kelas X, XI, dan XII.
   Pusat Perbukuan, Badan Standar, Kurikulum, dan Asesmen Pendidikan,
   Kementerian Pendidikan.
2. Permendikdasmen Nomor 10 Tahun 2025 tentang Standar Kompetensi Lulusan.
3. Permendikdasmen Nomor 13 Tahun 2025 tentang Standar Proses.
4. Keputusan Kepala BSKAP Nomor 046/H/KR/2025 tentang Capaian Pembelajaran.
