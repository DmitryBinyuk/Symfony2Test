// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    patientsByAlphabet: [],
    patientsByGroup: [],
    patientsBySearch: [],
    patientsByArchive: [],
    groups: [
      'Mende',
      'Manuela',
      'Ittri'
    ]
  },

  mutations: {
    getPatientsByGroup (state, group) {
      console.log('Тут будет запрос на загрузку пациентов с фильтрацией по группе ' + group)
      state.patientsByGroup = [
        {id: 1, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}},
        {id: 2, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}
      ]
    },
    getPatientsBySearch (state, query) {
      console.log('Поиск по: ' + query)
      state.patientsBySearch = [
        {id: 1, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}
      ]
    },
    getPatientsByArchive (state) {
      console.log('Архивные пациенты')
      state.patientsByArchive = [
        {id: 5, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}},
        {id: 6, label: 'Marie Meier', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}},
        {id: 7, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0, details: {email: 'test@test.de', tel: '1234'}}
      ]
    },
    getPatientsByAlphabet (state) {
      console.log('Пациенты по алфавиту')
      state.patientsByAlphabet = [
        {id: 1, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}},
        {id: 2, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}},
        {id: 3, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}},
        {id: 4, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}},
        {id: 5, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}},
        {id: 6, label: 'Marie Meier', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}},
        {id: 7, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0, details: {email: 'test@test.de', tel: '1234'}}
      ]
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

