const quoteTag = document.querySelector("h1")
const authorTag = document.querySelector("p")
const randomTag = document.querySelector("footer img")

let data = []

// load in the real data
fetch("./js/quotes.jason").then(function(response) {
    return response.json()
}).then(function(jsonData) {
    data = jsonData
})

const getQuote = function() {

    if (data.length > 0) {
    //get a random quote 
    const randomNumber = Math.floor(Math.random() * data.length)
    const randomQuote = data[randomNumber]
    
    // and put it in the site
    quoteTag.innerHTML = randomQuote.quote
    authorTag.innerHTML = randomQuote.author
    }

}

// run on page load
getQuote()

// run when clicking the randomizer image
randomTag.addEventListener("click", function() {
    getQuote()
})