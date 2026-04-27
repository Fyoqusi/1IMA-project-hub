const inputMovie = document.getElementById("inputMovie");
const buttonSearch = document.getElementById("buttonSearch");
const titleContainer = document.getElementById("titleContainer");
let outputCont = document.getElementById("output");

inputMovie.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    findMovie();
  }
});
buttonSearch.addEventListener("click", findMovie);

async function findMovie() {
  let inputMovieValue = inputMovie.value.trim();
  if (inputMovieValue) {
    output.innerHTML = "";
    titleContainer.innerHTML = `Search results for: «${inputMovieValue}»`;

    let apiUrl = `https://www.omdbapi.com/?s=${inputMovieValue}&apikey=39885522`;
    try {
      inputMovie.value = "";
      const response = await fetch(apiUrl);
      const data = await response.json();
      let search = data.Search;
      search.forEach((e) => {
        findM(e);
      });
    } catch (error) {
      outputCont.innerHTML = `Vi fant ingen filmer som heter «${inputMovieValue}».`;
      return;
    }
  }
}
async function findM(e) {
  const responseI = await fetch(
    `https://www.omdbapi.com/?i=${e.imdbID}&apikey=39885522`,
  );
  const dataI = await responseI.json();
  let output = document.createElement("div");
  output.classList.add("movie-card");
  let img = document.createElement("img");
  img.src = e.Poster;
  output.appendChild(img);
  let p = document.createElement("p");
  p.innerText = e.Title;
  p.classList.add("movie");
  output.appendChild(p);
  p = document.createElement("p");
  p.innerText = `${dataI.Year} - ${dataI.Rated} - ${dataI.Runtime} - ${dataI.Genre}`;
  p.classList.add("add-info");
  output.appendChild(p);
  p = document.createElement("p");
  p.innerText = `${dataI.Plot}`;
  p.classList.add("plot");
  output.appendChild(p);
  p = document.createElement("p");
  p.innerHTML = `<b>Director:</b> ${dataI.Director}<br><b>Writer:</b> ${dataI.Writer}<br><b>Actors:</b> ${dataI.Actors}`;
  p.classList.add("staff");
  output.appendChild(p);
  outputCont.appendChild(output);
}
