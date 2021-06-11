import firebase from 'firebase'

export default {
    actions: {  //логин
        async login({dispatch, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                console.log(e)
                throw e
            }
        },
        
    }
}