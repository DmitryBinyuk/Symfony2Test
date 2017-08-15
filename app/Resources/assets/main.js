// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
// import axios from 'axios'
import VueVirtualScroller from 'vue-virtual-scroller'
import _ from 'lodash'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueVirtualScroller)

const store = new Vuex.Store({
  state: {
    patients: [
      {id: 1, label: 'Vier Testfall', group: 'Mendffe, Manuela', status: 0, details: {email: 'test@test.de', tel: '1234'}}, {id: 2, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 3, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 4, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 5, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 6, label: 'Marie Meier', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 7, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0, details: {email: 'test@test.de', tel: '1234'}}, {id: 8, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 9, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 10, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 11, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 12, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 13, label: 'Marie Meier', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 14, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0, details: {email: 'test@test.de', tel: '1234'}}, {id: 15, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 16, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 17, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 18, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 19, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 20, label: 'Marie Meier', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 21, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0, details: {email: 'test@test.de', tel: '1234'}}, {id: 1, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 2, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 3, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 4, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 5, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 6, label: 'Marie Meier', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 7, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0, details: {email: 'test@test.de', tel: '1234'}}, {id: 8, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 9, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 10, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 11, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 12, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 13, label: 'Marie Meier', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 14, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0, details: {email: 'test@test.de', tel: '1234'}}, {id: 15, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 16, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 17, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 18, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 19, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 20, label: 'Marie Meier', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 21, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0, details: {email: 'test@test.de', tel: '1234'}}, {id: 1, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 2, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 3, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 4, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 5, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 6, label: 'Marie Meier', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 7, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0, details: {email: 'test@test.de', tel: '1234'}}, {id: 8, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 9, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 10, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 11, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 12, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 13, label: 'Marie Meier', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 14, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0, details: {email: 'test@test.de', tel: '1234'}}, {id: 15, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 16, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 17, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 18, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 19, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 20, label: 'Marie Meier', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 21, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0, details: {email: 'test@test.de', tel: '1234'}}, {id: 1, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 2, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 3, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 4, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 5, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 6, label: 'Marie Meier', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 7, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0, details: {email: 'test@test.de', tel: '1234'}}, {id: 8, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 9, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 10, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 11, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 12, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 13, label: 'Marie Meier', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 14, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0, details: {email: 'test@test.de', tel: '1234'}}, {id: 15, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 16, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 17, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 18, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 19, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 20, label: 'Marie Meier', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 21, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0, details: {email: 'test@test.de', tel: '1234'}}, {id: 1, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 2, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 3, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 4, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 5, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 6, label: 'Marie Meier', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 7, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0, details: {email: 'test@test.de', tel: '1234'}}, {id: 8, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 9, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 10, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 11, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 12, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 13, label: 'Marie Meier', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 14, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0, details: {email: 'test@test.de', tel: '1234'}}, {id: 15, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 16, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 17, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 18, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 19, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 20, label: 'Marie Meier', group: 'Ittri, Mulham', status: 1, details: {email: 'test@test.de', tel: '1234'}}, {id: 21, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0, details: {email: 'test@test.de', tel: '1234'}}
    ],
    groups: [],
    currentList: {
      id: 'AZ',
      name: 'sortation',
      url: 'patient-list',
      title: 'Patienten-Liste',
      collection: 'patient',
      group: false,
      filter: {status: 1},
      filterBox: [
        {type: 'text', value: 'label'}
      ]
    },
    navigation: [
      {
        id: 'AZ',
        name: 'sortation',
        url: 'patient-list',
        title: 'Patienten-Liste',
        collection: 'patient',
        group: false,
        filter: {status: 1},
        filterBox: [
          {type: 'text', value: 'label'}
        ]
      },
      {
        id: 'group',
        name: 'group',
        url: 'patient-list',
        title: 'Patienten-Liste',
        collection: 'patient',
        group: true
      },
      {
        id: 'archive',
        name: 'archive',
        url: 'patient-list-archived',
        title: 'Liste der archivierten Patienten',
        collection: 'patient',
        group: false,
        filter: {status: 0}
      }
    ],
    filteredPatients: [],
    currentGroup: null,
    searchQuery: null
  },

  mutations: {
    setList (state, list) {
      state.currentList = _.find(state.navigation, {'name': list})
    },
    setCurrentGroup (state, group) {
      state.currentGroup = group
    },
    filterPatients (state) {
      // Select by filter
      for (let key in state.currentList.filter) {
        state.filteredPatients = state.filteredPatients.filter(patient => patient[key] === state.currentList.filter[key])
      }
      // Select by group
      if (state.currentList.group) {
        state.filteredPatients = state.filteredPatients.filter(patient => patient.group === state.currentGroup)
      }
      // Search by searchQuery
      if (state.currentList.filterBox) {
        for (let box in state.currentList.filterBox) {
          state.filteredPatients = state.filteredPatients.filter(patient => {
            let value = _.lowerCase(patient[state.currentList.filterBox[box].value])
            let query = _.lowerCase(state.searchQuery)
            return value.indexOf(query) + 1
          })
        }
      }
    },
    freshPatients (state) {
      state.filteredPatients = state.patients
    },
    setGroups (state, groups) {
      state.groups = groups
    },
    setSearchQuery (state, searchQuery) {
      state.searchQuery = searchQuery
    }
  },

  actions: {
    selectList (context, list) {
      context.commit('setList', list)
      context.commit('freshPatients')
      context.commit('filterPatients')
    },
    selectGroup (context, group) {
      context.commit('setCurrentGroup', group)
      context.commit('freshPatients')
      context.commit('filterPatients')
    },
    loadGroups ({commit, state}) {
      let groups = _.mapValues(_.uniqBy(state.patients, 'group'), 'group')
      commit('setGroups', groups)
    },
    searchPatients (context, searchQuery) {
      context.commit('setSearchQuery', searchQuery)
      context.commit('freshPatients')
      context.commit('filterPatients')
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

