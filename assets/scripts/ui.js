'use strict'
const store = require('./store')

const signUpSuccess = function (response) {
  $('#message').text('Signed Up Successfully! :)')
  $('form').trigger('reset')
}
const signUpFailure = function (error) {
  console.log(error)
  $('#message').text('Sign Up FAILED :( with error: ' + error.responseJSON.message)
}

const signInSuccess = function (response) {
  $('#message').text('Sign In Success! Welcome :)')
  console.log(store)
  store.user = response.user

  $('.unauthenticated').hide()
  $('.authenticated').show()
  $('form').trigger('reset')
  $('.numBoard').show()
}

const signInFailure = function (error) {
  $('#message').text('Sign In failed!!!!' + error.responseJSON.message)
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message').text('Change password success! :)')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#message').text('Change password failed wit error: ' + error.responseJSON.message)
  $('form').trigger('reset')
}
const signOutSuccess = function () {
  $('#message').text('sign out success! :)')
  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('.gameBoard').hide()
  store.user = null
  $('form').trigger('reset')
}
const signOutFailure = function () {
  console.log('hi')
  $('form').trigger('reset')
}
const newKudoSuccess = function quotes () {
  $('#message').text('New Kudo Success! Welcome :)')
  console.log(store)
  $('.numBoard').show()
  $('.testing').hide()
  $('form').trigger('reset')
}
  const newKudoFailure = function (error){
    $('#message').text('new game failed wit error: ' + error.responseJSON.message)
    $('form').trigger('reset')
 }
const getKudosSuccess = function (responseData) {
  console.log(responseData)
  const allQuotes = responseData.quotes.length

  $('#message').text("testttttt"  + allKudos)
    $('form').trigger('reset')

  }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newKudoSuccess,
  newKudoFailure,
  getKudosSuccess
}
