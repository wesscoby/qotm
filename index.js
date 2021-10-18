#!/usr/bin/env node

const QuotesDatabase = require('./db.json'),
	program = require('commander'),
	cowsay = require('cowsay'),
	lolcat = require('lolcatjs'),
	wrap = require('word-wrap'),
	{ log } = console;



const fetchQuote = () =>{
	// Get random number between 0 and QuotesDatabase.quotes.length
	const getRandomNumber = (maximumNumber = QuotesDatabase.quotes.length) =>
		Math.floor(Math.random() * maximumNumber);

	const fetchedQuote = QuotesDatabase.quotes[getRandomNumber()];
	// Log output
	const text = `
${wrap(fetchedQuote.text, {trim: true, width: 30 })}

${wrap(`-- ${fetchedQuote.author}`, {trim: true, width: 30 })}
	`;

	const cowsayText = cowsay.say({ text });
	lolcat.fromString(cowsayText);
};

// Initialize program
program
    .version(require('./package.json').version)
    .description('Display a random tech or programming quote');

// Run Qotm
program
    .action(() => fetchQuote());


program.parse(process.argv);
