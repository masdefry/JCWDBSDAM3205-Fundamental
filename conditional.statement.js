/*
    CONDITIONAL STATEMENT 
    Pengkondisian, digunakan untuk menentukan code mana yg akan di eksekusi.

    Tipe-tipe: 
    1. If
    2. If - Else
    3. Is - Else If - Else If - ... - Else
*/

// IF: if (condition){ Block of code }
if (10 > 5) {
  console.log('Ok!');
}

let nilai = 85;
if (nilai < 90) {
  console.log('Nilai tidak mencukupi');
}

/*
    IF - ELSE:

        if(condition){
            Block of code 1
        }else{
            Block of code 2
        }
*/

let nilaiExam = 70;

if (nilaiExam > 70) {
  console.log('Lulus');
} else {
  console.log('Tidak Lulus');
}

/*
    IF - ELSE IF - ELSE IF - ... - ELSE:

        if(condition){
            Block of code 1
        }else if(condtion){
            Block of code 2
        }...{
        
        }else{
            Block of code 3    
        }
*/

let fruit = 'Semangka';
if (fruit !== 'Semangka') { // FALSE
  console.log('Ini Bukan Pisang');
} else if (fruit === 'Pisang') { // FALSE
  console.log('Ini Semangka')
} else {
  console.log('Ini Bukan Buah');
};
