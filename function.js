/*
    FUNCTION

    Menampung baris code yg dibuat. Supaya code bisa re-usable.
    Tipe-tipe function:
    1. Function Declarative
    2. Function Expression
    3. Function Arrow
*/

/* Function Declarative */
function NamaFunction() {
  // Block of code
}

function LoopingProducts() {
  const products = ['Samsung', 'Nokia', 'Blackberry', 'Oppo'];
  // for of
  for (let bebas of products) {
    console.log(bebas);
  }
};

/* Function Expression */
const functionExpression = function(){
    // Block of code
}
functionExpression();

/* Function Arrow */
const function_arrow = () => {
    // Bock of code
}

function_arrow();