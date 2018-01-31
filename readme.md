# Assesment 1
In de repository vind je de Bubble chart die ik heb gemaakt voor de eerste assignment van het vak Frontend 3.

## Preview
![Preview of the chart](https://github.com/rvdpas/fe3-assessment-3/blob/master/public/preview.jpg)

## Gebaseerd op
[Bubble chart example](https://bl.ocks.org/mbostock/4063269)

## Achtergrond
Voor de eerste opdracht wilde ik zien wat voor toffe dingen je kon maken met D3. Er zijn tientallen verschillende soorten grafieken die je kon gebruiken, maar ik wilde niet de meest basic grafiek gebruiken. Ik zag eenvoorbeeld van Mike Bostock's bubble chart en dat zag er tof uit. Het mooie aan de visualisatie vond ik dat je gelijk ziet welke element groter zijn of meer gebruikt worden. Het geeft goed de hierarchy weer uit de data.

## De data
De dataset die ik heb gebruikt voor deze opdracht is een Tab-seperated-values bestand (TSV) met 26 rijen en 2 kolommen. Deze data is afkomstig van [wikipedia.org](https://en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers). De twee categorieën in de data zijn:

- `language` - De taal die de mensen spreken
- `speakers` - De hoeveelheid mensen die de taal spreken

De dataset ziet er als volgt uit: 

```
language    speakers
Mandarin Chinese    1090000000
English 983000000
Hindustani  544000000
Spanish 527000000
```

## Workflow
Toen ik voor het eerst naar de structuur van D3 keek toen vond ik het moeilijk te begrijpen. Het bouwen van de grafieken heeft met meerdere factoren te maken en dat maakt het moeilijk. Als je de Assen goed hebt gedaan, maar de inhoud van de grafiek niet dan werkt het niet en dat was best een frustrerend proces. Ik heb meerdere cursussen gevolgd om mijn kennis van D3 te vergroten. Door deze cursussen heb ik een beter begrip kunnen opbouwen voor D3.

- [Linda - Learning Data Visualization with D3.js](https://www.lynda.com/D3-js-tutorials/Learning-Data-Visualization-D3-js/594451-2.html?srchtrk=index%3a3%0alinktypeid%3a2%0aq%3ad3%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2)
- [Udemy - Data Visualize Data with D3.js The Easy Way](https://www.udemy.com/data-visualize-data-with-d3js-the-easy-way/learn/v4/overview)

## To do
- [ ] Hoeveelheid data laten zien in de cirkels
- [ ] De cirkels kunnen orderen, zodat het wat overzichterlijker wordt hoeveel groter de een nou is tegenover de ander

### Gebruikte links
[d3-format](https://github.com/d3/d3-format)
[d3-pack](https://github.com/d3/d3-hierarchy/blob/master/README.md#pack)

## Contribute to the project

To get this application working on your system, please follow the steps as described below.

### Prerequisites

```
- Installed node version 5+ 
```

### Installing

The first step is cloning the repository

```
git clone https://github.com/rvdpas/fe3-assessment-1.git
```

Then browse to the map and open your terminal (powershell, git bash, cmd), next install the dependecies

```
npm install
```

Now you can start the server by entering the following command in your terminal
```
npm start
```
You should see the following message in your terminal  

![Server started](https://github.com/rvdpas/meesterproef/blob/master/public/img/server-running.png "Server started")

Visit the application in the browser on 
```
localhost:3000
```

### license
MIT © Rob van der Pas
