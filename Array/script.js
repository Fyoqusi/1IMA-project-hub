// Oppgave 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(numbers[0]);

// Oppgave 2
console.log(numbers[numbers.length - 1]);

// Oppgave 3
let summen = 0;
numbers.forEach((element) => {
  summen += element;
});
console.log(summen);

// Oppgave 4
const animals = ["katt", "hund", "fugl", "fisk"];
console.log(animals.indexOf("fugl"));

// Oppgave 5
const numbers1 = [2, 5, 8, 2, 4, 2, 9];
console.log(numbers1.lastIndexOf(2));

// Oppgave 6
const fruits = ["eple", "banan", "appelsin"];
fruits.push("druer");
fruits.shift();
console.log(fruits);

//Oppgave 7
const numbers2 = [12, 5, 8, 1, 19, 3];
console.log(numbers2.sort());

// Oppgave 8
const List1 = [1, 2, 3, 4, 5];
const List2 = [0, 1, 2, 3, 4];
const list3 = [];
for (let i = 0; i < List1.length; i++) {
  list3.push(List1[i] + List2[i]);
}
console.log(list3);

// Utfordring 1
const numbers3 = [1, 5, 8, 3, 6, 9, 3, 5, 8, 12, 54];
const partall = [];
numbers3.forEach((element) => {
  if (element % 2 == 0) {
    partall.push(element);
  }
});
console.log(partall);

// Utfordring 2
let numm = 0;
numbers3.forEach((element) => {
  if (element > numm) {
    numm = element;
  }
});
console.log(numm);

// Utfordring 3
let num = 0;
numbers3.forEach((element) => {
  if (element > num) {
    nextbiggest = num;
    num = element;
  }
});
console.log(nextbiggest);

// Utfordring 4
let biggest = numbers3[0];
let smallest = numbers3[0];
numbers3.forEach((element) => {
  if (element >= biggest) {
    biggest = element;
  }
  if (element <= smallest) {
    smallest = element;
  }
});
console.log(biggest);
console.log(smallest);

// Utfordring 5
console.log(numbers3.sort((a, b) => a - b));
