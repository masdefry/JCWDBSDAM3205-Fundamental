/*
    SPREAD OPERATOR
*/
const products1 = ['Apel', 'Melon', 'Mangga'];
const products2 = ['Samsung', 'Apple', 'Oppo'];
const products = [...products1, ...products2];
console.log(products);

const user = {
  username: 'defryan',
  password: 'abc12345',
};

const userProfile = {
  address: 'Bogor',
  phoneNumber: '081212121221',
};

const userData = {
  ...user,
  ...userProfile,
};
console.log(userData);

// Copy by value & copy by reference
const alphabets1 = ['a', 'b', 'c'];
const newAlphabets = [...alphabets1];
newAlphabets[0] = 'zzz';
console.log(newAlphabets);
console.log(alphabets1);



