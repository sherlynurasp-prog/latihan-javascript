// SOAL 1: Segitiga
console.log("SOAL 1: SEGITIGA");

for (let i = 1; i <= 4; i++) {
    console.log("*".repeat(i));
}


// SOAL 2: Persegi Panjang
console.log("SOAL 2: PERSEGI PANJANG");

for (let i = 1; i <= 4; i++) {
    console.log("****");
}


// SOAL 3: Persegi Panjang Kosong
console.log("SOAL 3: PERSEGI PANJANG KOSONG");

console.log("****");

for (let i = 1; i <= 4; i++) {
    console.log("*      *");
}

console.log("****");


// SOAL 4: Segitiga Sama Sisi
console.log("SOAL 4: SEGITIGA SAMA SISI");

for (let i = 1; i <= 4; i++) {
    console.log(String(i).repeat(i).padStart(4));
}


// SOAL 5: Segitiga Sama Sisi 2
console.log("SOAL 5: SEGITIGA SAMA SISI 2");

let nomorPola = 1;

for (let i = 1; i <= 4; i++) {
    let baris = "";

    for (let j = 1; j <= i; j++) {
        baris += nomorPola;
        nomorPola++;
    }

    console.log(baris);
}


// SOAL 6: Belah Ketupat
console.log("SOAL 6: BELAH KETUPAT");

for (let i = 1; i <= 4; i++) {
    console.log(" ".repeat(4 - i) + "*".repeat(2 * i - 1));
}

for (let i = 3; i >= 1; i--) {
    console.log(" ".repeat(4 - i) + "*".repeat(2 * i - 1));
}


// SOAL 7: Segitiga Jam Pasir
console.log("SOAL 7: SEGITIGA JAM PASIR");

for (let i = 4; i >= 1; i--) {
    console.log(" ".repeat(4 - i) + "*".repeat(2 * i - 1));
}

for (let i = 2; i <= 4; i++) {
    console.log(" ".repeat(4 - i) + "*".repeat(2 * i - 1));
}


// SOAL 8: Segitiga Kosong
console.log("SOAL 8: SEGITIGA KOSONG");

console.log("    *");

for (let i = 2; i <= 4; i++) {
    console.log(
        " ".repeat(5 - i) +
        "*" +
        " ".repeat(2 * i - 3) +
        "*"
    );
}

console.log("***");