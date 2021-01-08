import api from './api'

const config = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}
export default {
    getAllVideos (id) {
        return api().get(`api/videos/${id}`)
    },
    getVideoById (id) {
        return api().get(`/api/videos/details/${id}`)
    },
    createNewVideo (id, videoObj) {
        return new Promise(function (resolve, reject) {
            api().post(`api/videos/${id}`, videoObj, config )
              .then(response => resolve(response))
              .catch(error => reject(error))
          })
    },
    updateVideo (id, videoObj) {
        return new Promise(function (resolve, reject) {
            api().put(`api/videos/${id}`, videoObj, config )
              .then(response => resolve(response))
              .catch(error => reject(error))
          })
    },
    deleteVideo (id) {
        return new Promise(function (resolve, reject) {
            api().delete(`/api/videos/${id}`)
            .then(response => resolve(response))
            .catch(() => {
            })
        })
      },
}