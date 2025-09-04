Hello, Students Purwadhika! 👋☺️😉

✔️Introduction to Typescript

TypeScript adalah bahasa pemrograman open-source yang dikembangkan oleh Microsoft. TypeScript merupakan superset dari JavaScript, yang artinya semua kode JavaScript adalah kode TypeScript. Tetapi TypeScript sendiri menambahkan fitur tambahan seperti static typing.

❓Mengapa menggunakan Typescript?

    ▪️Type Safety
        TypeScript membantu mendeteksi kesalahan sebelum runtime, seperti kesalahan penulisan properti atau pemanggilan fungsi dengan parameter yang salah.

        Contoh:

            function greet(name: string) {
                console.log(`Hello, ${name}`);
            }

            greet(42); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'.

    ▪️Deteksi Error Lebih Dini
        Banyak bug bisa dicegah sejak proses penulisan kode, bukan saat aplikasi sudah dijalankan di produksi.

        Contoh:

            type Product = {
                id: number;
                name: string;
            };

            const product: Product = {
                id: 123,
                name: "Laptop",
                // price: 2000, ❌ Error jika menambahkan properti yang tidak didefinisikan di dalam `type Product`
            };

⌨️Instalasi Typescript

    ▪️Buat folder baru ➡️ Install packages berikut didalam folder tersebut

        npm i -g typescript ts-node

        tsc --init

    ▪️Setup `tsconfig.json`, dan uncomment code berikut:

        "rootDir": "./src",
        "outDir": "./bundle",

    ▪️Running program

        ts-node filename.ts
