// Første oppgave
function first() {
  i = 0;
  while (i < 11) {
    console.log(i);
    i++;
  }
}
// Andre oppgave
function second() {
  i = 2;
  while (i <= 10) {
    console.log(i);
    i += 2;
  }
}
// Tredje oppgave
function third() {
  i = 9;
  while (i >= 1) {
    console.log(i);
    i -= 2;
  }
}
// Fjerde oppgave
function fourth() {
  i = 1;
  summen = 0;
  while (i <= 5) {
    summen += i;
    i++;
  }
  console.log(summen);
}
// Femte oppgave
function fifth() {
  i = 1;
  hashtags = "";
  while (i <= 5) {
    hashtags += "#";
    console.log(hashtags);
    i++;
  }
}
// Sjette oppgave
function sixth() {
  while (true) {
    random = Math.round(Math.random() * 10);
    console.log(random);
    let user = prompt("Gjett et tall(0-10): ");
    if (user == random) {
      alert("Du vant! Tallet var:", random);
      break;
    }
  }
}
