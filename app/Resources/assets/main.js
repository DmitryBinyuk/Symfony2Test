// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    patientsByAlphabet: [],
    patientsByGroup: [],
    patientsBySearch: [],
    patientsByArchive: [],
    groups: []
  },

  mutations: {
    getGroups (state) {
      axios.get('/groups')
        .then(function (response) {
          state.groups = response.data.data
        })
        .catch(function (response) {
          console.log(response)
        })
    },
    getPatientsByGroup (state, group) {
      axios.get('/patients?group=' + group)
        .then(function (response) {
          state.patientsByGroup = response.data.data.collections.patient
        })
        .catch(function (response) {
          console.log(response)
        })
    },
    getPatientsBySearch (state, query) {
      axios.get((query) ? '/patients?name=' + query : '/patients')
        .then(function (response) {
          state.patientsBySearch = response.data.data.collections.patient
        })
        .catch(function (response) {
          console.log(response)
        })
    },
    getPatientsByArchive (state) {
      axios.get('/patients?status=0')
        .then(function (response) {
          state.patientsByArchive = response.data.data.collections.patient
        })
        .catch(function (response) {
          console.log(response)
        })
    },
    getPatientsByAlphabet (state) {
      axios.get('/patients')
        .then(function (response) {
          state.patientsByAlphabet = response.data.data.collections.patient
        })
        .catch(function (response) {
          console.log(response)
        })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store: store
})

