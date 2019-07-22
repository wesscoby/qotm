#!/usr/bin/env node

   const QuotesDatabase = require('./db.json'),
    program = require('commander'),
    { log } = console;



const fetchQuote = () =>{
    // Get random number between 0 and QuotesDatabase.quotes.length
    const getRandomNumber = (maximumNumber = QuotesDatabase.quotes.length) =>
     Math.floor(Math.random() * maximumNumber);

     const fetchedQuote = QuotesDatabase.quotes[getRandomNumber()];
    // Log output
    log(`${fetchedQuote.text}\n\n -- ${fetchedQuote.author}`);
};

// Initialize program
program
    .version(require('./package.json').version)
    .description('Display a random tech or programming quote');

// Run Qotm
program
    .action(() => fetchQuote());


program.parse(process.argv);
