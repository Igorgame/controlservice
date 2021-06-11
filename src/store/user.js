import firebase from 'firebase'

export default {
    actions: {
        async fetchUsers({commit, dispatch}) {
            try{
                 const users = (await firebase.database().ref('/users').once('value')).val() || {}

                return Object.keys(users).map(key => ({...users[key], id: key}))
             }
             catch (e) {throw e}
        },
        async fetchUserById({commit, dispatch}, id) {
            try{
                 const user = (await firebase.database().ref('/users').child(id).once('value')).val() || {}

                return {...user, id}
            }
             catch (e) {throw e}
        },
    }
}