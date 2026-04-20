# JS Oppgave: Værnettside med API

## Beskrivelse

Dette prosjektet er en nettside hvor brukeren kan søke etter værinformasjon for en valgt by i Norge ved hjelp av et eksternt API. Brukeren skriver inn navnet på en by i en input-boks og trykker på en knapp for å hente og vise værdata.

---

## Funksjonalitet

- Inputfelt hvor brukeren kan skrive inn navn på en by
- Knapp ("Søk") for å starte søk
- Henter data fra API:  
  https://api.openweathermap.org/data/2.5/weather

- Viser følgende informasjon:
  - By (lokasjon)
  - Temperatur
  - Minimum temperatur
  - Maksimum temperatur
  - Værbeskrivelse

- Fjerner tidligere søkeresultat ved nytt søk
- Viser kun det nyeste resultatet
- Viser melding dersom ingen by blir funnet

---

## Bruk

1. Skriv inn navnet på en by i inputfeltet
2. Trykk på **"Søk"**-knappen
3. Resultatet vises på skjermen
4. Søk på nytt for å oppdatere resultatet

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
- Informasjonen vises dynamisk på nettsiden (DOM)
- Tidligere innhold slettes før nytt vises

---

## Eksempel på datastruktur

```javascript
{
  name: "Røyken",
  main: {
    temp: 9,
    temp_min: 8,
    temp_max: 9
  },
  weather: [
    {
      description: "overskyet"
    }
  ]
}
```
