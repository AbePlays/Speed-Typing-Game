const API_URL = "http://api.quotable.io/random";
const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");

function getRandomQuote() {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.content);
}

async function renderNextQuote() {
  const quote = await getRandomQuote();
  quoteDisplayElement.innerText = quote;
  quoteInputElement.value = null;
}

renderNextQuote();
