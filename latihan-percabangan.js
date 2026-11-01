// SOAL 1: Sistem Penilaian Sederhana

function cekNilai(nilai) {
    if (nilai >= 75) {
        console.log("Lulus");
    } else {
        console.log("Remedial");
    }
}

cekNilai(80);
cekNilai(60);


// SOAL 2: Konversi Kode Peran (Role)

function cekRole(kode) {
    switch (kode) {
        case "A":
            console.log("Admin");
            break;

        case "U":
            console.log("User");
            break;

        default:
            console.log("Guest");
    }
}

cekRole("A");
cekRole("U");
cekRole("X");