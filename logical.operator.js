/*
    LOGICAL OPERATOR
    Digunakan untuk membandingkan lebih dari 1 comparison. Mengembalikan nilai boolean
    Tipe-tipe:
    1. OR (||)
    2. AND (&&)
    3. NOT/Negasi (!)
*/

/*
    OR
    - Apabila salah 1 kondisi bernilai true, maka hasil akhir akan true
    - Ingin hasil akhir bernilai flase, maka seluruh kondisi harus bernilai false
*/

console.log(1 === 1 || 2 === 2); // TRUE || TRUE -> TRUE
console.log(1 == '1' || '1' === 'i') // TRUE || FALSE -> TRUE
console.log('abcd' === 'dcba' || 1 !== 1) // FALSE || FALSE -> FALSE
console.log(111 == 111 || 'a' === 'A' || 3 !== '3') // TRUE -> TRUE

/*
    AND
    - Apabila salah 1 kondisi bernilai false, maka hasil akhir akan false
    - Ingin hasil akhir bernilai true, maka seluruh kondisi harus bernilai true
*/
console.log(1 == 1 && 3 == 3) // TRUE && TRUE -> TRUE
console.log(1 === '1' && 3 === '3') // FALSE && FALSE -> FALSE

/*
    NOT/Negasi
*/
console.log(!(3 === '3') || !(1 == '1')) // TRUE || FALSE -> TRUE