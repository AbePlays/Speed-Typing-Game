const API_URL = "http://api.quotable.io/random";
const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");

quoteInputElement.addEventListener("input", () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll("span");
  const arrayValue = quoteInputElement.value.split("");
  let correct = true;

  arrayQuote.forEach((char, index) => {
    const character = arrayValue[index];
    if (character == null) {
      char.classList.remove("correct");
      char.classList.remove("incorrect");
      correct = false;
    } else if (character === char.innerText) {
      char.classList.add("correct");
      char.classList.remove("incorrect");
    } else {
      char.classList.remove("correct");
      char.classList.add("incorrect");
      correct = false;
    }
  });
  if (correct) renderNextQuote();
});

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
