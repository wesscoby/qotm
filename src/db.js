#!/usr/bin/env node
const low = require('lowdb'),
    defaultQuotes = require('./default_quotes');
    
const FileSync = require('lowdb/adapters/FileSync'),
    adapter = new FileSync('db.json'),
    db = low(adapter);


    // Set some defaults
    db.defaults({ quotes: [...defaultQuotes.quotes ]})
    .write();

    // Fetch a quote from db at random
    db._.mixin({
        getRandomQuote: function(quotes) {
            const getRandomNumber = (maximumNumber = quotes.length) => Math.floor(Math.random() * maximumNumber);
          return quotes[getRandomNumber()];
        },

      });

    

module.exports = db;