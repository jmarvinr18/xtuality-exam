export function setVideoObj (state, videoObject) {
    state.videoData.id = videoObject.id
    state.videoData.title = videoObject.title
    state.videoData.subtitle = videoObject.subtitle
    state.videoData.description = videoObject.description
    state.videoData.thumbnail = videoObject.thumbnail
}
export function setAction (state, action) {
  state.action = action
}

export function resetVideoObj (state) {
  state.videoData.id = null
  state.videoData.title = null
  state.videoData.subtitle = null
  state.videoData.description = null
  state.videoData.thumbnail = null
}
