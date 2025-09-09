function getDataPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
  })
    .then((response) => {
      return response.json(); // Mendapatkan data posts. `.json` sebuah method Javascript yg berfungsi untuk mengkonversi format JSON menjad Javascript object
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

getDataPosts();
