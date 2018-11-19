const quoteTag = document.querySelector("h1")
const authorTag = document.querySelector("p")
const randomTag = document.querySelector("footer img")

// let data = []

// // load in the real data
// fetch("https://api.superhi.com/api/test/quotes/")
//     .then(response => response.json())
//     .then(jsonData => {
//         data = jsonData
//         getQuote()
// })

const getQuote = function() {
    // if (data.length > 0) {
    // //get a random quote 
    // const randomNumber = Math.floor(Math.random() * data.length)
    // const randomQuote = data[randomNumber]
    
    // // and put it in the site
    // quoteTag.innerHTML = randomQuote.quote
    // authorTag.innerHTML = randomQuote.author
    // }


    fetch("https://api.superhi.com/api/test/quotes/random")
        .then(response => response.json())
        .then(jsonData => {
            quoteTag.innerHTML = jsonData.quote
            authorTag.innerHTML = jsonData.author
        })
}

// run on page load
getQuote()

// run when clicking the randomizer image
randomTag.addEventListener("click", function() {
    getQuote()
})