/* 
    DESTRUCTURE ASSIGNMENT

    Mengeluarkan property dari dalam object untuk disimpan kedalam tiap-tiap variable
*/

const product = {
  name: 'Apel',
  price: 15000,
  stock: 10,
};
const { stock, price, name } = product;
console.log(name, price, stock);

const scores = [100, 80, 90];
const [score1, score2, score3] = scores;
console.log(score1, score2, score3);
