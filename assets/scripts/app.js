'use strict'
const preRandomGen = require('./preRandomGen')
const randomGen = require('./randomGen')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.authenticated').hide()
  $('.posiBot').hide()
  $('#sign-up').on('submit', preRandomGen.onSignUp)
  $('#newKudoForm').hide()
  $('#sign-in').on('submit', preRandomGen.onSignIn)
  $('#change-password').on('submit', preRandomGen.onChangePassword)
  $('.signOut').on('click', preRandomGen.onSignOut)
  $('#play').on('click', preRandomGen.onSignOut)
  $('#newKudoForm').on('submit', preRandomGen.onCreateKudo)
  /// /REMEMBER ( FOR YOUR FUNCTIONS)
  $('.posiBot').on('click', randomGen.randomizerMath())
// $('.getKudos').on('click', preRandomGen.onGetKudos)
})
