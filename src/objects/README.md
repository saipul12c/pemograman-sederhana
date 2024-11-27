# Objek (Objects)

## Deskripsi
Bagian ini membahas berbagai konsep terkait objek di JavaScript, termasuk cara membuat, mengelola, dan memanipulasi objek. Objek adalah kumpulan properti (nilai) dan metode (fungsi) yang memungkinkan pengelolaan data yang terkait dengan entitas yang sama.

## Subfolder

### 1. **`/object-basics`**
Mempelajari dasar-dasar objek, termasuk pembuatan dan akses properti.

#### Materi
- **Membuat Objek**: Objek dapat dibuat menggunakan literal objek `{}` atau dengan kata kunci `new` diikuti dengan fungsi konstruktor.
  ```javascript
  // Literal objek
  const objek = {
      properti1: nilai1,
      properti2: nilai2
  };

  // Dengan konstruktor
  function Person(nama, umur) {
      this.nama = nama;
      this.umur = umur;
  }
  const orang = new Person('Ali', 25);
  ```
- **Akses Properti**: Properti objek dapat diakses menggunakan notasi titik `.` atau notasi bracket `[]`.
  ```javascript
  console.log(objek.properti1); // Notasi titik
  console.log(objek['properti2']); // Notasi bracket
  ```

#### Tugas
1. Buatlah objek dengan beberapa properti, misalnya `nama`, `umur`, dan `kota`. Akses dan cetak setiap properti dari objek tersebut.
2. Implementasikan konstruktor untuk membuat objek `Mobil` dengan properti seperti `merek`, `model`, dan `tahun`. Buat beberapa instance dari objek `Mobil` dan cetak informasinya.
3. Buatlah objek dengan metode yang menghitung dan mengembalikan usia berdasarkan tahun lahir yang diberikan.
4. Implementasikan objek yang berisi informasi buku (judul, penulis, tahun) dan buatlah fungsi yang menampilkan ringkasan informasi buku tersebut.
5. Buatlah objek yang memiliki metode untuk memperbarui salah satu propertinya dan cetak hasil perubahan tersebut.

#### Kesimpulan
Objek di JavaScript memungkinkan pengelolaan data yang terstruktur dengan mengelompokkan properti dan metode yang terkait. Memahami cara membuat dan mengakses objek adalah dasar penting dalam pemrograman JavaScript.

---

### 2. **`/object-methods`**
Mempelajari metode objek, termasuk cara mendefinisikan dan menggunakan metode di dalam objek.

#### Materi
- **Metode Objek**: Fungsi yang didefinisikan sebagai bagian dari objek. Metode objek dapat digunakan untuk melakukan operasi yang terkait dengan objek tersebut.
  ```javascript
  const objek = {
      nama: 'Ali',
      umur: 25,
      perkenalan: function() {
          return `Nama saya ${this.nama} dan saya ${this.umur} tahun.`;
      }
  };
  ```
- **Metode dan `this`**: Kata kunci `this` di dalam metode objek merujuk pada objek tempat metode tersebut didefinisikan.

#### Tugas
1. Buatlah objek dengan metode yang mengembalikan deskripsi lengkap dari objek, misalnya, `Person` dengan metode `deskripsi()`.
2. Implementasikan objek dengan metode yang menghitung total harga dari beberapa item dalam keranjang belanja.
3. Buatlah metode untuk objek yang memeriksa apakah objek tersebut memenuhi kriteria tertentu, seperti usia di atas 18 tahun.
4. Implementasikan objek dengan metode yang mengubah nilai salah satu propertinya dan mengembalikan objek yang telah diperbarui.
5. Buatlah objek dengan beberapa metode yang saling berinteraksi, misalnya, metode untuk menambah, menghapus, dan menampilkan item dalam daftar.

#### Kesimpulan
Metode objek menyediakan cara untuk melakukan operasi yang terkait dengan data objek. Memahami cara mendefinisikan dan menggunakan metode membantu dalam mengelola dan memanipulasi data dengan lebih efektif.

---

### 3. **`/object-inheritance`**
Mempelajari pewarisan objek, termasuk cara membuat objek yang mewarisi properti dan metode dari objek lain.

#### Materi
- **Pewarisan Prototipe**: Di JavaScript, objek dapat mewarisi properti dan metode dari objek lain melalui prototipe.
  ```javascript
  function Person(nama, umur) {
      this.nama = nama;
      this.umur = umur;
  }

  Person.prototype.greeting = function() {
      return `Halo, nama saya ${this.nama}.`;
  };

  function Student(nama, umur, sekolah) {
      Person.call(this, nama, umur);
      this.sekolah = sekolah;
  }

  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  ```

#### Tugas
1. Buatlah objek `Person` dan objek `Student` yang mewarisi dari `Person`. Implementasikan metode di `Student` yang mencetak informasi sekolah.
2. Implementasikan pewarisan prototipe untuk membuat objek `Vehicle` dan `Car` dengan properti dan metode yang relevan.
3. Buatlah objek `Animal` dengan metode `speak`, dan objek `Dog` yang mewarisi dari `Animal` dan mengubah metode `speak` untuk mencetak suara khusus.
4. Implementasikan pewarisan objek untuk membuat hierarki kelas yang menggambarkan bentuk-bentuk geometris (misalnya, `Shape`, `Circle`, `Rectangle`).
5. Buatlah objek dengan pewarisan yang mencakup properti dan metode tambahan di objek turunan, serta pastikan metode di objek dasar tetap dapat diakses.

#### Kesimpulan
Pewarisan objek memungkinkan reuse kode dengan cara mewarisi properti dan metode dari objek lain. Ini membantu dalam menciptakan struktur yang lebih kompleks dan terorganisir.

---

### 4. **`/object-encapsulation`**
Mempelajari konsep enkapsulasi, yaitu teknik untuk menyembunyikan data dan hanya memperlihatkan metode yang diperlukan.

#### Materi
- **Enkapsulasi**: Teknik untuk menyembunyikan detail implementasi internal dari objek dan hanya mengekspos antarmuka yang diperlukan untuk interaksi.
  ```javascript
  function BankAccount(saldo) {
      let _saldo = saldo; // Variabel privat
      this.getSaldo = function() {
          return _saldo;
      };
      this.deposit = function(jumlah) {
          _saldo += jumlah;
      };
      this.withdraw = function(jumlah) {
          if (jumlah <= _saldo) {
              _saldo -= jumlah;
          }
      };
  }
  ```

#### Tugas
1. Buatlah objek dengan enkapsulasi yang menyembunyikan data internal dan hanya mengekspos metode untuk mengakses dan memodifikasi data tersebut.
2. Implementasikan objek dengan metode yang membatasi akses ke data sensitif, seperti saldo akun bank.
3. Buatlah objek dengan variabel privat yang hanya dapat diubah melalui metode yang terdefinisi.
4. Implementasikan objek yang menyembunyikan implementasi internal dan menyediakan metode untuk mengakses informasi secara aman.
5. Buatlah objek dengan enkapsulasi yang membatasi akses ke data dan metode, serta memastikan integritas data terjaga.

#### Kesimpulan
Enkapsulasi membantu dalam melindungi data internal dari akses langsung dan memungkinkan kontrol yang lebih baik terhadap bagaimana data tersebut dimodifikasi. Ini meningkatkan keamanan dan integritas data di dalam objek.

---

### 5. **`/object-polymorphism`**
Mempelajari konsep polimorfisme, yaitu kemampuan untuk menggunakan objek dengan antarmuka yang sama tetapi dengan perilaku yang berbeda.

#### Materi
- **Polimorfisme**: Kemampuan untuk menggunakan objek dari berbagai jenis dengan antarmuka yang sama, memungkinkan fleksibilitas dalam pemrograman.
  ```javascript
  function Animal() {}
  Animal.prototype.speak = function() {
      console.log("Animal makes a sound");
  };

  function Dog() {}
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.speak = function() {
      console.log("Dog barks");
  };

  function Cat() {}
  Cat.prototype = Object.create(Animal.prototype);
  Cat.prototype.speak = function() {
      console.log("Cat meows");
  };

  const animals = [new Dog(), new Cat()];
  animals.forEach(animal => animal.speak());
  ```

#### Tugas
1. Buatlah objek dasar `Shape` dengan metode `draw`, dan objek turunan `Circle` dan `Rectangle` yang mengimplementasikan metode `draw` dengan cara berbeda.
2. Implementasikan polimorfisme dengan membuat objek `Employee` dan `Manager` yang memiliki metode `work` dengan perilaku yang berbeda.
3. Buatlah objek `Vehicle` dengan metode `start`, dan objek turunan `Car` dan `Bike` dengan implementasi metode `start` yang berbeda.
4. Implementasikan polimorfisme dalam hierarki objek `Bird` dan `Fish`, dengan masing-masing objek memiliki metode `move` yang sesuai.
5. Buatlah objek dengan metode yang berbeda untuk menggambar berbagai bentuk dan pastikan setiap bentuk menggambar dirinya sendiri dengan cara yang benar.

#### Kesimpulan
Polimorfisme memungkinkan penggunaan objek dengan antarmuka yang sama tetapi perilaku yang berbeda, meningkatkan fleksibilitas dan keterbacaan kode. Ini memungkinkan kode untuk lebih terstruktur dan mudah diperluas.

## Panduan
1.

 **Eksplorasi**: Buka masing-masing subfolder untuk mempelajari topik spesifik tentang objek.
2. **Ikuti Tugas**: Lengkapi tugas-tugas yang tertera di setiap subfolder untuk memahami penerapan objek dalam JavaScript.
3. **Praktik**: Cobalah memodifikasi kode yang telah Anda buat untuk melihat bagaimana perubahan mempengaruhi hasilnya.

## Penutup
Memahami berbagai aspek objek dan konsep terkait sangat penting dalam pemrograman JavaScript. Dengan menyelesaikan tugas-tugas ini, Anda akan mendapatkan pemahaman yang lebih mendalam tentang bagaimana objek dapat digunakan untuk menyederhanakan dan memperkuat kode Anda.