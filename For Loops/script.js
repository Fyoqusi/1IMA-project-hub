// First task
for (let num = 0; num < 10; num++) {
  console.log("Hello World!");
}
// Second task
let fifty = [];
for (let num = 1; num <= 50; num++) {
  fifty += num;
}
console.log(fifty);
// Third task
let summen = 0;
for (let num = 1; num <= 10; num++) {
  summen += num;
}
console.log(summen);
// Fourth task
let hashtags = "";
for (let hash = 1; hash <= 4; hash++) {
  console.log("#".repeat(hash));
}
// Fifth task
let evens = [];
for (let num = 2; num <= 50; num += 2) {
  evens += num;
}
console.log(evens);
// Sixth task
let fifteens = [];
for (let num = 15; num <= 100; num += 15) {
  fifteens.push(num);
}
console.log(fifteens);
// Seventh task
let tall = [124, 12, 222, 21, 54];
let largest = tall[0];

for (let num = 1; num < tall.length; num++) {
  if (tall[num] > largest) {
    largest = tall[num];
  }
}
console.log(largest);
// Eighth task
for (h = 6; h >= 1; h--) {
  console.log(`<h${h}>Røyken vgs er best.</h${h}>`);
}
