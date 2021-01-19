'use strict'

  const randomizerMath = function () {
  const btn = document.querySelector('.btn')
  // should real html from quote
  // add user quote feature ?
  btn.addEventListener('click', displayKudo)
// Test array for quote list.
   const kudos = [
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

function displayKudo () {
    // create an index of a random number
    // convert it into between 0 to length of Kudos[]
    // randomizer function also same for userKudos
    const index = Math.floor(Math.random() * kudos.length)

    // display the quote of that index
    const div = document.querySelector('#kudo')
    const kudo = `<div class="card">
<p>${kudos[index]}</p>
 
</div>
 `
    div.innerHTML = kudo
  }
  
  module.exports = {
    displayKudo
  }
}
module.exports = {
  randomizerMath
}
