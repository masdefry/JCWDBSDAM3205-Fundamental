Hello, Students Purwadhika! 👋☺️😉

✔️Object Oriented Programming (OOP)

OOP atau pemrograman berorientasi object adalah teknik dalam menuliskan program yang berfokus pada object dan class untuk mengorganisir code. Mengapa kita butuh OOP?

✅ Struktur code lebih rapi dan modular
code dapat dipecah menjadi unit-unit kecil (class dan object) yang merepresentasikan entitas nyata atau logika tertentu, sehingga mudah diatur.

✅ Mendukung reusabilitas code
Class dan object bisa digunakan kembali di bagian lain program tanpa perlu menulis ulang.

✅ Meningkatkan skalabilitas code
Struktur OOP mempermudah pengembangan aplikasi yang lebih besar dan kompleks karena modul-modulnya terpisah dan bisa berkembang secara independen.

✅ Mudah dikembangkan dan dimaintain
Perubahan pada satu bagian code tidak akan berdampak besar pada bagian lain jika struktur OOP diterapkan dengan baik (encapsulation).
Ini membantu dalam pengujian dan pemeliharaan code.

✔️Object

Object adalah struktur data yang digunakan untuk menyimpan data yang memiliki banyak entitas dan juga dapat digunakan untuk menyimpan fungsi (yg sering disebut method). Object terdiri dari pasangan key dan value dimana gabungan key dan value akan membentuk sebuah propterty.

Dalam JavaScript, object adalah tipe data non-primitive yang sangat fleksibel dan sering digunakan untuk merepresentasikan data yang kompleks.

💡Case: Kita memiliki entitas data student, seperti name, age, dan email. Sebelum mengenal object, mungkin
cara penyimpanan yang kita lakukan seperti pada code berikut:

    let name = 'Defryan';
    let age = 25;
    let email = 'defryan@gmail.com';

Dengan menggunakan object, kita dapat menyimpan entitas name, age, dan email kedalam sebuah pembungkus yaitu object:

    let student = {
        name: 'Defryan',
        age: 25,
        email: 'defryan@gmail.com'
    };

    🔹Object Declaration

        let book = {
            title: 'Book A',
            author: 'Defryan',
            releaseYear: 2000
        };

    🔹Accessing Value

        book.title;
        book.author;
        book.releaseYear;

        ___ or ___

        book['title'];
        book['author'];
        book['releaseYear'];

    🔹Update Property Value

        book.title = 'Book B';

    🔹Delete Property Value

        delete book.title;

    🔹Optional Chaining
        Merupakan fitur di Javascript yang memungkinkan kita untuk mengakses nested property dengan aman.
        Kita bisa ambil dari contoh berikut:

            Anggaplah response data dari API yang seharusnya seperti pada code berikut:

            const response = {
                user: {
                    profile: {
                    name: "Defryan"
                    }
                }
            };

            Namun response yang kita dapat seperti pada code berikut:

            const response = {
                user: {}
            };

            const name = response.user.profile; // ⁉️Akan menghasilkan undefined
            const name = response.user.profile.name; // ❌ Akan menyebabkan error

            Maka cara yang paling aman yaitu dengan menggunakan optional chaining (?) seperti contoh berikut:

            const name = response.user?.profile?.name; // ✅ Menghasilkan undefined jika tidak ada

    🔹Destructure Object

        const student = {
            name: 'Defryan',
            age: 20
        };

        const { name, age } = student;

    🔹Spread Operator
        Spread operator (...) adalah fitur di JavaScript yang digunakan untuk menyalin, menggabungkan, atau menyebarkan elemen dari array atau properti dari objek ke tempat lain.

        ▪️Array Spread

            const alphabets = ['a', 'b', 'c'];
            const newAlphabets = [...alphabets];

        ▪️Object Spread

            const student = {
                name: 'Defryan',
                age: 20
            };
            const newStudent = { ...student }

        Kegunaan dari spread operator:

            ✅ Menyalin array atau objek (shallow copy)

                const original = [1, 2, 3];
                const copy = [...original];

            ✅ Menggabungkan beberapa array atau objek

                const a = [1, 2];
                const b = [3, 4];
                const combined = [...a, ...b]; // [1, 2, 3, 4]

            ✅ Menimpa properti objek dengan value baru

                const user = { name: 'Defryan', age: 25 };
                const updatedUser = { ...user, age: 26 };

                console.log(updatedUser); // { name: 'Defryan', age: 26 }

            ✅ Meng-copy property object dan menambahkan property baru

                const user = { name: 'Defryan', age: 25 };
                const newUser = { ...user, hobby: 'Coding', address: 'Bogor, Kab.' }

✔️Class

Class merupakan template untuk membuat object. Didalam konteks OOP, class dapat digunakan untuk
mendefinisikan attribute dan method kedalam satu wadah. Class sangat mendukung prinsip OOP, yaitu:

    ▪️Inheritance
        Fitur dalam OOP (Object-Oriented Programming) yang memungkinkan sebuah class (child/anak) untuk mewarisi sifat (attribute dan method) dari class lain (parent/induk). Alasan mengapa kita butuh inheritance?

            ✅ Menghindari duplikasi code.

            ✅ Membuat code lebih terstruktur dan mudah dikembangkan.

            ✅ Memungkinkan modifikasi tanpa merusak code yang sudah ada.

    ▪️Encapsulation
        Encapsulation adalah konsep dalam Object-Oriented Programming (OOP) yang menyatukan data (attribute) dan method (function) dalam satu kesatuan, yaitu class, serta membatasi akses langsung ke data tersebut dari luar class. Tujuan utamanya adalah melindungi data agar tidak diubah sembarangan, menjaga integritas data, dan menyederhanakan penggunaan objek.

            ✅ Keamanan Data
            Mencegah perubahan langsung terhadap data dari luar class.

            ✅ Kontrol Akses
            Kita bisa mengatur akses siapa yang boleh baca/tulis data (dengan private, protected, public).

            ✅ Pemeliharaan
            Perubahan internal tidak memengaruhi code lain selama interface tetap sama.

            ✅ Reusabilitas dan Abstraksi
            Objek bisa digunakan tanpa tahu detail implementasinya.

    ▪️Polymorphism
        Polymorphism adalah kemampuan objek berbeda untuk merespons method dengan nama yang sama tapi perilaku berbeda.

            ✅ Fleksibilitas dalam menangani objek dari berbagai class secara seragam.

            ✅ Memungkinkan penggunaan satu interface (method) dengan implementasi berbeda.
