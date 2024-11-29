var quotes = [
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    }
];

var lastQuote = -1;

function generateQuote() {
    var randomNumber
    do{
        randomNumber = Math.floor(Math.random() * quotes.length);

    }while(randomNumber === lastQuote);
    lastQuote = randomNumber;

    var randomQuote = quotes[randomNumber];

    document.getElementById('quote').textContent = `"${randomQuote.quote}"`;
    document.getElementById('author').textContent = `- ${randomQuote.author}`;
}