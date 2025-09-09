/*
    VARIABLE
*/
const fullName = 'Defryan'; // types: any === bohong
const name: string = 'Defryan';
const isGraduated: boolean = true;
const age: number = 30;

let phoneNumber: string | number = '0812111144444';
phoneNumber = 628111114444;
console.log(phoneNumber);

/*
    ARRAY
*/
// Array yg Tipe Datanya Seragam/Sama
const fruits: string[] = ['Pisang', 'Anggur', 'Melon'];

// Array Tuples (Tipe data didalam array tsb berbeda-beda)
const randomArr: [number, string, boolean, undefined, string] = [
  1,
  'Pisang',
  true,
  undefined,
  'abc',
];
const randomItems: any[] = [1, '2', true, undefined];

/*
    FUNCTION
*/
function Greeting(username: string, hobby: string, age: number) {
  return `Hello, ${username}`;
}

function Penjumlahan(num1: number, num2: number) {
  return num1 + num2; // Join
}
Penjumlahan(1, 2);

/*
    OBJECT
*/
const student: { fullName: string; hobby: string; address: boolean } = {
  fullName: '',
  hobby: '',
  address: false,
};

/*
    TYPE & INTERFACE 
*/

type Product = {
  name: string;
  price: number;
  stock: number;
};

interface IProduct {
  name: string;
  price: number;
  stock: number;
}

const product: IProduct = {
  name: 'Apel',
  price: 10000,
  stock: 10,
};

//                              Type vs Interface
//  Object                  :    OK         OK
//  Merge                   :    x          OK
// type Song = {
//     artist: string;
// };

// type Song = {
//     releaseYear: number
// };

interface Song {
  artist: string;
}

interface Song {
  releaseYear: number;
}

const song: Song = {
  artist: '',
  releaseYear: 0,
};

//  Intersection & Union    :    OK         x
type A = {
  id: number;
  prop1: string;
};

type B = {
  id: number;
  prop2: string;
};

const objIntersection: A & B = {
  id: 1,
  prop1: '',
  prop2: '',
};

const objUnion: A | B = {
  id: 3,
  prop1: '',
  prop2: '',
};

//  Extend                  :    x          OK (Jelaskan sambil jalan)

// ➡️ ADVANCE TYPE
/*
    Partial     : Partial<T>
    Required    : Required<T>
    Readonly    : Readonly<T>
    Pick        : Pick<T, K>
    Omit        : Omit<T, K>
    Record      : Record<K, T>
    Extract     : Extract<T, U>
    Exclude     : Exclude<T, U>
*/

/*
 💡Use Case: 
    Kita ingin membuat interface baru berdasarkan interface yang sudah ada,
    namun tidak diperbolehkan merubah interface aslinya. Alasannya - karena 
    interface tersebut berasal dari library/framework, atau interface tersebut
    bagian dari codebase lama yang apabila diubah dapat berdampak pada bagian lain dari aplikasi.
*/

// PARTIAL: Membuat interface menjadi opsional

interface User {
  username: string;
  email: string;
  phoneNumber: number;
  address: string;
  password: string;
  birthDate: string;
}

const newUser: Partial<User> = {
  // Dengan di partial, maka semua props menjadi opsional
  username: '',
  email: '',
  password: '',
};

// REQUIRED
const newUser1: Required<User> = {
  username: '',
  email: '',
  password: '',
  phoneNumber: 0,
  address: '',
  birthDate: '',
};

// READONLY
const newUser2: Readonly<User> = {
  username: '',
  email: '',
  password: '',
  phoneNumber: 0,
  address: '',
  birthDate: '',
};
newUser2.username = 'abc';

// PICK: Ngambil property yg dibutuhkan
const newUser3: Pick<User, 'username' | 'email' | 'password'> = {
  username: '',
  email: '',
  password: '',
};

// OMIT: Kebalikan dari PICK (pengecualian)
const newUser4: Omit<User, 'birthDate'> = {
  username: '',
  email: '',
  password: '',
  phoneNumber: 0,
  address: '',
};
