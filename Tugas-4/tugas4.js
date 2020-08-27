// SOAL 1
console.log("== SOAL 1 ==");


var satu = 2;
var dua = 20;

console.log("\nLOOPING PERTAMA");
while(satu <= 20) { 
	if (satu % 2 == 0) {
		console.log(satu,"- I Love coding");
	}
 satu++;
}

console.log("\nLOOPING KEDUA");
while(dua > 0) { 
	if (dua % 2 == 0) {
		console.log(dua,"- I will become a frontend developer");
	}
 dua--;
}

// SOAL 2
console.log("\n== SOAL 2 ==");

var bil = 1;
while(bil <= 20) { 
	if (bil % 3 == 0) {
		console.log(bil,"- I love Coding");
	} else if (bil % 2 == 0) {
		console.log(bil,"- Berkualitas");
	} else if(bil % 2 != 0) {
		console.log(bil,"- Santai");
	}
 bil++;
}

// SOAL 3
console.log("\n== SOAL 3 ==");

var pagar;
var bin;

for (pagar = 1; pagar <= 7; pagar++) {
	for(bin = 1; bin <= pagar; bin++) {
		console.log("#");
	}
	console.log("\n");
}

// SOAL 4
console.log("\n== SOAL 4 ==");

var kalimat = "saya sangat senang belajar javascript";
var split = kalimat.split(" ");

console.log(split);

// SOAL 5
console.log("\n== SOAL 5 ==");

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

var urut = daftarBuah.sort();

console.log(urut);