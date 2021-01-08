export function setUser (state, userObject) {
    state.userData.id = userObject.id
    state.userData.first_name = userObject.first_name
    state.userData.last_name = userObject.last_name
    state.userData.email = userObject.email
    state.userData.username = userObject.username
    state.userData.position = userObject.position
    state.userData.image = userObject.image
}

export function resetUser (state) {
  state.userData.id = null
  state.userData.first_name = null
  state.userData.last_name = null
  state.userData.email = null
  state.userData.username = null
  state.userData.position = null
  state.userData.image = null
}
