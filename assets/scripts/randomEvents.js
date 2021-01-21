'use strict'

const getFormFields = require("../../lib/get-form-fields")
const api = require("./api")
const ui = require("./ui")

  const randomizerMath = function () {
  // const btn = document.querySelector('.btn')
  // should real html from quote
  // add user quote feature ?
  // btn.addEventListener('click', displayKudo)
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
}

function displayKudo () {

  const index = Math.floor(Math.random() * kudos.length)
// display the quote of that index
  const div = document.querySelector('#kudo')
  const kudo = `<div class="card">
<p>${kudos[index]}</p>
</div>
`
  div.innerHTML = kudo
}
//run store.kudos into function

  const newRandomizer = function (event){
  console.log('u made it baby')
  console.log(event)
    // api.getKudos()
    // .then(ui.getKudosSuccess)
    // .catch(ui.getKudosFailure)

}
const updateKudo = function (event){
  event.preventDefault()
// console.log('u made it friend')
const kudoData = getFormFields(event.target)
// console.log(kudoData)
api.updateKudo(kudoData)

}

module.exports = {
  randomizerMath,
  displayKudo,
  newRandomizer,
  updateKudo
}