/*
    LOOPING
    Digunakan untuk pengulangan. Tipe-tipe looping: 

    1. While
    2. Do - While
    3. For Loop
*/
const text = 'Purwadhika School';
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);

/*
    WHILE

    Syntax:

    while(condition){
        Block of code
    }
*/
let startLooping = 1; // 1 -> 2 -> 3 -> 4 -> 5 -> 6
while(startLooping <= 5){ // 6 <= 5? FALSE
    console.log('Loop');

    startLooping++;
}



let i = 3; 
while(i <= 5){
    console.log(i);

    i++;
}



/*
    DO-WHILE

    Syntax:
    do{
        Block of code
    }while(condition)
*/

let j = 1; // 1 -> 2 -> 3 -> 4 -> 5 -> 6

do{
    console.log('Web Development');
    j++;
}while(j <= 5); // 6 <= 5? FALSE



/*
    FOR-LOOP
    Looping yg menyerupai looping while

    Syntax: 

    for(startCondition; condition; exitWay){
        Block of code
    }
*/

for(let i=1; i <= 5; i++){
    console.log('Purwadhika School');
}



















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