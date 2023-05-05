// add each id into a variable
let basecurrency = document.getElementById("base-currency");
let amountInput = document.getElementById("amount");
let targetCurrency = document.getElementById("target-currency");
let convertedAmount = document.getElementById("converted-amount");
let historicalRates = document.getElementById("historical-rates");
let historicalRatesContainer = document.getElementById("historical-rates-container");
let saveFavorite = document.getElementById("save-favorite");
let favoriteCurrencyPairs = document.getElementById("favorite-currency-pairs");

// adding historical
let date1 = document.getElementById("date1");
let date2 = document.getElementById("date2");
let historicalRatesFirst = document.getElementById("historical-rates-first");
let historicalRatesSecond = document.getElementById("historical-rates-second");
let favorites = [];

const myHeaders = new Headers();
myHeaders.append("apikey", "nqQoMakmIrrizH7ZE7ShRQQXeezH7YHe");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function fetchAvailableCurrencies() {
  fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
    .then(response => response.json())
    .then(result => {
      populateCurrencyDropdowns(result.symbols);
    })
    .catch(error => console.log('error', error));
}

function populateCurrencyDropdowns(symbols) {
  for (const currencyCode in symbols) {
    const option = document.createElement("option");
    option.value = currencyCode;
    option.text = `${currencyCode} - ${symbols[currencyCode]}`;

    basecurrency.add(option.cloneNode(true));
    targetCurrency.add(option);
  }
}

function convertCurrency() {
  fetch("https://api.apilayer.com/exchangerates_data/convert?from=${from}&to=${to}&amount=${amount}", requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        convertedAmount.textContent = result.result.toFixed(2);
      } else {
        console.error('Conversion error', result.error);
      }
    })
    .catch(error => console.log('error', error));
}

function fetchHistoricalRates() {
  let from = basecurrency.value;
  let to = targetCurrency.value;

  const url1 = `https://api.apilayer.com/exchangerates_data/${date1.value}?symbols=${to}&base=${from}`;
  const url2 = `https://api.apilayer.com/exchangerates_data/${date2.value}?symbols=${to}&base=${from}`;

  fetch(url1, requestOptions)
    .then(response => response.json())
    .then(result1 => {
      if (result1.success) {
        return fetch(url2, requestOptions)
          .then(response => response.json())
          .then(result2 => {
            if (result2.success) {
              historicalRatesFirst.textContent = ` 1 ${from} = ${result1.rates[to]} ${to}`;
              historicalRatesSecond.textContent = `1 ${from} = ${result2.rates[to]} ${to}`;
            } else {
              console.error('Historical rates error', result2.error);
            }
          });
      } else {
        console.error('Historical rates error', result1.error);
      }
    })
    .catch(error => console.log('error', error));
}


function convertCurrency() {
  let from = basecurrency.value;
  let to = targetCurrency.value;
  let amount = amountInput.value;

  const url = `https://api.apilayer.com/exchangerates_data/convert?from=${from}&to=${to}&amount=${amount}`;

  fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        convertedAmount.textContent = result.result.toFixed(2);
      } else {
        console.error('Conversion error', result.error);
      }
    })
    .catch(error => console.log('error', error));
}


function saveFavoriteCurrencyPair() {
  const from = basecurrency.value;
  const to = targetCurrency.value;
  const favoritePair = `${from}/${to}`;

  // Check if the favorite pair is already saved
  if (favorites.includes(favoritePair)) {
    console.log('Favorite pair already saved');
    return;
  }

  // Add the favorite pair to the favorites array
  favorites.push(favoritePair);

  // Update the favorite currency pairs list
  updateFavoriteCurrencyPairs();
}

function updateFavoriteCurrencyPairs() {
  // Clear the existing list
  favoriteCurrencyPairs.innerHTML = '';

  // Create list items for each favorite pair
  favorites.forEach(pair => {
    const listItem = document.createElement('li');
    listItem.textContent = pair;
    favoriteCurrencyPairs.appendChild(listItem);
  });
}

function handleFavoriteCurrencyClick(event) {
  // Check if a favorite currency pair was clicked
  if (event.target.tagName === 'LI') {
    const pair = event.target.textContent;
    const [from, to] = pair.split('/');

    // Update the base and target currency dropdown menus
    basecurrency.value = from;
    targetCurrency.value = to;
  }
}




document.addEventListener("DOMContentLoaded", function() {
  fetchAvailableCurrencies();
});

amount.addEventListener("input", convertCurrency);
basecurrency.addEventListener("change", convertCurrency);
targetCurrency.addEventListener("change", convertCurrency);
historicalRates.addEventListener("click", fetchHistoricalRates);
saveFavorite.addEventListener("click", saveFavoriteCurrencyPair);
favoriteCurrencyPairs.addEventListener("click", handleFavoriteCurrencyClick);




// GET/convert
  // fetch("https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}", requestOptions)
  // amount (required)
  // from (required)
  // to (required)
  // date (optional)

// GET/latest
  // fetch("https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base={base}", requestOptions)
  // base (optional)
  // symbols (optional)
  // Returns real-time exchange rate data updated every 60 minutes, every 10 minutes or every 60 seconds.


// GET/symbols
  // fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
  // Returning all available currencies.

// GET/timeseries
  // fetch("https://api.apilayer.com/exchangerates_data/timeseries?start_date={start_date}&end_date={end_date}", requestOptions)
  // end_date (required)
  // start_date (required)
  // base (optional)
  // symbols (optional)


// GET/{date}
  // fetch("https://api.apilayer.com/exchangerates_data/{date}?symbols={symbols}&base={base}", requestOptions)
  // date (required)
  // base (optional)
  // symbols (optional)



  // Example code
  //   function this() {
  //     fetch(" ")
  //     .then(response => response.json())
  //     .then(data => this(data))
  // }







