// Oppgave 1
console.log("Oppgave 1:");
console.log("ABCDEFGHIJKLMNOPQRSTUVWXYZ".length);
// Oppgave 2
console.log("Oppgave 2:");
function lengthOfString(element) {
  if (element.length == 0) {
    return "Teksten er tom";
  } else {
    return "Teksten er ikke tom";
  }
}
console.log(`${lengthOfString("")}`);
console.log(`JS er dum. ${lengthOfString("JS er dum.")}`);
// Oppgave 3
console.log("Oppgave 3:");
console.log("HELLO WORLD".indexOf("W"));
// Oppgave 4
console.log("Oppgave 4:");
console.log(
  "charAt() er eldre og er støttet med gamle nettlesere. at() er nyere og kan inneholde negativ index.",
);
// Oppgave 5
console.log("Oppgave 5:");
console.log(
  "slice() og substring() er nesten de samme, men substring kan ha byttet start- og sluttverdi f.eks. (5,9) og (9,5), mens slice() kan bruke negative indexer. substr() har ikke sluttverdi, men den har startverdi og lengden.",
);
// Oppgave 6
console.log("Oppgave 6:");
let text1 = "Apple, Banana, Kiwi";
console.log(text1.slice(7, 13));
// Oppgave 7
console.log("Oppgave 7:");
console.log(text1.substring(7, 13));
// Oppgave 8
console.log("Oppgave 8:");
console.log(text1.substr(7, 6));
// Oppgave 9
console.log("Oppgave 9:");
let text4 = "Hello World!";
console.log(text4.toUpperCase());
// Oppgave 10
console.log("Oppgave 10:");
console.log(text4.toLowerCase());
// Oppgave 11
console.log("Oppgave 11:");
let text6 = "      Røyken Videregående Skole      ";
console.log(text6.trim().split(" "));
// Oppgave 12
console.log("Oppgave 12:");
const palin = "radar";
function palindrome(element) {
  if (element == element.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome(palin));
// Oppgave 13
console.log("Oppgave 13:");
function sortAlphabet(element) {
  return element.split("").sort().join("");
}
console.log(sortAlphabet("serdar"));
// Oppgave 14
console.log("Oppgave 14:");
const a = "Welcome to Norge";
const b = /o/g;
console.log(a.match(b).length);
// Utfordring 1
console.log("Utfordring 1:");
const text2 = "ABCAABCAAADA";
const lengden = 3;
let startverdi = 0;
let sluttverdi = lengden;
for (let index = 0; index < text2.length; index += lengden) {
  console.log(text2.slice(startverdi, sluttverdi));
  startverdi += lengden;
  sluttverdi += lengden;
}
