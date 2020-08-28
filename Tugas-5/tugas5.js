// soal 1
console.log("---SOAL 1----")

function halo() {
  var say = "Halo Sanbers!";
  return say;
}

console.log(halo());
console.log();

// soal 2
console.log("---SOAL 2----")

function Kalikan(angkaPertama, angkaKedua) {
  return angkaPertama * angkaKedua
}
 
var num1 = 12;
var num2 = 4;

var HasilKali = Kalikan(num1,num2);
console.log(HasilKali);
console.log();

// soal 3
console.log("---SOAL 3----")

function Introduce(nama, umur, alamat, hobi) {
  var hasil = "Nama saya " + nama.concat(", umur saya ",umur," tahun, alamat saya di ", alamat,", dan saya punya hobby yaitu ", hobi,"!");
  return hasil;
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = Introduce(name,age,address,hobby);
console.log(perkenalan);
console.log();


// soal 4
console.log("---SOAL 4----")

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objDaftarPeserta = {
    nama : "Asep",
    "jenis kelamin" : "laki-laki",
    hobi : "baca buku",
    "tahun lahir" : 1992
}

console.log(objDaftarPeserta.nama);
console.log(objDaftarPeserta["jenis kelamin"]);
console.log(objDaftarPeserta.hobi);
console.log(objDaftarPeserta["tahun lahir"]);
console.log()

// soal 5
console.log("---SOAL 5----")

var buah = [
            {nama: "strawberry", warna: "merah", "ada bijinya" : "tidak", harga: "9000"}, 
            {nama: "jeruk", warna: "oranye", "ada bijinya" : "ada", harga : "8000"}, 
            {nama: "Semangka", warna: "Hijau & Merah", "ada bijinya" : "ada", harga: "10000"}, 
            {nama: "Pisang", warna: "Kuning", "ada bijinya" : "tidak", harga : "5000"}
          ];

var pertama = buah.filter(function(item){
   return item.nama == "strawberry";
})

console.debug(pertama);
console.log();


// soal 6
console.log("---SOAL 6----")

dataFilm = [
   {
     nama: 'The King',
     durasi: '2 j 20 m',
     genre: 'Drama sejarah',
     tahun: '2019'
   },
   {
     nama: 'Ready or Not',
     durasi: '1 j 34 m',
     genre: 'Horor/Cerita seru',
     tahun: '2019'
   }
 ];

 dataFilm.push({
     nama: 'Taare Zameen Par',
     durasi: '2 j 45 m',
     genre: 'Anak-anak/Drama',
     tahun: '2007'
 });

 console.log(dataFilm);

