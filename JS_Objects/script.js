let ansatte = [
  {
    fornavn: "Jan Helge",
    etternavn: "Russnes",
    stilling: "Rektor",
    tlfnummer: "456 53 654",
    informasjon: ["Rektor er skolens pedagogiske og administrative leder"],
    bilde:
      "https://afk.no/handlers/bv.ashx/i3a621243-826b-40b0-8512-cc86353688a0/w1200/q286482/k61436df1d87a/jan-helge-russnes-rektor_knuterikskistad.jpg",
    navn: function () {
      return this.fornavn + " " + this.etternavn;
    },
  },
  {
    fornavn: "Torben",
    etternavn: "Andersen",
    stilling: "Assisterende Rektor",
    tlfnummer: "918 35 545",
    informasjon: ["Elevtjenesten", "Karriereveiledning", "Kombinasjonsklassen"],
    bilde:
      "https://afk.no/handlers/bv.ashx/i7e89bcc6-9656-4da5-ace5-61cba4581c89/w1200/q32065/k9e876f7110f2/torben-gjerstad.jpg",
    navn: function () {
      return this.fornavn + " " + this.etternavn;
    },
  },
  {
    fornavn: "Martin",
    etternavn: "Sandø-Frank",
    stilling: "Studieleder",
    tlfnummer: "123 34 456",
    informasjon: ["Fagansvar realfag", "Voksenopplæring"],
    bilde:
      "https://afk.no/handlers/bv.ashx/idcba2903-3ab2-4794-ae08-cb5d49426b18/w1200/q32052/ke992834dca1c/martin-frank.jpg",
    navn: function () {
      return this.fornavn + " " + this.etternavn;
    },
  },
  {
    fornavn: "Erik",
    etternavn: "Bergerud",
    stilling: "Undervisningsleder",
    tlfnummer: "232 32 432",
    informasjon: [
      "Bygg- og anleggsteknikk",
      "Elektro og datateknologi",
      "Informasjonsteknologi og medieproduksjon",
    ],
    bilde:
      "https://afk.no/handlers/bv.ashx/i16ef36a7-a6bd-453d-bb40-59aa0c708dfb/w1200/q32061/kb1d4d790d41c/erik-bergerud.jpg",
    navn: function () {
      return this.fornavn + " " + this.etternavn;
    },
  },

  {
    fornavn: "Sissel",
    etternavn: "Moen",
    stilling: "Administrasjonsleder",
    tlfnummer: "654 54 342",
    informasjon: ["Økonomi og administrasjon", "Bibliotek", "Renhold", "Drift"],
    bilde:
      "https://afk.no/handlers/bv.ashx/i776fc0dd-9d6b-4831-9773-6682fbd3b384/w1200/q58394/kbdaaa258ffb6/sissel-moen.jpg",
    navn: function () {
      return this.fornavn + " " + this.etternavn;
    },
  },
];

function findPerson() {
  infoDiv.innerHTML = "";
  let found = 0;
  let inputValue = inputField.value;
  ansatte.forEach((element) => {
    if (
      inputValue.toLowerCase() == element.fornavn.toLowerCase() ||
      inputValue.toLowerCase() == element.etternavn.toLowerCase() ||
      inputValue.toLowerCase() == element.navn().toLowerCase()
    ) {
      let image = document.createElement("img");
      image.classList.add("pfp");
      infoDiv.appendChild(image);
      image.src = element.bilde;
      let infoTextDiv = document.createElement("div");
      infoDiv.appendChild(infoTextDiv);

      let stilling = document.createElement("span");
      stilling.innerText = element.stilling;
      infoTextDiv.appendChild(stilling);
      let navn = document.createElement("p");
      let oppgaver = document.createElement("ul");
      element.informasjon.forEach((el) => {
        let li = document.createElement("li");
        li.innerText = el;
        oppgaver.appendChild(li);
      });
      navn.innerHTML = element.navn();
      navn.classList.add("navn");
      let mobil = document.createElement("p");
      mobil.innerText = `Mobil: ${element.tlfnummer}`;
      infoTextDiv.appendChild(navn);
      infoTextDiv.appendChild(oppgaver);
      infoTextDiv.appendChild(mobil);

      found++;
    }
  });
  if (found == 0) {
    infoDiv.innerHTML = "Ingen personer funnet.";
  }
  inputField.value = "";
}

let inputField = document.getElementById("navn");
inputField.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    findPerson();
  }
});
let button = document.getElementById("button");
let infoDiv = document.querySelector(".info");
button.addEventListener("click", function () {
  findPerson();
});
