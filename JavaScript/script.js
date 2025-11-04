function first() {
  let input1 = document.getElementById("first-text").value;
  let input2 = document.getElementById("second-text").value;
  const div1 = document.getElementById("div1");
  div1.append(input1, " ", input2, " ");
}
function second() {
  let input1 = document.getElementById("ifpositive").value;
  if (input1 > 0) {
    alert("The number is positive");
  } else if (input1 < 0) {
    alert("The number is negative");
  } else {
    alert("The nubmer is zero");
  }
}
function third() {
  let input1 = document.getElementById("first-number").value;
  let input2 = document.getElementById("second-number").value;
  if (input1 > input2) {
    alert("The first number is bigger");
  } else if (input1 < input2) {
    alert("The second number is bigger");
  } else {
    alert("The numbers are equal");
  }
}
function fourth() {
  let input1 = document.getElementById("firstofthree").value;
  let input2 = document.getElementById("secondofthree").value;
  let input3 = document.getElementById("thirdofthree").value;
  if (input1 > input2 && input1 > input3) {
    alert("The first number is bigger");
  } else if (input1 < input2 && input2 > input3) {
    alert("The second number is bigger");
  } else if (input3 > input2 && input1 < input3) {
    alert("The third number is bigger");
  } else {
    alert("Some or all of the numbers are equal");
  }
}
function fifth() {
  let karakter = document.getElementById("karakter").value;
  if (karakter >= 50 && karakter <= 100) {
    alert("Karakter: Bestått");
  } else if (karakter < 50 && karakter >= 0) {
    alert("Karakter: Ikke bestått");
  } else {
    alert("Skriv inn riktig karakter");
  }
}
function sixth() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = document.getElementById("day").value;
  alert(days[Number(day) - 1]);
}
function seventh() {
  let celsius = document.getElementById("celsius").value;
  document.getElementById("fahrenheit").innerHTML = Number(celsius) * 1.8 + 32;
  if (celsius >= 20) {
    document.getElementById("fahrenheit").style.color = "red";
  } else if (celsius < 20) {
    document.getElementById("fahrenheit").style.color = "rgb(0, 115, 255)";
  }
}
function tenth() {
  let letter = document.getElementById("letter").value.toLowerCase();
  const vowels = "aeiouyæøå";
  if (vowels.includes(letter)) {
    alert("The letter is a vowel");
  } else {
    alert("The input is not a vowel");
  }
}
function eleventh() {
  let color = document.getElementById("color").value;
  document.getElementById("coloured-button").style.backgroundColor = color;
}
