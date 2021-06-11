import firebase from 'firebase/app'

export default {
  state: {
    users: {}
  },
  mutations: {
    setInfo(state, users) {
    state.users = users
    },
    clearInfo(state) {
        state.users = {}
    }
  },
  actions: { //путь к пользователям
    async getName({dispatch, commit}) {
      try {
        const uid = await dispatch('getUid')
        const users = (await firebase.database().ref(`/users/${uid}`).once('value')).val()
        commit('setInfo', users)
      } catch (e) {

      }
    }
  },
  getters: {
    users: s => s.users
  }
}