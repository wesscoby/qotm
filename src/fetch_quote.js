import quotes from './quotes_data';
const { log } = console;

// Fetch a quote at random from `quotes` and log to the console.
(function IIFE() {

    let fetchedQuoteAuthor = '', fetchedQuote = '';

    const setQuote = (author, quote) => {
        fetchedQuote = quote;
        fetchedQuoteAuthor = author;
    };

    //  Produce a random number from 0 (included) to the specified argument (argument not included)
    const getRandomNumber = (maximumNumber = 3) => Math.floor(Math.random() * maximumNumber);

    // Break down the object into separate objects
    let main_database = quotes.quotes_database,
        single_quotes_with_unknown_authors = main_database[0].data[0],
        single_quotes_with_authors_known = main_database[0].data[1],
        author_collections = main_database[1].data;        // collection grouped by authors

    // Use switch statement to determine object to fetch the `favoriteQuote` from
    let randomItem;
    switch( getRandomNumber() ) {
        case 0:
            randomItem = getRandomNumber(single_quotes_with_unknown_authors.quotes.length);
            setQuote(single_quotes_with_unknown_authors.author, single_quotes_with_unknown_authors.quotes[randomItem].text);
            break;
        case 1:
            randomItem = getRandomNumber(single_quotes_with_authors_known.quotes.length);
            setQuote(single_quotes_with_authors_known.quotes[randomItem].author, single_quotes_with_authors_known.quotes[randomItem].text);
            break;
        default:
            randomItem = getRandomNumber(author_collections.length);
            let randomQuote = getRandomNumber(author_collections[randomItem].quotes.length);
            setQuote(author_collections[randomItem].author, author_collections[randomItem].quotes[randomQuote].text);
    }

    // Log output
    log(
        `${fetchedQuote}
        -- ${fetchedQuoteAuthor}`
    );

})();
