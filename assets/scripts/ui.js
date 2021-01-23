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
  $('#getKudos').show()
  $('#getRandom').show()
  $('.posiBot').show()
  console.log(store)
  store.user = response.user

  $('.unauthenticated').hide()
  $('.authenticated').show()
  $('form').trigger('reset')
  $('.posiBot').show()
  $('#newKudoForm').show()
}

const signInFailure = function (error) {
  $('.message').text('Sign In failed!!!! ' + error.responseJSON.message)
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('.message').text('Change password success! :)')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('.message').text('Change password failed wit error: ' + error.responseJSON.message)
  $('form').trigger('reset')
}
const signOutSuccess = function () {
  $('.message').text('sign out success! :)')
  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('#getKudos').hide()
  $('#getRandom').hide()
  $('.posiBot').hide()
  store.user = null
  $('form').trigger('reset')

}
const signOutFailure = function () {
  console.log('hi')
  $('form').trigger('reset')
}
const createKudoSuccess = function (responseData) {
  $('.message').text('New Kudo Success! Welcome :)')
  $('.message2').text(responseData.kudo._id)
  console.log('this is response data inside of ui', responseData)
$('form').trigger('reset')

}

  const createKudoFailure = function (error){
    $('.message').text('error: ' + error.responseJSON.message)
    $('form').trigger('reset')
 }
 // we cant make two seperate things one variable , so we use a for each loop to iterate through 
 // different pieces of data in an array , forEach will extract text from HTML

const indexKudosSuccess = function (responseData) {
  console.log('works')
  const kudos = responseData.kudos
  let kudosHTML = ''
  kudos.forEach (function(currentKudo){
    console.log(currentKudo)
//remember backticks for string interpolation 
const currentKudoHTML = `
<h2>${currentKudo.kudos}</h2>
<h3>${currentKudo._id}</h3>
`
// the for each function loops through kudos/grabs kudo data (kudos,id)
// for each assigns them into HTML
// add value from current kudoHTML into the blank array 
kudosHTML += currentKudoHTML
 })
 $('#kudo').html(kudosHTML)
 $('form').trigger('reset')
}

const indexKudosFailure = function (){
    console.log('error')
  }

 const updateKudoSuccess = function (responseData){
console.log(responseData)
$('form').trigger('reset')

  }

  const updateKudoFailure = function () {
console.log('error')
$('form').trigger('reset')

  }
// const deleteKudoSuccess = function (){


// }
// const deleteKudoFailure = function () {


// }


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createKudoSuccess,
  createKudoFailure,
  indexKudosSuccess,
  indexKudosFailure,
  updateKudoSuccess,
  updateKudoFailure
//   deleteKudoSuccess,
//   deleteKudoFailure
}