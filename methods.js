/*
    Method adalah fungsi bawaan Javascript untuk mempermudah kita dalam memanipulasi data.
*/

// String Method
const text = 'HelloWorld';
console.log(text.slice(0, 5)); // index ke-0 sampai index ke-4
console.log(text.slice(0, 6)); // index ke-0 sampai index ke-5

// .length: Untuk mengetahui panjang karakter pada string 
const name = 'John Doe';
console.log(name.length); // Output: 8

// .toUpperCase(): Untuk mengubah semua karakter pada string menjadi huruf besar
// .toLowerCase(): Untuk mengubah semua karakter pada string menjadi huruf kecil 
const greeting = 'abc, DEF';
console.log(greeting.toUpperCase()); // Output: ABC, DEF
console.log(greeting.toLowerCase()); // Output: abc, def 

// .indexOf(): Untuk mencari index dari sebuah karakter pada string 
const description = 'Hello World'; 
console.log(description.indexOf('W')); // Output: 6
console.log(description.indexOf('o')); // Output: 4 (index pertama dari karakter 'o')
console.log(description.lastIndexOf('o')); // Output: 7 (index terakhir dari karakter 'o')

// .replace(): Untuk mengganti karakter pada string dengan karakter lain 
const phrase = 'Hello World'; 
console.log(phrase.replace('World', 'JavaScript')); // Output: Hello JavaScript



// Number Method 
// .toString(): Untuk mengubah number menjadi string  
const num = 123; // 123 
const numToString = num.toString(); // '123'
console.log(num); 
console.log(numToString);
console.log(typeof num); // Output: number 
console.log(typeof numToString); // Output: string



const point = 100; // 100
const newPoint = point; //100 

const stringPoint = '1000'; 
// Number: untuk mengubah string menjadi number  
console.log(Number(stringPoint)); // Output: 1000

// parseInt(): Untuk mengubah string menjadi number (integer)
console.log(parseInt(stringPoint)); // Output: 1000


// .toFixed(): Untuk membulatkan angka desimal pada number 
const decimalNum = 3.369; 
console.log(decimalNum.toFixed(1)); // Output: 3


