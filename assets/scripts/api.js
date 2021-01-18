'use strict'

const { data } = require('jquery')
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

  const createKudo = function (data) {
    console.log('data being sent to the server is',)
    return $.ajax({
      url: config.apiUrl + '/kudos/',
      method: 'POST',
      data,
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }
    })
    }
    const indexKudos = function(data){
          return $.ajax({
            url: config.apiUrl + '/kudos/' + data.kudo.id ,
            method: 'GET',
            headers: {
            Authorization: 'Bearer ' + store.user.token
          }

          })
  }
  const updateKudo = function(data){
    return $.ajax({
      url: config.apiUrl + '/kudos/' + data.kudo.id,
      method: 'PATCH',
      data,
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }

    })


  }
  const destroyKudo = function(data){
    return $.ajax({
      url: config.apiUrl + '/kudos/' + data.kudo.id,
      method: 'DELETE',
      data,
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }
    })
  }

  
module.exports = {
signUp,
signIn,
changePassword,
signOut, 
createKudo,
indexKudos,
updateKudo,
destroyKudo


}