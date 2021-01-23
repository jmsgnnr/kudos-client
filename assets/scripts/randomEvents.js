'use strict'

const getFormFields = require("../../lib/get-form-fields")
const api = require("./api")
const ui = require("./ui")

//  const kudos = [
//     'you are special',
//     'you can rly do anything',
//     'seriously, remember this stuff',
//     'you can do anything you set your mind to',
//     'wow so smart, so cute',
//     'have you appreciated yourself today?',
//     ' meditate',
//     ' breathe',
//     ' you arent poor, you are pre-rich',
//     ' call your family today',
//     'you deserve a break',
//     ' do not be hard on yourself',
//     ' you are rare',
//     ' you are a champion',
//     ' you are great ',
//     ' you are limitless',
//     ' God loves you',
//     ' You love you',
//     'we love you '

//   ]
// const displayKudo = function (event) {
 
// const allKudos = event.kudos
// console.log(store.kudos)
//   const randomKudos = allKudos[Math.floor(Math.random() * kudos.length)];
// // display the quote of that index
//   const div = document.querySelector('#kudo')
//   const kudo = `<div class="card">
// <p>${kudos[randomKudos]}</p>
// </div>
// // `
//   div.innerHTML = kudo
// }
//run store.kudos into function
// const newRandomizer = function (event){
//     event.preventDefault()
//   console.log('u made it baby')
//   console.log(event)
//     api.getKudos()
//     .then(ui.getKudosSuccess)
//     .catch(ui.getKudosFailure)

// }
const updateKudo = function (event){
  event.preventDefault()
console.log('u made it friend')
const kudoData = getFormFields(event.target)
// console.log(kudoData)
api.updateKudo(kudoData)
.then(ui.updateKudoSuccess)
.catch(ui.updateKudoFailure)
}
const createNewKudo = function(event){
event.preventDefault()
console.log('getting there')
const kudoData = getFormFields(event.target)
api.createKudo(kudoData)
.then(ui.createKudoSuccess)
.catch(ui.createKudoFailure)
}

const indexKudos = function(event){
event.preventDefault()
console.log('yoooo')
api.indexKudos()
.then(ui.indexKudosSuccess)
  .catch(ui.indexKudosFailure)
}

const deleteKudo = function (event) {
  event.preventDefault()
  const form = event.target
  const kudoData = getFormFields(form)
  console.log(kudoData)
  console.log(kudoData.Kudo)
  api.deleteKudo(kudoData)
    .then(ui.deleteKudoSuccess)
    .catch(ui.deleteKudoFailure)
}

module.exports = {
  // randomizerMath,
  // displayKudo,
  // newRandomizer,
  updateKudo,
  createNewKudo,
  indexKudos,
  deleteKudo
}