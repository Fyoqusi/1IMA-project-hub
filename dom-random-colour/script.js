const cssColors = [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgrey",
  "darkgreen",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkslategrey",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dimgrey",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "grey",
  "green",
  "greenyellow",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgrey",
  "lightgreen",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightslategrey",
  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olive",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "purple",
  "rebeccapurple",
  "red",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "silver",
  "skyblue",
  "slateblue",
  "slategray",
  "slategrey",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "white",
  "whitesmoke",
  "yellow",
  "yellowgreen",
];

let btnSetColour = document.getElementById("btnSetColour");
btnSetColour.onclick = setColour;
let btnRandomColour = document.getElementById("btnRandomColour");
btnRandomColour.onclick = randomColour;
let btnReset = document.getElementById("btnReset");
btnReset.onclick = function () {
  location.reload();
};
let inputValue = document.getElementById("input");
inputValue.value = "";
inputValue.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    setColour();
  }
});
let userDiv = document.getElementById("userColours");
let randDiv = document.getElementById("randomColours");

let userCounter = 0;
let randCounter = 0;

function setColour() {
  if (userCounter == 21) {
    reset();
  }
  if (cssColors.includes(inputValue.value.toLowerCase())) {
    userDiv.style.backgroundColor = inputValue.value;
    let colour = document.createElement("p");
    colour.innerText = inputValue.value.toLowerCase();
    userDiv.appendChild(colour);
    userCounter += 1;
  } else {
    alert("Type in a right colour");
  }
  inputValue.value = "";
}

function randomColour() {
  if (randCounter == 21) {
    reset();
  }
  let colourIndex = Math.floor(Math.random() * cssColors.length);
  let colourName = cssColors[colourIndex];
  randDiv.style.backgroundColor = colourName;
  let colour = document.createElement("p");
  colour.innerText = colourName;
  randDiv.appendChild(colour);
  randCounter += 1;
}

function reset() {
  alert("Colours reached maximum amount. Restarting!");
  location.reload();
}
