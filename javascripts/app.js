let quote;

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

async function getNewQuote() {
  const response = await fetch("/backend/quotes.json");
  const quotes = await response.json();
  quote = quotes[getRandom(50)];

  return quote;
}

const button = document.querySelector("button");
const quoteDisplay = document.querySelector("p");

getNewQuote().then(() => {
  quoteDisplay.innerHTML = quote;
});

button.addEventListener("click", () => {
  getNewQuote().then(() => {
    quoteDisplay.innerHTML = quote;
  });
});
