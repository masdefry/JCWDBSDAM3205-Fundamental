/*
    PROMISE (JANJI)

    Menggunakan method promis, ada 2 parameter yg bisa digunakan: 
    1. Resolve  : Parameter yg digunakan apabila proses promise nya berhasil
    2. Reject   : Paramter yg digunakan apabila proses promise nya gagal
*/

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function DeleteData() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (data.length > 0) {
        data.pop();
        resolve('Delete data berhasil');
      } else {
        reject('Data sudah habis');
      }
    }, 5000);
  });
}

function ReadData() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(data);
    }, 3000);
  });
}

// Promise Chaining 
DeleteData()
  .then((response) => {
    console.log(response); // 'message'
    return DeleteData();
  })
  .then((response) => {
    console.log(response);
    return DeleteData();
  })
  .then((response) => {
    console.log(response);
    return ReadData();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {});
