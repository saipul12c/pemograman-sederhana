# Struktur Kontrol (Control Structures)

## Deskripsi
Bagian ini mencakup berbagai struktur kontrol alur program dalam JavaScript. Struktur kontrol ini digunakan untuk mengarahkan jalannya eksekusi program berdasarkan kondisi tertentu, serta untuk melakukan perulangan dan pengambilan keputusan yang lebih kompleks.

## Subfolder

### 1. **`/if-statements`**
Mempelajari penggunaan pernyataan `if`, `else if`, dan `else` untuk pengambilan keputusan berdasarkan kondisi.

#### Tugas
- **Tugas 1**: Buatlah sebuah program yang menggunakan pernyataan `if-else` untuk mengevaluasi nilai variabel dan mencetak pesan yang sesuai berdasarkan nilai tersebut. Contoh: Jika nilai lebih besar dari 10, cetak "Nilai tinggi"; jika tidak, cetak "Nilai rendah".
- **Tugas 2**: Modifikasi program dari Tugas 1 dengan menambahkan beberapa kondisi menggunakan `else if` untuk nilai dalam rentang tertentu (misalnya, "Nilai sedang" untuk nilai antara 5 dan 10).
- **Tugas 3**: Buatlah sebuah program yang memeriksa usia pengguna dan mencetak kategori usia: "Anak-anak" (0-12), "Remaja" (13-19), dan "Dewasa" (20+).
- **Tugas 4**: Implementasikan program yang menggunakan `if-else` untuk menentukan status kelulusan berdasarkan nilai ujian. Misalnya, "Lulus" jika nilai lebih dari atau sama dengan 60, dan "Tidak Lulus" jika nilai kurang dari 60.
- **Tugas 5**: Buatlah program yang mengevaluasi suhu cuaca dan mencetak "Sangat Panas", "Hangat", "Dingin", atau "Sangat Dingin" berdasarkan rentang suhu yang ditentukan.

### 2. **`/loops`**
Mempelajari berbagai jenis loop, termasuk `for`, `while`, dan `do-while`, untuk iterasi dalam program.

#### Tugas
- **Tugas 1**: Buatlah sebuah program yang menggunakan loop `for` untuk mencetak angka dari 1 hingga 10.
- **Tugas 2**: Buatlah sebuah program yang menggunakan loop `while` untuk mencetak angka dari 1 hingga 10. Pastikan loop berhenti setelah mencapai angka 10.
- **Tugas 3**: Implementasikan loop `do-while` yang meminta pengguna memasukkan angka hingga mereka memasukkan angka yang lebih besar dari 0. Cetak angka yang dimasukkan oleh pengguna.
- **Tugas 4**: Buatlah sebuah program yang menggunakan loop `for` untuk mencetak tabel perkalian dari 1 hingga 10.
- **Tugas 5**: Implementasikan loop `while` yang menghitung jumlah semua angka genap dari 1 hingga 100 dan mencetak hasilnya.

### 3. **`/switch`**
Mempelajari penggunaan pernyataan `switch-case` untuk pengambilan keputusan berdasarkan beberapa kondisi.

#### Tugas
- **Tugas 1**: Buatlah sebuah program yang menggunakan pernyataan `switch-case` untuk menentukan hari dalam seminggu berdasarkan nomor hari (1 untuk Senin, 2 untuk Selasa, dan seterusnya). Cetak nama hari yang sesuai.
- **Tugas 2**: Modifikasi program dari Tugas 1 untuk mencetak pesan "Hari akhir pekan" jika nomor hari adalah 6 atau 7, dan "Hari kerja" untuk nomor hari lainnya.
- **Tugas 3**: Buatlah sebuah program yang menggunakan `switch-case` untuk menentukan jenis kendaraan berdasarkan tipe kendaraan (misalnya, "Mobil", "Motor", "Sepeda").
- **Tugas 4**: Implementasikan program yang menggunakan `switch-case` untuk menentukan jenis bulan berdasarkan nomor bulan (1 untuk Januari, 2 untuk Februari, dan seterusnya). Cetak jumlah hari dalam bulan tersebut.
- **Tugas 5**: Buatlah program yang menggunakan `switch-case` untuk mengklasifikasikan umur pengguna ke dalam kategori "Balita", "Anak-anak", "Remaja", "Dewasa", dan "Lanjut Usia".

### 4. **`/ternary-operators`**
Mempelajari penggunaan operator ternary (`? :`) untuk pernyataan kondisi sederhana.

#### Tugas
- **Tugas 1**: Buatlah sebuah program yang menggunakan operator ternary untuk menentukan apakah suatu angka adalah genap atau ganjil. Cetak "Genap" jika angka tersebut genap, dan "Ganjil" jika angka tersebut ganjil.
- **Tugas 2**: Implementasikan operator ternary untuk menentukan apakah seorang pengguna berhak mendapatkan diskon (lebih dari 100 unit) atau tidak. Cetak "Diskon diterima" jika jumlah lebih dari 100, dan "Tidak ada diskon" jika jumlah kurang dari atau sama dengan 100.
- **Tugas 3**: Buatlah sebuah program yang menggunakan operator ternary untuk menentukan kategori ukuran pakaian berdasarkan ukuran yang diberikan (S, M, L, XL).
- **Tugas 4**: Implementasikan program yang menggunakan operator ternary untuk mengevaluasi apakah seorang pengguna dapat meminjam buku dari perpustakaan berdasarkan usia mereka (lebih dari atau sama dengan 18 tahun).
- **Tugas 5**: Buatlah sebuah program yang menggunakan operator ternary untuk menentukan apakah siswa lulus ujian berdasarkan nilai (lebih dari atau sama dengan 60) dan mencetak hasilnya.

### 5. **`/error-handling`**
Mempelajari teknik penanganan kesalahan menggunakan `try`, `catch`, `finally`, dan `throw`.

#### Tugas
- **Tugas 1**: Buatlah sebuah program yang mencoba membagi dua angka. Gunakan blok `try-catch` untuk menangkap kesalahan jika terjadi pembagian dengan nol. Cetak pesan kesalahan yang sesuai.
- **Tugas 2**: Tambahkan blok `finally` pada program dari Tugas 1 untuk mencetak pesan yang selalu muncul, baik kesalahan terjadi atau tidak.
- **Tugas 3**: Buatlah sebuah fungsi yang menerima angka dan melempar kesalahan jika angka negatif. Tangani kesalahan tersebut menggunakan blok `try-catch` dan cetak pesan kesalahan yang sesuai.
- **Tugas 4**: Implementasikan program yang meminta pengguna memasukkan angka dari 1 hingga 10 dan menangani kesalahan jika pengguna memasukkan nilai di luar rentang tersebut.
- **Tugas 5**: Buatlah sebuah fungsi yang membaca data dari file (misalnya, menggunakan `fetch` dalam konteks web). Tangani kesalahan jika file tidak ditemukan atau terjadi kesalahan saat membaca file.

## Panduan
1. **Eksplorasi**: Buka masing-masing subfolder untuk mempelajari topik spesifik.
2. **Ikuti Tugas**: Lengkapi tugas-tugas yang tertera di setiap subfolder untuk memahami penerapan struktur kontrol.
3. **Praktik**: Cobalah memodifikasi kode yang telah Anda buat untuk melihat bagaimana perubahan mempengaruhi hasilnya.

## Penutup
Memahami struktur kontrol adalah keterampilan dasar yang penting dalam pemrograman. Dengan mengerjakan tugas-tugas ini, Anda akan memperoleh pemahaman yang lebih baik tentang bagaimana mengontrol alur eksekusi program dan menangani berbagai kondisi.
