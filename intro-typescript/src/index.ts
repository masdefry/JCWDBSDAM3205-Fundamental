/*
    VARIABLE
*/
const fullName = 'Defryan'; // types: any === bohong
const name: string = 'Defryan';
const isGraduated: boolean = true;
const age: number = 30;

let phoneNumber: string | number  = '0812111144444';
phoneNumber = 628111114444;
console.log(phoneNumber);

/*
    ARRAY
*/
// Array yg Tipe Datanya Seragam/Sama
const fruits: string[] = ['Pisang', 'Anggur', 'Melon'];

// Array Tuples (Tipe data didalam array tsb berbeda-beda)
const randomArr: [number, string, boolean, undefined, string] = [1, 'Pisang', true, undefined, 'abc'];
const randomItems: any[] = [1, '2', true, undefined];

/*
    FUNCTION
*/
function Greeting(username: string, hobby: string, age: number){
    return `Hello, ${username}`
}

function Penjumlahan(num1: number, num2: number){
    return num1 + num2 // Join
}
Penjumlahan(1, '3');