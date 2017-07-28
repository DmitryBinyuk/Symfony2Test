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
    groups: [],
    nothingNotFound: false
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
          state.nothingNotFound = response.data.data.collections.patient.length === 0
        })
        .catch(function (response) {
          console.log(response)
        })
    },
    getPatientsBySearch (state, query) {
      axios.get((query) ? '/patients?name=' + query : '/patients')
        .then(function (response) {
          state.patientsBySearch = response.data.data.collections.patient
          state.nothingNotFound = response.data.data.collections.patient.length === 0
        })
        .catch(function (response) {
          console.log(response)
        })
    },
    getPatientsByArchive (state) {
      axios.get('/patients?status=0')
        .then(function (response) {
          state.patientsByArchive = response.data.data.collections.patient
          state.nothingNotFound = response.data.data.collections.patient.length === 0
        })
        .catch(function (response) {
          console.log(response)
        })
    },
    getPatientsByAlphabet (state) {
      axios.get('/patients?page=1')
        .then(function (response) {
          state.patientsByAlphabet = response.data.data.collections.patient
          state.nothingNotFound = response.data.data.collections.patient.length === 0
        })
        .catch(function (response) {
          console.log(response)
        })
    },
    resetNotFound (state) {
      state.nothingNotFound = false
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

