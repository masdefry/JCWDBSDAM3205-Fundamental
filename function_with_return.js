/*
    FUNCTION WITH RETURN 

    Function yang mengembalikan nilai. 
    Umumnya digunakan apabila suatu nilai dari function akan 
    digunakan/diolah di function lainnya. 
*/

function Greeting(fullName) {
  console.log('>>>'); 
  return `Hello, ${fullName}`;
  console.log('>>>'); // Unused code -> Tidak akan di eksekusi oleh JS
}

const resultGreeting = Greeting('Defryan'); // `Hello, Defryan`
console.log(resultGreeting);
