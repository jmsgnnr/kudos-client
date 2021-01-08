'use strict'

const preRandomGen = require('./preRandomGen')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.authenticated').hide()
  $('#sign-up').on('submit', preRandomGen.onSignUp)
  $('#sign-in').on('submit', preRandomGen.onSignIn)
  $('#change-password').on('submit', preRandomGen.onChangePassword)
  $('.signOut').on('click', preRandomGen.onSignOut)
  $('#play').on('click', preRandomGen.onSignOut)
$('.testing').on('click', preRandomGen.onNewGame)
////REMEMBER ( FOR YOUR FUNCTIONS)
})
