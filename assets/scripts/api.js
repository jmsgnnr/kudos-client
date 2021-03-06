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

  const createKudo = function (kudoData) {
    console.log('data being sent to the server is',)
    return $.ajax({
      url: config.apiUrl + '/kudos',
      method: 'POST',
      data: kudoData,
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }
    })
    }
    const indexKudos = function(){
          return $.ajax({
            url: config.apiUrl + '/kudos',
            method: 'GET',
            headers: {
            Authorization: 'Bearer ' + store.user.token
          }

          })
  }
  const updateKudo = function(kudoData){
    // console.log(kudoData)
    return $.ajax({
      url: config.apiUrl + '/kudos/' + kudoData.id,
      method: 'PATCH',
      data: kudoData,
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }
    })
 }
  const deleteKudo = function(kudoData){
    return $.ajax({
      url: config.apiUrl + '/kudos/' + kudoData.id,
      method: 'DELETE',
      data: kudoData,
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }
    })
  }

  const getRandomKudos = function(){
return $.ajax({
  url: config.apiUrl + '/kudos/',
  method: 'GET',
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
deleteKudo,
getRandomKudos
}