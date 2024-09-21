const button = document.getElementById('btn1');
const postButton = document.getElementById('postBtn');

async function getNewQuote() {

    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    const dataLength = data.length;
    const randomIndex = Math.floor(Math.random() * dataLength);
    const quote = data[randomIndex].text;
    const author = data[randomIndex].author || "Unknown";
    document.getElementById('quote_text').textContent = quote;
    document.getElementById('author').textContent = author.split(",")[0];
}


function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + document.getElementById('quote_text').textContent + "---- by " + document.getElementById('author').textContent, "Tweet Window", "width=600, height=300");
}

button.addEventListener('click', getNewQuote);
postButton.addEventListener('click', tweet);





