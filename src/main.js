import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from './filters/date.filter'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.filter('date', dateFilter)

firebase.initializeApp ({
  apiKey: "AIzaSyBSrk5KWhW4sqll7ftqbjgg8bv3kY4dkVo",
  authDomain: "service-a02c1.firebaseapp.com",
  projectId: "service-a02c1",
  storageBucket: "service-a02c1.appspot.com",
  messagingSenderId: "439008089945",
  appId: "1:439008089945:web:ae4d453ab4a15bb17a1e48",
  measurementId: "G-NYYBR6YG84"
});

//проверка инициализации приложения
let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

Vue.config.productionTip = false




