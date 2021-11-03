import axios from 'axios'

console.log('Hallo daar!');

// 1. Schijf een async. functie (EdHub FE JS 10.6)
// axios.get('https://restcountries.com/v2/all')
let countries = [];
async function getCountries(){
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        // result info uti de API
        // return result gaat dat niet goed
        // opbouwen data hier
        // return result.data;
        console.log(result.data)
        // logArray(result.data);
    } catch(e) {
        console.error(e);
    }
}

// const testResult = getCountries();
// console.log(testResult);
getCountries()


// De naam van het land

// Op déze manier is niet mogelijk een functie te schrijven:
// const countryName = ARRAY.map((country) => {
//     return country.name;
// });
//
// console.log(countryName);

// function logArray(arr){
//     for (let i=0; i < arr.length; i++) {
//         countries.push(arr[i]);
//     }
// }
// console.log(countries);


// De vlag van dat land


// De zin: Has a population of [amount] people



