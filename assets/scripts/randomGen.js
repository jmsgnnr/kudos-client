'use strict'

const randomMath = function () {
  const btn = document.querySelector('.btn')
  // should real html from quote
  // add user quote feature ?
  //
  btn.addEventListener('click', displayQuote)

  // Test array for quote list.

  const quotes = [

    'you are special',
    'you can rly do anything',
    'seriously, remember this stuff',
    'you can do anything you set your mind to',
    'wow so smart, so cute',
    'have you appreciated yourself today?',
    ' meditate',
    ' breathe',
    ' you arent poor, you are pre-rich',
    ' call your family today',
    'you deserve a break',
    ' do not be hard on yourself',
    ' you are rare',
    ' you are a champion',
    ' you are great ',
    ' you are limitless',
    ' God loves you',
    ' You love you',
    'we love you '

  ]

  // userQuotes = [],

  // userQuotes.length = 0
  // randomizerFunction(user.Quotes)
  // USE GETFORMFIELDS TO RUN CREATE FUNCT

  // CHANGE VAR FOR INDEX CODE BELOW

  function displayQuote () {
    // create an index of a random number
    // convert it into between 0 to length of quotes[]
    // randomizer function also same for userQuotes
    const index = Math.floor(Math.random() * quotes.length)

    // display the quote of that index
    const div = document.querySelector('#quote')
    const quote = `<div class="card">
<p>${quotes[index]}</p>
 
</div>
 `
    div.innerHTML = quote
  }
}
module.exports = {
  randomMath

}
