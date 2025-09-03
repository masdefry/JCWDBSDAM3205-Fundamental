/*
    ARRAY

    Merupakan tipe data non-primitive, digunakan untuk menyimpan berbagai macam data. Array lebih sering disebut dengan struktur data.
*/

const firstArr = [1, 'A', true, undefined, null];
const secondArr = new Array(1, 'A', true, undefined, null);
console.log(firstArr);
console.log(secondArr);

const fruits = ['Pisang', 'Anggur', 'Mangga'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

/* ARRAY METHODS */
// .length: Untuk menghitung jumlah item didalam array
const campusPurwadhika = ['BSD', 'JKT', 'SBY'];
console.log(campusPurwadhika.length); // 3

// .slice: Untuk mengambil item tertentu berdasarkan index yg ditentukan
const programsInPurwadhika = [
  'Web Development',
  'Visual Design',
  'Digital Marketing',
  'Data Science',
];
console.log(programsInPurwadhika.slice(1, 2)); // ['Visual Design']
console.log(programsInPurwadhika.slice(1, 1)); // []
console.log(programsInPurwadhika.slice(3, 1)); // []: Parameter pertama ! lebih dari parameter kedua
console.log(programsInPurwadhika.slice(3, 4));

const cars = ['BYD', 'Toyota', 'Daihatsu'];
// .push: Menambahkan item baru di index terakhir
cars.push('Honda');
console.log(cars);

// .unshift: Menambahkan item baru di index awal
cars.unshift('Wuling');
console.log(cars);

const numbers = [1, 2, 3];
// .pop: Menghapus item di index terakhir
numbers.pop(); // [1, 2]
console.log(numbers);
// .shift: Menghapus item di index awal
numbers.shift(); // [2]
console.log(numbers);

// .splice: Menambahkan item baru, menghapus item, mengupdate item
const studentsName = ['Andri', 'Wellian', 'Nata'];
studentsName.splice(1, 3);
console.log(studentsName);

const products = ['Asus', 'Lenovo', 'Apple', 'Advance', 'Infinix'];
// products.splice(1, 1, 'Axioo');
products.splice(2, 0, 'Nokia', 'Samsung');
console.log(products);

// .sort: Mengurutkan item didalam array
const arrNumbers = [100, 10, 1, 5];
arrNumbers.sort((a, b) => a - b); // ASCENDING SORT (kecil -> besar)
// arrNumbers.sort((a, b) => b - a); // DESCENDING SORT (besar -> kecil)
console.log(arrNumbers);

// .join: Mengubah array menjadi string
const foods = ['Ayam Geprek', 'Pecel', 'Mie Goreng'];
console.log(foods.join(', '));

// .revers
const arrAlphabets = ['b', 'z', 'a'];
arrAlphabets.reverse();
console.log(arrAlphabets);
