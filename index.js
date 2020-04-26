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
  quoteDisplayElement.innerHTML = "";
  quote.split("").forEach((char) => {
    const span = document.createElement("span");
    span.innerText = char;
    quoteDisplayElement.appendChild(span);
  });
  quoteInputElement.value = null;
}

renderNextQuote();
