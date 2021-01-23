'use strict'
const events = require('./events.js')
const randomEvents = require('./randomEvents.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.page-2').hide()
  $('.page-3').hide()
  $('.page-1').show()
  $('.authenticated').hide()
  $('.posiBot').hide()
  $('#sign-up').on('submit', events.onSignUp)
  $('#newKudoForm').hide()
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('.signOut').on('click', events.onSignOut)
 $('#newKudoForm').on('submit', randomEvents.createNewKudo)
$('#getBtn').on('click', randomEvents.indexKudos)
$('#updateKudos').on('submit', randomEvents.updateKudo)
$('#deleteKudos').on('submit', randomEvents.deleteKudo)
$('#randomBtn').on('click', randomEvents.randomizeKudos)
})