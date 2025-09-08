const data = [1, 2];

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

async function Main() {
  try {
    const response1 = await DeleteData();
    console.log(response1);

    const response2 = await DeleteData();
    console.log(response2);

    const response3 = await DeleteData();
    console.log(response3);

    const response4 = await ReadData();
    console.log(response4);
  } catch (error) {
    console.log(error);
  }
}

Main();



// 1. Riset fetch
// 2. Gunakan method fetch untuk ngambil data ke api berikut: https://jsonplaceholder.typicode.com/posts