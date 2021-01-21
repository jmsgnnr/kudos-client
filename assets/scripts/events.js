'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')
// const randomGen = require('./randomGen.js')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)

}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}




const onCreateKudo = function (event){
  event.preventDefault()
  const form = event.target
  const kudoData = getFormFields(form)
  console.log('made it to events page', kudoData)
  api.createKudo(kudoData)
  .then(ui.newKudoSuccess)
  .catch(ui.newKudoFailure)
}

// const onIndexKudos = function () {
//   api.indexKudos()
//     .then(ui.onIndexSuccess)
//     .catch(ui.onError)
// }


// const onUpdateKudo = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const kudoData = getFormFields(form)
//   api.updateKudo(kudoData)
//     .then(ui.updateKudoSuccess)
//     .catch(ui.updateKudoFailure)
// }

// const onDeleteKudo = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const kudoData = getFormFields(form)
//   console.log(kudoData)
//   console.log(kudoData.Kudo)
//   api.deleteKudo(kudoData)
//     .then(ui.deleteKudoSuccess)
//     .catch(ui.deleteKudoFailure)
// }

module.exports = {

  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  // onRandomGen,
 onCreateKudo
//  onIndexKudos,
//   onUpdateKudo,
//   onDeleteKudo,
 }
