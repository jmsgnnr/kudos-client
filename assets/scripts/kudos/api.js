const createKudo = function (data) {
    console.log('data being sent to the server is',)
    return $.ajax({
      url: config.apiUrl + '/kudos',
      method: 'POST',
      data,
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }
    })
    }
    const indexKudos = function(data){
          return $.ajax({
            url: config.apiUrl + '/kudos/' + data.kudo._id ,
            method: 'GET',
            headers: {
            Authorization: 'Bearer ' + store.user.token
          }

          })
  }
  const updateKudo = function(data){
    return $.ajax({
      url: config.apiUrl + '/kudos/' + data.kudo._id,
      method: 'PATCH',
      data,
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }

    })


  }
  const destroyKudo = function(data){
    return $.ajax({
      url: config.apiUrl + '/kudos/' + data.kudo._id,
      method: 'DELETE',
      data,
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }
    })
  }
