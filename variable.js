console.log('Hello, World!'); 

/*
    VARIABLE
    
    Merupakan tempat untuk menyimpan data.

    Syntax:
    var nama_variable = nilai_variable;
*/
var fullName = 'Defryan'; 

// Menampilkan kata 'Web Development' sebanyak 10x menggunakan console.log 
var text = 'Cabang BSD';
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);

/*
    Variable Naming Rules:
    1. Tidak boleh diawali dengan angka (harus huruf atau _ atau $).
    2. Tidak boleh ada spasi (gunakan camelCase, snake_case, PascalCase).
    3. Penamaan harus deskriptif.
    4. Tidak boleh menggunakan kata yang sudah ada di JavaScript (reserved words).
*/

// var #fullName = 'Defryan'; // Salah
// var 1fullName = 'Defryan'; // Salah
// var fullName = 'Defryan'; // Benar 
// var $fullName = 'Defryan'; // Benar
// var _fullName = 'Defryan'; // Benar 

// var campusPurwadhika = 'Cabang BSD'; // camelCase 
// var campus_purwadhika = 'Cabang BSD'; // snake_case
// var CampusPurwadhika = 'Cabang BSD'; // PascalCase

// var stadiumName = 'Bung Karno';
// var function = '';



// let & const 
let discount = 100;
const point = 1000;



/*
    var 
    - Dapat mendekralasikan variable dengan nama yg sama
    - Valuenya dapat diubah/di update

    let 
    - Tidak dapat mendeklrasikan variable dengan nama yg sama
    - Valuenya dapat diubah/di update

    const
    - Tidak dapat mendeklarasikan varibale dengan nama yg sama
    - Valuenya tetap (tidak bisa diubah/di update)
*/

var student = 'Nata';
var student = 'Andri';
console.log(student);

// let fruit = 'Semangka';
// let fruit = 'Melon';

// const food = 'Ayam Geprek';
// const food = 'Ayam';

let studentName = 'M Defryan';
studentName = 'Ryan';
console.log(studentName);
