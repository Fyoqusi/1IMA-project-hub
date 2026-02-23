const buttonCheck = document.getElementById("check");
buttonCheck.onclick = check;
const buttonRandom = document.getElementById("guessRandom");
buttonRandom.onclick = userRandomNumber;
let inputField = document.getElementById("input");
inputField.value = "";
inputField.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    check();
    inputField.value = "";
  }
});
let guessCounter = 0;
let spanCompare = document.getElementById("compare");
let randomNumber = Math.floor(Math.random() * 100) + 1;

async function compare(inputValue) {
  guessCounter += 1;
  if (inputValue > randomNumber) {
    spanCompare.textContent = "smaller";
  } else if (inputValue < randomNumber) {
    spanCompare.textContent = "bigger";
  } else if (inputValue == randomNumber) {
    document.body.style.backgroundImage =
      "url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnJjamN0ZW0yaWF4ZnBqeGN0a3JhYWx3b3AyNDFnbm03bHZ1dHR6ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lPoOHG39XAlV4it61H/giphy.gif')";

    await new Promise((r) => setTimeout(r, 2000));

    spanCompare.textContent = `${randomNumber}!`;
    alert(
      `You won! The number was ${randomNumber}. It took you ${guessCounter} tries.`,
    );
    if (confirm(`Do you want to continue?`)) {
      location.reload();
    } else {
      alert("See you next time!");
      window.close();
    }
  }
}

function check() {
  let inputValue = Number(document.getElementById("input").value.trim());
  if (isNumber(inputValue)) {
    compare(inputValue);
  }
}

function userRandomNumber() {
  let userNumber = Math.floor(Math.random() * 100) + 1;
  let inputValue = document.getElementById("input");
  inputValue.value = userNumber;
  check();
}

function isNumber(inputValue) {
  let errorMessage = document.getElementById("errorMessage");
  if (typeof inputValue == "number" && inputValue != 0) {
    errorMessage.style.display = "none";
    return true;
  } else {
    errorMessage.style.display = "block";
    return false;
  }
}

console.log(randomNumber);
