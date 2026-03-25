# JS10: Personregister med søk

## Beskrivelse

Dette prosjektet er en nettside hvor brukeren kan søke etter personer i et register. Ved å skrive inn fornavn, etternavn eller fullt navn, vises informasjon om personen(e) som matcher søket.

## Funksjonalitet

- Søk etter person (fornavn, etternavn eller begge deler)
- Søket er ikke sensitivt for store/små bokstaver
- Viser informasjon om personen:
  - Navn
  - Stilling
  - Beskrivelse
  - Bilde
  - Telefonnummer (privat og jobb)
- Viser flere personer hvis flere har samme navn
- Viser feilmelding hvis ingen treff: "Ingen personer funnet."
- Tømmer inputfeltet etter søk

## Teknologier

- HTML
- CSS
- JavaScript

## Datastruktur

Personene er lagret i en array med objekter:

```javascript
{
  fornavn: "Erik",
  etternavn: "Bergerud",
  stilling: "Undervisningsleder",
  informasjon: "Beskrivelse av personen",
  bilde: "Lenken til bildet",
  telefon: "23232432"
}
```

## Forventer resultat

![Desktop](./firefox_ql1RiJ44Dv.png)
![Mobile](./firefox_EUsYViuCv5.png)
