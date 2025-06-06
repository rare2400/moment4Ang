# Moment4Ang

En webbapplikation som visar ramschemat för Webbutvecklingsprogrammet med kurskod, kursnamn och progression. Applikationen utvecklas med [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10 och stödjer filtrering och sortering av kurserna i tabellen. När sökfältet fylls i, en bokstav räcker, 
filtreras tabellen med kurser innehållande bokstaven/sökordet. Vid tryck på `Kurskod`, `Namn` eller `Progression` så sorteras den valda datan. Första trycket
sorterar datan i fallande ordning och andra trycket sorterar stigande.


## Användning av projektet
1. Klona repo
```bash
git clone https://github.com/rare2400/moment4Ang.git
cd moment4Ang
```

3. Installera paket
```bash
npm install
```

4. Starta utvecklingsserver
```bash
ng serve
```
4. Öppna `http://localhost:4200/` i webbläsaren

5. Bygg färdigt projekt
```bash
ng build
```
## Funktionalitet
- Se ramschemat för Webbutvecklingsprogrammet
- Filtrera och sortera data
  - Filtrering i sökformulär
  - Sortering fallande & stigande vid tryck på rubrik
- Databindning mellan formulär och TypeScript
- Responsiv design

## Verktyg
- **Angular**: Skapa services, signals och component, samt HttpClient för att göra HTTP-anrop
- **TypeScript**: Logiken bakom med filtrering och sortering
- **HTML/CSS**: För att bygga och styla responsiv webbplats
- **Git**: Versionshantering av koden

## Struktur
| Mapp/fil                     | Beskrivning                                          |
| ---------------------------- | -----------------------------------------------------|
| `src/app/courses`            | Komponent som skriver ut tabell över kurser med filtrerings- och sorteringsfunktion. |
| `src/app/partials/footer`    | Footer-komponent med sidfot                          |
| `src/app/partials/header`    | Header-komponent med rubrik                          |
| `src/app/models/course`      | Interface för kursdata                               |
| `src/app/services/courses`   | Service som hämtar kursdata från API                 |
| `src/app.component.html`     | Hämtar in komponenter till index.html                |
| `src/styles.css`             | Gemensam styling för hela webbplatsen/applikationen  |

## Reflektioner
Uppgiften fokuserar att använda HTTP-anrop i Angular med HttpClient. Det har varit intressant och givande att lära sig ett nytt sätt att hämta data från API:er,
samt att använda sig av services. Att dela upp koden i komponenter var också givande i form av att återanvända kod - främst css. En utmaning är att komma ihåg
att importera komponenter och moduler, fördelen är att Angular hjälper en ofta med vad som saknas. 


## Skapad av
Uppgift i kursen programmering i TypeScript     
Webbutveklingsprogrammet, Mittuniversitetet     
Ramona Reinholdz     
[rare2400@student.miun.se](rare2400@student.miun.se)
