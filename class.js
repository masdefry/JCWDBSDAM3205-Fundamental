/* 
    Challenge. 
    Disebuah supermarket terdapat banyak sekali produk dengan berbagai kategori, seperti snack, pakaian, dan elektronik. 
    01 - Tentukan entitas/property apa saja yang terdapat di tiap-tiap kategori produk
    02 - Buatkan class untuk tiap-tiap kategori produk
*/

/*
    01
    Snack: nama, merk, harga, stok, varian, berat, komposisi, tanggal_expired
    Pakaian: nama, merk, harga, stok, material, ukuran, warna
    Elektronik: nama, merk, harga, stok, spesifikasi, jenis, garansi, warna 
*/

/*
    02
*/
class Product {
  nama = '';
  merk = '';
  harga = '';
  stok = 0;

  constructor(nama, merk, harga, stok) {
    this.nama = nama;
    this.merk = merk;
    this.harga = harga;
    this.stok = stok;
  }
}

class Snack extends Product {
  varian = '';
  berat = 0;
  komposisi = '';
  tanggal_expired = '';

  constructor(
    nama,
    merk,
    harga,
    stok,
    varian,
    berat,
    komposisi,
    tanggal_expired
  ) {
    super(nama, merk, harga, stok);
    this.varian = varian;
    this.berat = berat;
    this.komposisi = komposisi;
    this.tanggal_expired = tanggal_expired;
  }
}

class Pakaian extends Product {
  material = '';
  ukuran = '';
  warna = '';

  constructor(nama, merk, harga, stok, material, ukuran, warna) {
    super(nama, merk, harga, stok);
    this.material = material;
    this.ukuran = ukuran;
    this.warna = warna;
  }
}

/*
    PRIVATE & PUBLIC PROPERTY
*/
class User {
  username = '';
  #password = '';
  email = '';

  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  get getPassword() {
    return this.#password;
  }

  set setPassword(password) {
    if (password.length < 6){
        console.log('Jumlah karakter password harus lebih dari 6');
        return;
    }

    this.#password = password;
  }
}

const user1 = new User('defryan', 'defryan@gmail.com');
user1.setPassword = 'abc12';
console.log(user1.getPassword);
