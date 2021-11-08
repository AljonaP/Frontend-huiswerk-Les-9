//Stap 1. Installeer en importeer Axios;
import axios from 'axios'

console.log('Hallo daar!');

// 1. Schijf een async. functie (EdHub FE JS 10.6)

// Stap 3. Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint. Log de response in de console en bestudeer de data goed.
// let countries = [];
async function getCountries(){
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        // result info uti de API
        // return result gaat dat niet goed
        // opbouwen data hier
        // return result.data;
        console.log(result.data[25].capital)
        // logArray(result.data);
    } catch(e) {
        console.error(e);
    }
}

getCountries();
// console.log(testResult);
// consol.log(countries);

// console.log(getCountries(countries[0].name))

// De naam van het land

// Op déze manier is niet mogelijk een functie te schrijven:
// const countryName = ARRAY.map((country) => {
//     return country.name;
// });
//
// console.log(countryName);
//
// // Stap 4. Probeer eens om de naam van het allereerste land te loggen in de console
// function logArray(arr){
//     for (let i=0; i < arr.length; i++) {
//         countries.push(arr[i]);
//     }
// }
// console.log(countries[0].name); //!!!to check
//

// Stap 5. De vlag van dat land
//
// let countries = [];
// async function getCountries(){
//     try {
//         const result = await axios.get('https://restcountries.com/v2/all');
//         // result info uti de API
//         // return result gaat dat niet goed
//         // opbouwen data hier
//         // return result.data;
//         console.log(result.data)
//         // logArray(result.data);
//     } catch(e) {
//         console.error(e);
//     }
// }
//

// De zin: Has a population of [amount] people
//
let countriesTest = [];
async function getDataFromUri(uri,data,targetArray){
    try {
        const result = await axios.get(uri);
        makeArrayTest(result[data],targetArray);
    }catch (e) {
        console.error(e);
    }
}
function makeArrayTest(arr,targetArray){
    for (let i = 0; i < arr.length; i++) {
        targetArray.push(arr[i]);
    }
}

getDataFromUri('https://restcountries.com/v2/all', 'data', countriesTest);
console.log(countriesTest);


console.log(countriesTest[25])

