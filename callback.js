/*
    CALLBACK

    Function yg dijadikan argument oleh function lain
*/

/*
    Ex. Buatlah 2 buah function, dimana: 
        - Function 1: Menghitung penjumlahan 2 buah bilangan
        - Function 2: Menampilkan hasil penjumlahan 
*/
function Penjumlahan(num1, num2) {
  return num1 + num2;
}

function Output(result) {
  console.log(result);
}

let resultPenjumlahan = Penjumlahan(3, 5);
Output(resultPenjumlahan); // Output(8)

/* 
    Indirect Callback
*/
{
  function Penjumlahan(num1, num2, cb) {
    // num1 = 3, num2 = 5, cb = Output
    return cb(num1 + num2); // Output(3 + 5)
  }

  function Output(result) {
    console.log(result);
  }

  Penjumlahan(3, 5, Output);
}

/* 
    Direct Callback
*/
{
  function Penjumlahan(num1, num2, cb) {
    // num1 = 3, num2 = 5, cb = Output
    return cb(num1 + num2); // Output(3 + 5)
  }

  Penjumlahan(3, 5, (result) => {
    console.log(result);
  });
}

/*
    💡
    Dari case di atas, kita tidak dapat melihat perbedaan antara function yang dibuat dengan maupun tanpa callback.
    Namun, perbedaan akan terlihat ketika terdapat proses asynchronous yang membutuhkan waktu untuk menyelesaikan tugasnya.
*/

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function DeleteData(cb) {
  setTimeout(function () {
    data.pop();
    cb();
  }, 5000);
}

function ReadData() {
  setTimeout(function () {
    console.log(data);
  }, 3000);
}

DeleteData(
    DeleteData(
        DeleteData(
            ReadData()
        )
    )
)
// const DeleteData = () => {
//   setTimeout(() => {
//     data.pop();
//   }, 5000);
// }

// const ReadData = (cb) => {
//   setTimeout(() => {
//     cb();
//     console.log(data);
//   }, 3000);
// }

// ReadData(DeleteData);
