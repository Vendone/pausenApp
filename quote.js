//Quotes abrufen
const quotes = [{
    quote: "Nirgends strapaziert sich der Mensch mehr als bei der Jagd nach Erholung.",
    author: 'Laurence Sterne'
  },
  {
    quote: "Halte dir jeden Tag 30 Minuten für deine Sorgen frei und in dieser Zeit mache ein Nickerchen.",
    author: "Abraham Lincoln"
  },
  {
    quote: "Nichts bringt uns auf unserem Weg besser voran als eine Pause.",
    author: "Elizabeth Barrett Browning"
  },
  {
    quote: "Strebe nach Ruhe, aber durch das Gleichgewicht, nicht durch den Stillstand deiner Tätigkeit.",
    author: "Friedrich Schiller"
  },
  {
    quote: "Ruhe zieht das Leben an, Unruhe verscheucht es.",
    author: "Gottfried Keller"
  },
  {
    quote: "Die modernen Menschen werden nicht mit der Peitsche, sondern mit Terminen geschlagen.",
    author: "Telly Savalos"
  },
];

const randomQuote = Math.floor(Math.random() * quotes.length);

let quoteDiv = document.getElementById("quote");
quoteDiv.innerHTML = '<q>' + quotes[randomQuote].quote + '</q>';

let authorDiv = document.getElementById("author");
authorDiv.innerHTML = quotes[randomQuote].author;