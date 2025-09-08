let user = {
  username: 'mdefryan',
  password: 'abc12345',
  email: 'mdefryan@yahoo.com',
};

let profile = new Object();
profile.fullName = 'M Defryan';
console.log(user);
console.log(profile);

let userApp = {
  username: 'ryandefryan', // Property
  greet() {
    // Method
    console.log('Hello, World!');
  },
};
console.log(userApp.username);
console.log(userApp['username']);

userApp.greet();
userApp['greet']();

userApp.username = 'mdefryan';
console.log(userApp);

delete userApp.username;
console.log(userApp);

const person = {
  name: 'Marceng',
  hobby: 'Sepakbola',
};
person.age = 24;
console.log(person);

/* Optional Chaining: ? */
const admin = {};

console.log(admin.username); // undefined
console.log(admin?.fullName?.firstName); // admin.fullname -> undefined ---> undefined.fristName -> Error

