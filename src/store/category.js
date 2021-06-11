import firebase from 'firebase'

export default {
    actions: {
        async fetchCategories({commit, dispatch}) {
            try{
                 const categories = (await firebase.database().ref('/categories').once('value')).val() || {}

                return Object.keys(categories).map(key => ({...categories[key], id: key}))
            }
             catch (e) {
                console.log(e) 
                throw e
            }
        },
        async fetchCategoryById({commit, dispatch}, id) {
            try{
                 const category = (await firebase.database().ref('/categories').child(id).once('value')).val() || {}
                return {...category, id}
             }
            catch (e) {
                console.log(e)
                throw e
            }
        },
        async addCategory({commit, dispatch}, {name}) {  
            try{
                const category = await firebase.database().ref('/categories').push({name})
                return {name, id: category.key}
            }
            catch (e) {
                console.log(e)
                throw e
            }
        },
    }
}