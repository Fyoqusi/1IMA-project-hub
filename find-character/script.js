let output = document.getElementById("output");
const url = "https://dattebayo-api.onrender.com/characters";
const button = document.getElementById("button");
let inputField = document.getElementById("input");
inputField.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    findPerson();
  }
});
button.addEventListener("click", function () {
  findPerson();
});

function findPerson() {
  let count = 0;
  output.innerHTML = "";
  let inputValue = inputField.value.toLowerCase().trim();
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      data.characters.forEach((element) => {
        if (
          inputValue == element.name.toLowerCase() ||
          element.name.toLowerCase().split(" ").includes(inputValue)
        ) {
          element.images.forEach((element) => {
            let img = document.createElement("img");
            img.src = element;
            output.appendChild(img);
          });
          let p = document.createElement("p");
          p.innerHTML = `<strong>${element.name}</strong><br>
          Birthdate: ${element.personal.birthdate}`;
          output.appendChild(p);
          if (element.uniqueTraits) {
            let p2 = document.createElement("p");
            p2.innerText = `Unique Trait: ${element.uniqueTraits[0]}`;
            p2.classList.add("images");
            output.appendChild(p2);
          } else {
            let p2 = document.createElement("p");
            p2.innerText = `Unique Trait: None`;
            p2.classList.add("images");
            output.appendChild(p2);
          }
          count++;
        }
        inputField.value = "";
      });
      if (count == 0) {
        output.innerHTML = "Ingen karakterer funnet.";
      }
    });
}
