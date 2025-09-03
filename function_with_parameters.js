function Greeting(name, address) {
  // name -> parameter
  console.log(`Hello, ${name}! Alamat saya ${address}`); // String template literal
  // console.log('Hello, ' + name + '!. Alamat saya' + address)
}

Greeting('Yuke', 'Pamulang'); // 'Yuke' -> argument
Greeting('Anne', 'Gading Serpong'); // 'Anne' -> argument

/* Function with Default Parameter Value */
function Penjumlahan(num1 = 0, num2 = 0) {
  console.log(num1 + num2);
}

Penjumlahan(10, 5);
Penjumlahan();

/* Rest Parameters */
function CountNumbers(num1, num2, ...nums) {
  console.log(num1);
  console.log(num2);
  console.log(nums);
}

CountNumbers(5, 10, 15, 20, 25, 30, 35, 40);

/* Nested Function */
function GetMessage(firstName) {
  const description = '';

  function SayHello() {
    console.log(`Hello, ${firstName}`); // firstName disebut closure
  }

  function WelcomeMessage() {
    description; // closure
    console.log(`Welcome!`);
  }

  SayHello();
  WelcomeMessage();
}

GetMessage('Defryan');
