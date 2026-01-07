// Oppgave 1
let text1 = "blabla";
let text2 = "blablabla";
console.log(text1 + " " + text2);
// Oppgave 2
let tall1 = 5;
let tall2 = 2;
let tall3 = 4;
console.log(tall1 + tall2 + tall3);
// Oppgave 3
console.log(tall1 * tall2 * tall3);
// Oppgave 4
let tall4 = prompt("Skriv inn et tall");
if (tall4 > 0) {
  alert("The number is positive");
} else if (tall4 < 0) {
  alert("The number is negative");
} else {
  alert("The nubmer is zero");
}
// Oppgave 5
if (tall1 > tall2) {
  alert("The first number is bigger");
} else if (tall1 < tall2) {
  alert("The second number is bigger");
} else {
  alert("The numbers are equal");
}
// Oppgave 6
if (tall1 > tall2 && tall1 > tall3) {
  alert("The first number is bigger");
} else if (tall1 < tall2 && tall2 > tall3) {
  alert("The second number is bigger");
} else if (tall3 > tall2 && tall1 < tall3) {
  alert("The third number is bigger");
} else {
  alert("Some or all of the numbers are equal");
}
// Oppgave 7
let karakter = prompt("Skriv inn karakter: ");
if (karakter >= 50 && karakter <= 100) {
  alert("Karakter: Bestått");
} else if (karakter < 50 && karakter >= 0) {
  alert("Karakter: Ikke bestått");
} else {
  alert("Skriv inn riktig karakter");
}
// Oppgave 8
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = prompt("Skriv inn dagsnummeret: ");
alert(days[Number(day) - 1]);
// Oppgave 9
let celsius = prompt("Skriv inn temperatur i Celsius: ");
alert("Temperaturen i Fahrenheit er: " + Number(celsius) * 1.8 + 32);
// Oppgave 12
let letter = prompt("Skriv inn et bokstav: ");
const vowels = "aeiouyæøå";
if (vowels.includes(letter)) {
  alert("The letter is a vowel");
} else {
  alert("The input is not a vowel");
}
