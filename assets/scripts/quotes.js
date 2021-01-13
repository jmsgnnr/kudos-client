
const quotes = [

  'you are special',
  ' you are rare',
  ' you are a champion',
  ' you are great ',
  ' you are limitless',
  ' God loves you',
  ' You love you',
  'we love you '

]

const btn = document.querySelector('.btn')
btn.addEventListener('click', displayQuote)

function displayQuote () {
  // create an index of a random number
  // convert it into between 0 to length of quotes[]
  const index = Math.floor(Math.random() * quotes.length)

  // display the quote of that index
  const div = document.querySelector('#quote')
  const quote = `<div class="card">
<p>${quotes[index]}</p>
 
</div>`
  div.innerHTML = quote
}
