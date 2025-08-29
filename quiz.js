// 1
let description = 'Lorem ipsum dolor'; // .length 17, lastIndex 16

// console.log(description.slice(0, 1));
// console.log(description.slice(1, 2));
// console.log(description.slice(2, 3));

for (let i = 0; i < description.length; i++) {
  console.log(description.slice(i, i + 1));
}

// const num = 10;
// num++; // num = num + 1;
// num + 1;



// 2 
{
    let start = 1;

    do{
        console.log('Hello')
        start += 3;
    }while(start < 1);
}

{
    let start = 1;

    while(start < 1){
        console.log('Hi!')
        start += 3;
    }
} 



// 3. Hidden phone number
// Buatlah program untuk meng-hide 3 karakter terakhir dari sebuah nomor hp
// Ex. phoneNumber = 62821335719893 -> Tipe data: number
//     output: '6281335719***' -> Tipe data: string

const angka = 6281335;