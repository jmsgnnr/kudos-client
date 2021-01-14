'use strict'
const store = require('./store')

const signUpSuccess = function (response) {
  $('.message').text('Signed Up Successfully! :)')
  $('form').trigger('reset')
}
const signUpFailure = function (error) {
  console.log(error)
  $('.message').text('Sign Up FAILED :( with error: ' + error.responseJSON.message)
}

const signInSuccess = function (response) {
  $('.message').text('Sign In Success! Welcome :)')
  console.log(store)
  store.user = response.user

  $('.unauthenticated').hide()
  $('.authenticated').show()
  $('form').trigger('reset')
  $('.numBoard').show()
}

const signInFailure = function (error) {
  $('.message').text('Sign In failed!!!!' + error.responseJSON.message)
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('.message').text('Change password success! :)')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('.message').text('Change password failed wit error: ' + error.responseJSON.message)

}
const signOutSuccess = function () {
  $('.message').text('sign out success! :)')
  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('.gameBoard').hide()
  store.user = null
  $('form').trigger('reset')
}
const signOutFailure = function () {
  $('.message').text('Sign out failed!!! :(')
  console.log('hi')

}
const newQuoteSuccess = function quotes () {
  $('.message').text('New Quote Success! Welcome :)')
  console.log(store)
  $('.numBoard').show()
  $('.testing').hide()
  $('form').trigger('reset')
}
//   const newQuoteFailure = function (error){
//     $('.message').text('new game failed wit error: ' + error.responseJSON.message)
//     $('form').trigger('reset')

// // }
// const getQuotesSuccess = function (responseData) {
//   console.log(responseData)
//   const allQuotes = responseData.quotes.length

//   $('.message').text("testttttt"  + allQuotes)
//     $('form').trigger('reset')

//   }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newQuoteSuccess

}
