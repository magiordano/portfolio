


var currentquote = "";
var quotes = [
'Life is about making an impact, not making an income. --Kevin Kruse',
'Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill',
'Strive not to be a success, but rather to be of value. –Albert Einstein',
'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  –Robert Frost',
'I attribute my success to this: I never gave or took any excuse. –Florence Nightingale',
'You miss 100% of the shots you don’t take. –Wayne Gretzky',
'The most difficult thing is the decision to act, the rest is merely tenacity. –Amelia Earhart',
'Every strike brings me closer to the next home run. –Babe Ruth',
'Definiteness of purpose is the starting point of all achievement. –W. Clement Stone',
]

//run first quote
window.onload = function() {
  newQuote();
};


function newQuote()
{
  var randomNum = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNum];
  currentquote = quotes[randomNum];
}

function tweetQuote()
{
 window.open('https://twitter.com/intent/tweet?text=' + currentquote);
}