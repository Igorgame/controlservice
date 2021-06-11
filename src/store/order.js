import firebase from 'firebase'

export default {
    actions: {

        async addOrder({commit, dispatch}, {ordername, address, date, category, customer, executor, price, status}) {  
            try{
                const order = await firebase.database().ref('/orders').push({ordername, address, date, category, customer, executor, price, status})
                return {ordername, address, date, category, customer, executor, price, status, id: order.key}
            }
            catch (e) {
                console.log(e)
                throw e
            }
        },
        async fetchOrders({dispatch, commit}) {
            try {
              const orders = (await firebase.database().ref(`/orders`).once('value')).val() || {}
              return Object.keys(orders).map(key => ({...orders[key], id: key}))
            } 
            catch (e) {
                console.log(e)
                throw e
            }
          },

          async fetchOrderById({dispatch, commit}, id) {
            try {
              const order = (await firebase.database().ref(`/orders`).child(id).once('value')).val() || {}
              return {...order, id}
            } 
            catch (e) {
                console.log(e)
                throw e
            }
          }
    }
}