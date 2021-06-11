import firebase from 'firebase'

export default {
    actions: { 
        //регистрация
        async registration({dispatch, commit}, {surname, name, patronymic, phone, email, password, role}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}`).set({
                    surname,
                    name,
                    patronymic,
                    phone,
                    email,
                    password,
                    role
                })
            } catch (e) {
                // получаем сообщение об ошибке
                console.log(e)
                throw e
            }
        },
        getUid() {  //получение идентификатора пользователя
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
    }
}