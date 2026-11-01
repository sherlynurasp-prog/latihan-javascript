// SOAL 1: FizzBuzz

console.log("SOAL 1: FizzBuzz");

function fizzBuzz(angka) {
    if (angka % 15 === 0) {
        console.log("FizzBuzz");
    } else if (angka % 3 === 0) {
        console.log("Fizz");
    } else if (angka % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(angka);
    }
}

for (let i = 1; i <= 15; i++) {
    fizzBuzz(i);
}


// SOAL 2: Cek Genap & Ganjil

console.log("SOAL 2: Genap dan Ganjil");

function cekBilangan(angka) {
    if (angka % 2 === 0) {
        console.log(angka + " adalah bilangan Genap");
    } else {
        console.log(angka + " adalah bilangan Ganjil");
    }
}

cekBilangan(8);
cekBilangan(5);


// SOAL 3: Balik String

console.log("SOAL 3: Membalik String");

function balikString(teks) {
    return teks.split("").reverse().join("");
}

console.log(balikString("SHERLY"));