// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(firestorePlugin)
Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDeqASqvlRQZ6YTVrUSQuZ8mAz-dar6cR0",
  authDomain: "vue-auth-firebase-7c149.firebaseapp.com",
  databaseURL: "https://vue-auth-firebase-7c149.firebaseio.com/users",
  projectId: "vue-auth-firebase-7c149",
  storageBucket: "vue-auth-firebase-7c149.appspot.com",
  messagingSenderId: "162954151267",
  appId: "1:162954151267:web:3127d9cfa605af527c7f56",
  measurementId: "G-74N57GP19T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

export const db = firebase.firestore()
