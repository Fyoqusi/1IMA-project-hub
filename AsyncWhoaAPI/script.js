const url = "https://whoa.onrender.com/whoas/random";
const name = document.getElementById("name");
const poster = document.getElementById("poster");
const year = document.getElementById("year");
const director = document.getElementById("director");
const duration = document.getElementById("duration");
const timestamp = document.getElementById("timestamp");
const video = document.getElementById("video");
const button = document.getElementById("button");

async function hentKarakterer() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Feil fra API: " + response.status);
    }

    const data = await response.json();
    console.log(data[0]);

    name.innerText = data[0].movie;
    year.innerText = data[0].year;
    director.innerText = data[0].director;
    duration.innerText = data[0].movie_duration;
    timestamp.innerText = data[0].timestamp;
    poster.src = data[0].poster;
    video.src = data[0].video["480p"];
  } catch (error) {
    console.log("Noe gikk galt:", error.message);
  }
}

hentKarakterer();

button.addEventListener("click", hentKarakterer);
