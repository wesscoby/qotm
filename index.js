#!/usr/bin/env node

const fetchQuote = require('./src/fetch_quote'),
    { log } = console;


// Log fetched quote
log(fetchQuote())