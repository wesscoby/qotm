#!/usr/bin/env node
const db = require('./db'),
    lolcat = require('lolcatjs'),
    cowsay = require('cowsay'),
    chalk = require('chalk'),
    fetchQuote = require('./src/fetch_quote');

    
const { log } = console;

lolcat.options.seed = Math.round(Math.random() * 1000);
lolcat.options.colors = true;



// display.stdout.on('data', data => log(data))
// log(fetchQuote())

// lolcat.fromString(process.stdout.write(cowsay.say({text: fetchQuote()})));

// log(db.get('quotes').getRandomQuote().value());

// lolcat.fromPipe(console.log(cowsay.say({text: fetchQuote()})))