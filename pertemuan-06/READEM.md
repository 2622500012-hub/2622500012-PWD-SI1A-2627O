# pertemuan-06

PERSIAPAN PENGEMBANGAN P6

- Kondisi Awal: Menggunakan artefak dari Pertemuan 5 (P5) berupa index.html, style.css,script.js, dan folder img/ yang disalin ke dalam direktori pertemuan-06/. Berkas index.html diubah menjadi index.php.
- Peladen Lokal: Menggunakan Laragon dengan layanan peladen web Apache dan MySQL yang berjalan normal pada Document Root C:\laragon\www\.
- Alamat Akses Localhost: http://localhost/pwd/2622500012-PWD-SI1A-2627O/pertemuan-06/
- ​Hasil Pengujian: Halaman web berhasil diakses melalui peramban dengan struktur dan tata letak dari P5 yang tetap dipertahankan secara utuh.

DASAR PHP DAN INTEGRASI DENGAN HTML

- Pengujian Tag & Eksekusi: Menambahkan skrip uji <?php echo "PHP berhasil dijalankan."; ?> di dalam elemen <body>.
- Pengujian Komentar & Keluaran (echo/print): Menguji komentar satu baris (//, #), komentar multi-baris (/* ... */), serta membandingkan perintah echo dan print.
- Hasil Uji Peramban & Source Code: Teks keluaran tampil dengan sempurna di peramban, dan melalui fitur View Page Source (Ctrl+U) dipastikan bahwa kode PHP telah diproses di sisi peladen (tidak tampil sebagai kode sumber PHP mentah).

Deklarasi dan Penggunaan Variabel PHP 
- Deklarasi Variabel:Menambahkan variabel data mahasiswa ($nim, $namaMahasiswa, $programStudi, $tahunAkademik, $semester, $ipk, $statusAktif, $catatanTambahan) di bagian atas berkas index.php.
- Hasilnya : Tidak muncul dan tidak ada galat
- Deklarasi Konstanta : Menambahkan konstanta menggunakan const (NAMA_MATA_KULIAH dan PROFIL_GITHUB) yang bersifat case-sensitive tanpa menggunakan tanda $.
