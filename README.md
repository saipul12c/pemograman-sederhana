# Dokumentasi Proyek Pembelajaran Dasar Pemrograman

## Deskripsi
Dokumentasi ini berfungsi sebagai panduan umum untuk memahami berbagai konsep dasar dalam pemrograman, terutama menggunakan JavaScript. Setiap bagian dari dokumentasi ini menjelaskan topik-topik kunci yang dipelajari dalam proyek ini, termasuk variabel, struktur kontrol, fungsi, dan objek.

## Konsep-Konsep Logika Pemrograman

1. **Variables (Variabel)**:
   - **Definisi dan Fungsi**: Variabel adalah entitas yang digunakan untuk menyimpan nilai atau data dalam sebuah program. Di JavaScript, variabel bisa menyimpan berbagai jenis data seperti angka, string, objek, dan array.
   - **Jenis-Jenis Variabel**:
     - `let`: Digunakan untuk mendeklarasikan variabel yang nilainya bisa diubah. Scope dari `let` terbatas pada blok di mana ia dideklarasikan.
     - `const`: Digunakan untuk mendeklarasikan variabel yang nilainya tetap dan tidak bisa diubah setelah deklarasi. Seperti `let`, `const` juga memiliki scope blok.
     - `var`: Jenis variabel yang lebih lama digunakan, memiliki cakupan fungsi atau global. `var` memungkinkan hoisting, yang dapat membuat perilakunya kurang dapat diprediksi dibandingkan dengan `let` dan `const`.
   - **Scope**: Pemahaman tentang lingkup atau "scope" variabel sangat penting dalam menghindari kesalahan. Variabel yang dideklarasikan dengan `let` dan `const` memiliki block scope, sementara `var` memiliki function scope.
   - **Hoisting**: Proses di mana deklarasi variabel dengan `var` secara otomatis diangkat ke atas fungsi atau konteks global, meskipun inisialisasi tetap di tempat semula.

2. **Control Structures (Struktur Kontrol)**:
   - **Definisi dan Fungsi**: Struktur kontrol adalah cara untuk mengarahkan aliran eksekusi dalam sebuah program berdasarkan kondisi tertentu.
   - **Jenis-Jenis Struktur Kontrol**:
     - **Pernyataan Kondisional (`if-else`)**:
       - **`if`**: Mengevaluasi ekspresi dan mengeksekusi blok kode jika hasilnya benar (true).
       - **`else if`**: Digunakan untuk menguji beberapa kondisi dalam urutan yang berurutan.
       - **`else`**: Menyediakan jalur eksekusi alternatif jika semua kondisi sebelumnya salah (false).
     - **Perulangan (Loops)**:
       - **`for`**: Perulangan yang memiliki sintaks yang terdiri dari tiga bagian utama: inisialisasi, kondisi, dan increment/decrement. Biasanya digunakan ketika jumlah iterasi sudah diketahui.
       - **`while`**: Perulangan yang terus berjalan selama kondisi yang diberikan benar (true). Cocok digunakan jika jumlah iterasi tidak pasti.
       - **`do-while`**: Serupa dengan `while`, tetapi memastikan bahwa blok kode dieksekusi setidaknya sekali sebelum memeriksa kondisi.
     - **Pengambilan Keputusan Berbasis Kondisi (`switch-case`)**:
       - `switch-case` memberikan cara yang lebih terstruktur untuk menangani beberapa kondisi yang berbeda, biasanya digunakan sebagai alternatif untuk beberapa `if-else`.
     - **Operator Ternary**:
       - Merupakan cara singkat untuk menulis `if-else`, sangat berguna untuk kondisi sederhana. Sintaks: `kondisi ? ekspresi_1 : ekspresi_2`.
     - **Penanganan Kesalahan (Error Handling)**:
       - **`try-catch-finally`**: Struktur yang digunakan untuk menangkap dan menangani kesalahan yang terjadi selama eksekusi program. Bagian `finally` digunakan untuk menjalankan kode yang harus dieksekusi terlepas dari apakah kesalahan terjadi atau tidak.
       - **`throw`**: Digunakan untuk memunculkan kesalahan secara manual jika terjadi kondisi yang tidak diinginkan.

3. **Functions (Fungsi)**:
   - **Definisi dan Fungsi**: Fungsi adalah blok kode yang dirancang untuk melakukan tugas tertentu dan dapat digunakan kembali kapan pun diperlukan.
   - **Jenis-Jenis Fungsi**:
     - **Deklarasi Fungsi (Function Declarations)**:
       - Sintaks klasik untuk mendefinisikan fungsi. Dapat dipanggil sebelum dideklarasikan karena hoisting.
     - **Ekspresi Fungsi (Function Expressions)**:
       - Mendefinisikan fungsi sebagai bagian dari ekspresi, misalnya, menyimpannya ke dalam variabel. Fungsi ini tidak dihoist, jadi hanya bisa dipanggil setelah didefinisikan.
     - **Arrow Functions**:
       - Sintaks singkat untuk mendefinisikan fungsi, terutama bermanfaat dalam fungsi callback. Arrow functions tidak memiliki `this` mereka sendiri, yang membuatnya berbeda dalam konteks objek.
     - **Callback Functions**:
       - Fungsi yang diteruskan sebagai argumen ke fungsi lain dan dipanggil setelah tugas utama selesai, sering digunakan dalam asynchronous programming.
     - **Closures**:
       - Sebuah konsep di mana fungsi dapat mengakses variabel dari lingkup luar bahkan setelah fungsi luar tersebut telah dieksekusi. Closures sering digunakan untuk menciptakan fungsi dengan state pribadi atau persistent.

4. **Objects (Objek)**:
   - **Definisi dan Fungsi**: Objek adalah kumpulan dari properti (nilai) dan metode (fungsi) yang dikelompokkan bersama. Ini adalah cara untuk mengelola data yang terkait dengan entitas yang sama.
   - **Konsep Dasar OOP**:
     - **Membuat Objek**:
       - Objek dapat dibuat menggunakan literal objek (`{}`) atau dengan kata kunci `new` diikuti dengan fungsi konstruktur.
     - **Properti dan Metode**:
       - Properti adalah atribut dari objek yang menyimpan nilai, sedangkan metode adalah fungsi yang terkait dengan objek.
     - **Inheritance (Pewarisan)**:
       - Konsep di mana sebuah objek dapat mewarisi properti dan metode dari objek lain, memungkinkan reuse code dan pembuatan struktur yang lebih kompleks.
     - **Encapsulation (Enkapsulasi)**:
       - Teknik untuk menyembunyikan data dan hanya memperlihatkan metode yang diperlukan. Ini menjaga integritas data dengan membatasi akses dari luar.
     - **Polymorphism (Polimorfisme)**:
       - Kemampuan untuk menggunakan objek yang berbeda melalui antarmuka yang sama, tetapi dengan perilaku yang bisa berbeda-beda, tergantung pada objeknya. Polimorfisme adalah salah satu prinsip utama dalam OOP, memungkinkan program untuk fleksibel dan dapat diperluas.

## Penutup
Dokumentasi ini bertujuan untuk memberikan pemahaman dasar tentang konsep-konsep utama dalam pemrograman menggunakan JavaScript. Dengan mempelajari dan mengimplementasikan topik-topik ini, Anda akan mendapatkan fondasi yang kuat untuk melanjutkan ke konsep-konsep pemrograman yang lebih lanjut.
