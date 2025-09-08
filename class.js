/*
    CLASS

    Template untuk membuat object. Class juga dapat meng-enkapsulasi data dari code yg kita buat
*/

// const products = [
//   { name: 'Apel', price: 15000, stock: 15, totalWeight: 15 },
//   { name: 'Mangga', price: 10000, stock: 10, totalWeight: 10 },
//   { name: 'Jeruk', price: 5000, stock: 5, totalWeight: 5 },
// ];

class Products {
  name = '';
  price = 0;
  totalWeight = 0;

  constructor(_name, _price, _totalWeight) {
    this.name = _name;
    this.price = _price;
    this.totalWeight = _totalWeight;
  }
}

const product1 = new Products('Mangga', 25000, 100); // { name: 'Mangga', price: 25000, totalWeight: 100 }
console.log(product1);
product1.name = 'Manggaaa';
product1.price = 17500;
console.log(product1);

const products = [
  new Products('Apel', 15000, 15),
  new Products('Mangga', 10000, 10),
  new Products('Jeruk', 5000, 5),
];
for (let item of products) {
  console.log(`${item.name} - Rp${item.price}: ${item.totalWeight}`);
}

/* 
    Challenge. 
    Disebuah supermarket terdapat banyak sekali produk dengan berbagai kategori, seperti snack, pakaian, dan elektronik. 
    01 - Tentukan entitas/property apa saja yang terdapat di tiap-tiap kategori produk
    02 - Buatkan class untuk tiap-tiap kategori produk
*/
