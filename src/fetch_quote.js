

const db = require('./db'),
    { log } = console;


// Fetch a quote at random from `quotes` and log to the console.
module.exports = () => {

    const fetchedQuote = db.get('quotes').getRandomQuote().value();

    // Log output
    return `${fetchedQuote.text}\n\n-- ${fetchedQuote.author}`;

};