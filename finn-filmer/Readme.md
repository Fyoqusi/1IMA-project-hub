# JS Oppgave: Filmside med API

## Beskrivelse

Dette prosjektet er en nettside hvor brukeren kan søke etter filmer ved hjelp av et eksternt API. Brukeren skriver inn et søkeord i en input-boks og trykker på en knapp for å hente og vise informasjon om filmer.

Nettsiden viser også anbefalte filmer både ved søk og på forsiden.

---

## Funksjonalitet

- Inputfelt hvor brukeren kan skrive inn navn på en film
- Knapp ("Søk") for å starte søk
- Henter data fra API (f.eks. OMDb API):  
  https://www.omdbapi.com/

- Viser følgende informasjon:
  - Filmtittel
  - Årstall
  - Regissør
  - Sjanger
  - Plot (beskrivelse)
  - Filmplakat (hvis tilgjengelig)

- Viser 3 anbefalte filmer ved søk
- Viser anbefalte filmer på forsiden
- Fjerner tidligere søkeresultat ved nytt søk
- Viser kun det nyeste resultatet
- Viser melding dersom ingen filmer blir funnet

---

## Bruk

1. Skriv inn navnet på en film i inputfeltet  
2. Trykk på **"Søk"**-knappen  
3. Resultatet vises på skjermen  
4. Anbefalte filmer vises automatisk  
5. Søk på nytt for å oppdatere resultatet  

---

## Teknologier

- HTML  
- CSS  
- JavaScript  
- REST API (fetch)  

---

## Hvordan det fungerer

- Når brukeren trykker på knappen, kjøres en JavaScript-funksjon  
- Data hentes fra API-et ved hjelp av `fetch()`  
- Responsen konverteres til JSON  
- Resultatet vises dynamisk på nettsiden (DOM)  
- Anbefalte filmer genereres basert på søket (f.eks. samme sjanger eller lignende søk)  
- Tidligere innhold slettes før nytt vises  

---

## Eksempel på datastruktur

```javascript
{
  Title: "Inception",
  Year: "2010",
  Director: "Christopher Nolan",
  Genre: "Action, Sci-Fi",
  Plot: "A thief who steals corporate secrets through dream-sharing technology...",
  Poster: "image-url"
}
