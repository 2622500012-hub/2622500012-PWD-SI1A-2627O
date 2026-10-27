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
- Hasilnya : Tidak muncul dan tidak ada galat
- Tipe Data yang Digunakan: string, integer, float, boolean, dan NULL.

- Operator Aritmetika & Penugasan: Menghitung sisa semester ($sisaSemester = $batasSemester - $semester;) dengan hasil perhitungan 6 (berdasarkan batas 8 semester dikurangi semester saat ini yaitu 2).
- Operator Perbandingan & Logika: Memeriksa validitas semester menggunakan operator >= dan <= digabungkan dengan operator logika && ($semesterValid = $semester >= 1 && $semester <= $batasSemester;).
- Hasil Pengujian: Informasi sisa semester dan status rentang semester (Sesuai rentang) berhasil ditampilkan secara dinamis di bagian Profil Singkat.

- Percabangan if-elseif-else: Digunakan untuk menentukan keterangan semester (Semester awal, Semester menengah, atau Semester akhir).
- Operator Ternary (?:): Digunakan untuk meringkas pengecekan nama program studi (SI \rightarrow Sistem Informasi, TI \rightarrow Teknik Informatika, lainnya \rightarrow Lainnya) serta status keaktifan mahasiswa (Aktif / Tidak aktif).
- Percabangan switch-case-default: Digunakan untuk menentukan fokus program studi berdasarkan kode program studi (SI \rightarrow Sistem informasi dan proses bisnis, TI \rightarrow Komputasi dan pengembangan perangkat lunak, default \rightarrow Belum ditentukan).

- Perulangan for: Diterapkan pada bagian Target Belajar untuk menghasilkan 5 daftar target belajar secara berulang menggunakan struktur for ($i = 1; $i <= 5; $i++).
- Perulangan while: Diterapkan untuk menampilkan nomor semester secara berurutan (Semester 1, Semester 2, Semester 3) menggunakan variabel penghitung dan operator increment ($nomorSemester++).

- number_format(): Memformat nilai IPK ($ipk = 3.75) agar tampil dengan 2 angka desimal (3,75).
- Pemeriksaan Nilai NULL: Menggunakan operator identik (===) untuk memeriksa apakah $catatanTambahan bernilai NULL, jika ya maka menampilkan teks Belum ada.
- date("Y"): Menghasilkan tahun secara otomatis pada bagian footer halaman web (© 2026 ...).
- Sintaks Keluaran Singkat (<?= ... ?>): Digunakan untuk mempersingkat penulisan tag cetak pada atribut tautan GitHub (PROFIL_GITHUB), tahun footer (date("Y")), dan NIM mahasiswa.

- Perubahan Form: Mengubah atribut action pada elemen <form> di bagian Kontak dari yang sebelumnya mengarah ke index.html (pada P5) menjadi index.php (pada P6).
- Catatan Ruang Lingkup: Pemrosesan data formulir lebih lanjut (seperti metode GET/POST dan validasi) dibatasi dan akan dipelajari pada modul Pertemuan 7 (P7).
Menguji formulir dalam keadaan kosong untuk memastikan pesan validasi muncul.
Menguji input yang tidak sesuai dengan ketentuan.
Menguji formulir dengan seluruh input yang sesuai.
Memastikan interaksi JavaScript pada halaman berjalan sesuai implementasi.

Github URL : https://github.com/2622500012-hub/2622500012-PWD-SI1A-2627O/tree/main/pertemuan-06