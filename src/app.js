//Stap 1. Installeer en importeer Axios;
import axios from 'axios'

console.log('Hallo daar!');

// 1. Schijf een async. functie (EdHub FE JS 10.6)

// Stap 3. Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint. Log de response in de console en bestudeer de data goed.
// let countries = [];
async function getCountries(){
    const countryList = document.getElementById("countries-list");
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        const countries = result.data;
        // result info uit de API
        // return result gaat dat niet goed
        // opbouwen data hier
        // return result.data;
        // Stap 4. Probeer eens om de _naam_ van het _allereerste_ land te loggen in de console, welk pad moet je hiervoor volgen?
        console.log(result.data);
        // logArray(result.data);


        //sorteren op Population
        countries.sort((a, b) => {
            return a.population - b.population;
        });

        result.data.map((country) => {
            const countryItem2 = document.createElement("li");
            countryItem2.innerHTML = `
                <p class="population">Has a population of: ${country.population} people</p>
            `;

            const countryItem = document.createElement("li");
            countryItem.innerHTML = `
                <img src="${country.flag}" alt="vlaggetje van landje" class="flag"/>
                <span id="name" class="${regionName(country.region)}">${country.name}</span>
    `;

            countryList.appendChild(countryItem); <!--SAM: een classe geven aan countryList (Om te stylen) -->
            countryList.appendChild(countryItem2); <!--SAM: een classe geven aan countryList (Om te stylen) -->

            })

    } catch(e) {
        console.error(e);
    }
}

getCountries();


// Schrijf een aparte functie die één regio-naam verwacht, en op basis van deze regio de correcte kleur-naam als string
// teruggeeft. Gebruik deze, om de naam van het land in de juiste kleur weer te geven op de pagina. _Tip_: zorg ervoor
// dat je CSS-classes maakt voor alle regio-kleuren!

function regionName(arrRegion) {

        if (arrRegion === "Africa") {
            return (arrRegion === "Africa");
        } else if (arrRegion === "Asia") {
            return "Asia";
        } else if (arrRegion === "Europe") {
            return "Europe";
        } else if (arrRegion === "Oceania") {
            return  "Oceania";
        } else {
            return "Americas";
        }
}









