// SOAL 1
console.log("\n== SOAL 1 ==");

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var kataSemua = kataPertama.concat(" ",kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1)," ", kataKetiga," ", kataKeempat.toUpperCase());

console.log(kataSemua);


// SOAL 2
console.log("\n== SOAL 2 ==");

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var tampilkansemua = kataPertama.concat(" ",kataKedua," ",kataKetiga," ",kataKeempat);
console.log("Semua Angka:",tampilkansemua);

var satu = parseInt(kataPertama);
var dua = parseInt(kataKedua);
var tiga = parseInt(kataKetiga);
var pat = parseInt(kataKeempat);

var hasil = satu + dua + tiga + pat;
console.log("Dijumlahkan jadi: ", hasil);

// SOAL 3
console.log("\n== SOAL 3 ==");

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); // do your own! 
var kataKetiga = kalimat.substring(15, 18); // do your own! 
var kataKeempat = kalimat.substring(19, 24); // do your own! 
var kataKelima = kalimat.substring(25, 31); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// SOAL 4
console.log("\n== SOAL 4 ==");

var nilai;

// misal nilai 75
nilai = 75;
console.log("Misal Nilai:",nilai);

if (nilai >= 80) {
  console.log("A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("B");
} else if(nilai >=60 && nilai < 70) {
	console.log("C");
} else if(nilai >=50 && nilai < 60) {
	console.log("D");
} else if(nilai < 50) {
	console.log("E");
}


// SOAL 5
console.log("\n== SOAL 5 ==");

var tanggal = 13;
var bulan = 12;
var tahun = 1998;
var bul;

switch (bulan) {
  case 12:
    bul = "Desember";
    break;
}

console.log(tanggal, " ", bul, " ", tahun);

