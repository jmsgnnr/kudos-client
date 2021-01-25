'use strict'

const getFormFields = require("../../lib/get-form-fields")
const api = require("./api")
const store = require("./store")
const ui = require("./ui")


const randomizeKudos = function(event) {
  event.preventDefault()
// console.log('made it to random')
api.getRandomKudos()
.then(ui.randomKudoSuccess)
.catch(ui.randomKudoFailure)

}
const updateKudo = function (event){
  event.preventDefault()
// console.log('u made it friend')
const kudoData = getFormFields(event.target)
// console.log(kudoData)
api.updateKudo(kudoData)
.then(ui.updateKudoSuccess)
.catch(ui.updateKudoFailure)
}
const createNewKudo = function(event){
event.preventDefault()
// console.log('getting there')
const kudoData = getFormFields(event.target)
api.createKudo(kudoData)
.then(ui.createKudoSuccess)
.catch(ui.createKudoFailure)
}

const indexKudos = function(event){
event.preventDefault()
// console.log('yoooo')
api.indexKudos()
.then(ui.indexKudosSuccess)
  .catch(ui.indexKudosFailure)
}

const deleteKudo = function (event) {
  event.preventDefault()
  const kudoData = getFormFields(event.target)
  api.deleteKudo(kudoData)
    .then(ui.deleteKudoSuccess)
    .catch(ui.deleteKudoFailure)
}

module.exports = {
 
  randomizeKudos,
  updateKudo,
  createNewKudo,
  indexKudos,
  deleteKudo
}