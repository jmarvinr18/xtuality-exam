import api from './api'

export default {
    getAllStreamsByVideoID (user_id, video_id) {
        return api().get(`/api/streams?user_id=${user_id}&video_id=${video_id}`)
    },
    getAllStreams (user_id) {
        return api().get(`/api/streams?user_id=${user_id}`)
    },
    getStreamById (id) {
        return api().get(`/api/stream/${id}`)
    },
    createStream (user_id, video_id, stream) {
        return new Promise(function (resolve, reject) {
            api().post(`/api/stream/${user_id}/${video_id}`, { stream } )
              .then(response => resolve(response))
              .catch(error => reject(error))
          })
    },
}