import api from './api'


export default {
    init () {
        return api().get(`auth/init`)
    },
    register (userData) {
        return new Promise(function (resolve, reject) {
            api().post(`/auth/register`, { userData } )
              .then(response => resolve(response))
              .catch(error => reject(error))
          })
    },
    login (userData) {
        return new Promise(function (resolve, reject) {
            api().post(`/auth/login`, { userData } )
              .then(response => resolve(response))
              .catch(error => reject(error))
          })
    },
    logout () {
        return new Promise(function (resolve, reject) {
            api().post(`/auth/logout`)
              .then(response => resolve(response))
              .catch(error => reject(error))
          })
    },
}