// Oppgave 1
let isOdd = Number(prompt("Skriv inn tall: "));
if (isOdd % 2 == 0) {
  alert(`${isOdd} er partall`);
} else {
  alert(`${isOdd} er oddetall`);
}
// Oppgave 2
let alder = Number(prompt("Skriv inn alder: "));
if (alder < 13 && alder > 0) {
  alert("Personen er barn");
} else if (alder < 20 && alder >= 13) {
  alert("Personen er tenåring");
} else if (alder < 65 && alder >= 20) {
  alert("Personen er voksen");
} else if (alder > 64 && alder <= 120) {
  alert("Personen er pensjonist");
} else {
  alert("Skriv inn riktig alder");
}
// Oppgave 3
let username = prompt("Skriv inn brukernavn: ");
let password = prompt("Skriv inn passord: ");
if (username == "admin" && password == "admin") {
  alert("Access granted");
} else {
  alert("Access denied");
}
// Oppgave 4
month = prompt("Skriv inn månedstall (1 for januar, 2 for februar): ");
if ((month >= 1 && month <= 2) || month == 12) {
  alert("Måneden er vinter");
} else if (month >= 3 && month <= 5) {
  alert("Måneden er vår");
} else if (month >= 6 && month <= 8) {
  alert("Måneden er sommer");
} else if (month >= 9 && month <= 11) {
  alert("Måneden er høst");
} else {
  alert("Måtte skrive riktig måned");
}

// Oppgave 5
height = Number(prompt("Skriv inn din høyde i cm: ")) / 100;
weight = Number(prompt("Skriv inn din vekt i kg: "));

bmi = (weight / height ** 2).toFixed(2);
if (bmi < 18.5) {
  alert(`${bmi} Undervekt`);
} else if (bmi < 25) {
  alert(`${bmi} Normal vekt`);
} else if (bmi >= 25) {
  alert(`${bmi} Overvekt`);
} else if (bmi >= 30) {
  alert(`${bmi} Fedme`);
}
// Oppgave 6
const kategori = prompt("Er du barn, student, voksen eller pensjonist?");
const kategori_lowercase = kategori.toLowerCase;
var pris = 200;
console.log(kategori_lowercase);
if (kategori_lowercase == "barn" || kategori_lowercase == "pensjonist") {
  pris *= 0.7;
  alert(`Prisen på billetten er ${pris} kr.`);
} else if (kategori_lowercase == "student") {
  pris *= 0.8;
  alert(`Prisen på billetten er ${pris} kr.`);
} else if (kategori_lowercase == "voksen") {
  alert(`Prisen på billetten er ${pris} kr.`);
} else {
  alert("Skriv inn riktig kategori");
}
