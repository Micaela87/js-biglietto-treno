// calculate how much a train ticket will cost depending on user's age and km

// HTML element
const element = document.getElementById('result');

// parameters
const pricePerKm = 0.21;
const under18 = 0.2;
const over65 = 0.4;

// user's km saved to a variable
const userKm = parseInt(prompt('Inserisci i km da percorrere'));

// user's age saved to a variable
const userAge = parseInt(prompt('Inserisci la tua età'));

// calculate ticket's price
let standardPrice = userKm * pricePerKm;
let ticketPrice;

if (userAge < 18) {
    ticketPrice = standardPrice - (standardPrice * under18);
} else if (userAge > 65) {
    ticketPrice = standardPrice - (standardPrice * over65);
} else {
    ticketPrice = standardPrice;
}

// display result in HTML
element.innerHTML = `Il prezzo del tuo biglietto è pari a ${ticketPrice.toFixed(2)}&euro;`

console.log(ticketPrice.toFixed(2));