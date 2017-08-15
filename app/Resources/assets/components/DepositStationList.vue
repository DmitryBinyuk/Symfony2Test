<template>
    <div class="col-sm-4 col-sm-offset-6">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>{{ list.title }}</h4>
            </div>

            <div class="panel-body" v-if="list.group">
                <div class="list-group" v-show="showGroupsBlock">
                    <a class="list-group-item"
                       v-for="group in groups"
                       @click="showPatients(group)"
                    >{{ group }}</a>
                </div>
                <button class="btn btn-default" @click="showGroups()" v-show="showPatientsBlock">Back</button>
            </div>

            <div class="panel-body" v-show="list.filterBox">
                <div :class="{ 'input-group': searchQuery }">
                    <input type="text" class="form-control" id="search" placeholder="Search" v-model="searchQuery" @keyup="searchPatients(searchQuery)">
                    <span class="input-group-btn">
                        <button class="btn btn-default" v-show="searchQuery" type="button" @click="clearSearch()"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                    </span>
                </div>
            </div>

            <div class="list-group patients" v-show="showPatientsBlock">

                <virtual-scroller
                        class="scroller"
                        :items="filteredPatients"
                        item-height="41"
                        style="height: 200px;"
                >
                    <template scope="props">
                        <deposit-station-item :patient="props.item"></deposit-station-item>
                    </template>
                </virtual-scroller>
            </div>

        </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import DepositStationItem from './DepositStationItem'

  export default {

    components: {
      DepositStationItem
    },

    props: [
      'list'
    ],

    computed: {
      localComputed () {
        //
      },
      ...mapState([
        'navigation',
        'groups',
        'currentList',
        'filteredPatients',
        'currentGroup'
      ])
    },

    data () {
      return {
        showPatientsBlock: true,
        showGroupsBlock: false,
        searchQuery: null,
        data: null
      }
    },

    methods: {
      showPatients (group) {
        this.showPatientsBlock = true
        this.showGroupsBlock = false
        this.$store.dispatch('selectGroup', group)
      },

      showGroups () {
        this.showPatientsBlock = false
        this.showGroupsBlock = true
      },

      clearSearch () {
        this.searchQuery = null
        this.searchPatients(null)
      },

      searchPatients (searchQuery) {
        this.$store.dispatch('searchPatients', searchQuery)
      }
    },

    mounted () {
      if (!this.currentGroup && this.currentList.group) {
        this.showPatientsBlock = false
        this.showGroupsBlock = true
      }
    }
  }
</script>
