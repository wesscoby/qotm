#!/usr/bin/env node
const lowdb = require('lowdb'),
    lolcat = require('lolcatjs'),
    cowsay = require('cowsay'),
    chalk = require('chalk'),
    getQuote = require('./src/fetch_quote');

lolcat.options.seed = Math.round(Math.random() * 1000);
lolcat.options.colors = true;
    
lolcat.fromString(cowsay.say({
    text: getQuote()
}));

// console.log(cowsay.say({
//     text: 'Hello world from cowsay land'
// }))