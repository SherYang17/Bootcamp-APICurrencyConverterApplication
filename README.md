Purpose of this assignment was to create a currency converter application making api calls. 

Objective:
As a final assessment for the JavaScript unit, you will create a more advanced currency converter application using JavaScript, while the HTML and CSS will be provided. This project will test your knowledge of JavaScript concepts, such as fetching data from an API, manipulating the DOM, handling user input, performing calculations, and adding additional features like historical exchange rates and favorite currency pairs. The currency converter should allow users to select different currencies, input an amount to be converted, view historical exchange rates, and save their favorite currency pairs for quick access.

 

Requirements:
Use the provided HTML and CSS files for the user interface
Display a user interface that allows users to choose two currencies (base and target) and input an amount
Fetch exchange rate data from an API, such as the free Exchange Rates API (https://exchangeratesapi.io/ Links to an external site.)
Perform currency conversion calculations based on the exchange rate data
Display the converted amount in the target currency
Add functionality to view historical exchange rates between the selected currency pair
Allow users to save and access their favorite currency pairs for quick conversion
 

Instructions:
Use the provided index.html and style.css files for the user interface. Make any necessary modifications to include additional features such as historical exchange rates and favorite currency pairs.

In script.js, write the JavaScript code to handle the currency conversion and additional features:

Add event listeners for user actions like selecting currencies, inputting an amount, viewing historical exchange rates, and managing favorite currency pairs
Fetch the exchange rate data from the API using the selected base currency
Perform the currency conversion calculation using the fetched exchange rate data and the input amount
Update the displayed converted amount in the target currency
Implement the functionality to fetch and display historical exchange rates between the selected currency pair
Allow users to save their favorite currency pairs and access them for quick conversion
Test your currency converter application to ensure it meets all requirements and behaves correctly in various scenarios, such as selecting different currencies, inputting various amounts, viewing historical exchange rates, and managing favorite currency pairs.

 

More Detailed Instructions:
Currency conversion:

Allow users to select a base currency and a target currency using two dropdown menus.

Provide an input field for users to enter the amount they want to convert from the base currency to the target currency.

Fetch the current exchange rate data from an API, such as the free Exchange Rates API, for the selected base currency.

Perform the currency conversion calculation using the fetched exchange rate data and the input amount.

Display the converted amount in the target currency.


Historical exchange rates:

Add a button to fetch and display historical exchange rates between the selected currency pair.

When the button is clicked, fetch historical exchange rate data from the API for a specific date (hardcoded or user-selected) for the selected base and target currencies.

Display the historical exchange rate data in a readable format, such as: "Historical exchange rate on [date]: 1 [base currency] = [rate] [target currency]".

Example 1: "Historical exchange rate on 2021-01-01: 1 USD = 0.8150 EUR"

Example 2: "Historical exchange rate on 2021-06-15: 1 GBP = 1.4102 USD"

The historical rates can be displayed as a simple text message, showing the historical exchange rate between the selected currency pair on a specific date.


Favorite currency pairs:

Add a button to save the currently selected currency pair as a favorite.

When the button is clicked, store the selected currency pair into a variable within the application OR in the user's browser (using local storage or another method).

Display a list of the user's saved favorite currency pairs in a dedicated section.

Allow users to access their favorite currency pairs for quick conversion by clicking on them, which should automatically update the base and target currency dropdown menus to the selected favorite pair.

Example 1: ["USD/EUR", "GBP/USD", "JPY/USD"]

Example 2: ["EUR/GBP", "CAD/USD", "AUD/USD"]

The favorite currency pairs can be displayed as a list, with each item showing the base currency and target currency separated by a forward slash. When the user clicks on a favorite currency pair, the base and target currency dropdown menus should automatically update to the selected favorite pair.

As an example of how that would look, each favorite currency pair can be displayed as a button within a list item, allowing users to click on them to update the base and target currency dropdown menus accordingly.

Alternatively, you can create another drop-down list that does the same thing. 

You might also have to add some styling to this so that it is clear to the user how to use those.


Error handling:

Handle invalid input by providing informative error messages when users enter invalid amounts, such as negative numbers or non-numeric characters.

Handle API-related errors, such as issues with fetching data or reaching request limits, by displaying an appropriate error message or providing alternative data sources.

Manage edge cases, such as when the base and target currencies are the same, by providing an informative message or handling the situation gracefully.


Submission:
Please submit your GitHub repo and the link to your GitHub Pages.
