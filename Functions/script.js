// Oppgave 1
function sum_three() {
  let tall1 = Number(prompt("Skriv inn første tall:"));
  let tall2 = Number(prompt("Skriv inn andre tall:"));
  let tall3 = Number(prompt("Skriv inn tredje tall:"));
  let sum = tall1 + tall2 + tall3;
  alert(`${tall1} + ${tall2} + ${tall3} = ${sum}`);
}
// Oppgave 2
function compare() {
  let tall1 = Number(prompt("Skriv inn første tall:"));
  let tall2 = Number(prompt("Skriv inn andre tall:"));
  if (tall1 > tall2) {
    alert(`Tallet 1: ${tall1} er større enn tallet 2: ${tall2}`);
  } else if (tall2 > tall1) {
    alert(`Tallet 2: ${tall2} er større enn tallet 1: ${tall1}`);
  } else {
    alert("Tallene er like");
  }
}
// Oppgave 3
function calculator() {
  let tall1 = Number(prompt("Skriv inn første tall:"));
  let tall2 = Number(prompt("Skriv inn andre tall:"));
  let operator = prompt("Skriv inn operatoren(+, -, /, *)");
  if (operator == "+") {
    resultat = tall1 + tall2;
  } else if (operator == "-") {
    resultat = tall1 - tall2;
  } else if (operator == "/") {
    resultat = tall1 / tall2;
  } else if (operator == "*") {
    resultat = tall1 * tall2;
  }
  alert(resultat);
}
// Oppgave 4
function rndm() {
  let tall1 = Number(prompt("Skriv inn første tall:"));
  let tall2 = Number(
    prompt("Skriv inn andre tall (må være større enn det første tallet)"),
  );
  if (tall1 > tall2) {
    return;
  }
  let random_tall = Math.round(Math.random() * tall2);
  while (random_tall < tall1) {
    random_tall = Math.round(Math.random() * tall2);
  }
  alert(`Tilfeldig tall mellom to verdier er ${random_tall}`);
}
// Oppgave 5
function rndm_sum() {
  let sum = 0;
  let numbers = [];
  for (let i = 0; i < 10; i++) {
    let tall = Math.ceil(Math.random() * 20);
    numbers.push(` ${tall}`);
    sum += tall;
  }
  alert(`De tilfeldige tallene er:${numbers}. Summen er ${sum}.`);
}
