#!/usr/bin/env node

const contributing = require('../contributing.json'),
    db = require('./db');

// Add quotes function
contributing.quotes.forEach(quote => {
    db.get('quotes')
        .push(quote)
        .write();

        console.log(`Quote by ${quote.author} added to quotes database.`);
});
