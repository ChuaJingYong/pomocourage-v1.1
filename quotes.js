let API_URL = 'https://api.quotable.io/random'

let button = document.querySelector('.new-quote-button')

button.addEventListener('click',()=>{
    getRandomQuote()
})

async function getRandomQuote (){
    let response = await fetch(API_URL)
    let data = await response.json()
    console.log(data)

    console.log('content =>', data.content)
    console.log('author =>', data.author)
    displayQuote(data.content,data.author)
}

// display quote in web page
function displayQuote(content, author){
    let quoteContent = document.querySelector('.quote-content')
    console.log('this is new quote',quoteContent)
    quoteContent.innerHTML = content

    let quoteAuthor = document.querySelector('.quote-author')
    quoteAuthor.innerHTML = `~ ${author}`
}

window.onload = getRandomQuote()
// let response = await fetch(`${BASE_URL}/users?id=${userID}`)
//     // here we're grabbing the whole json file
//     let [user] = await response.json()
//     console.log(user)
//     return user