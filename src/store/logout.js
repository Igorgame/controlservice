import firebase from 'firebase'

export default {
    actions: { 
        async logout({dispatch}) {  //выход
            await firebase.auth().signOut()
        },
    }
}