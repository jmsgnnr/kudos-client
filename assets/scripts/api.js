'use strict'

const config = require('./config')
const store = require('./store')


const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}
const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = function (formData) {
  console.log(store.user)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const signOut = function () {
    return $.ajax({
      url: config.apiUrl + '/sign-out',
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer '  + store.user.token
      }
      })
  }

  const newKudo = function (formData) {
    console.log('data being sent to the server is', formData)
    return $.ajax({
      url: config.apiUrl + '/kudos',
      method: 'POST',
      data: formData
    })
    }

    const getKudo = function(){
          return $.ajax({
            url: config.apiUrl + '/kudos',
            method: 'GET',
            headers: {authorization: 'Bearer ' + store.user.token},
            data: {}

          })
  }

  
module.exports = {
signUp,
signIn,
changePassword,
signOut, 
newKudo,
getKudo

}