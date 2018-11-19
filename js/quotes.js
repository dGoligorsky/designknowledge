const quoteTag = document.querySelector("h1")
const randomTag = document.querySelector("footer img")

const getQuote = function() {
    //get a random quote and put it in the site

    quoteTag.innerHTML = "This was loaded with JS " + Math.random()

}

// run on page load
getQuote()

// run when clicking the randomizer image
randomTag.addEventListener("click", function() {
    getQuote()
})