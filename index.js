#!/usr/bin/env node

   const QuotesDatabase = require('./db.json'),
    { log } = console;

(function fetchQuote(){
    // Get random number between 0 and QuotesDatabase.quotes.length
    const getRandomNumber = (maximumNumber = QuotesDatabase.quotes.length) =>
     Math.floor(Math.random() * maximumNumber);

     const fetchedQuote = QuotesDatabase.quotes[getRandomNumber()];
    // Log output
    log(`${fetchedQuote.text}\n\n -- ${fetchedQuote.author}`);
})();