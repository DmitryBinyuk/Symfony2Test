<template>
    <div class="col-sm-4 col-sm-offset-6">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>Search</h4>
            </div>

            <div class="panel-body">
                <div :class="{ 'input-group': searchQuery }">
                    <input type="text" class="form-control" id="search" placeholder="Search" v-model="searchQuery" @keyup="searchPatients(searchQuery)" @keyup.esc="clearSearch()">
                    <span class="input-group-btn">
                        <button class="btn btn-default" v-show="searchQuery" type="button" @click="clearSearch()"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                    </span>
                </div>
            </div>

            <patients :patients="patientsBySearch"></patients>
        </div>
    </div>
</template>

<script>
  import Patients from '../Patients'
  import { mapState } from 'vuex'

  export default {
    name: 'searchTab',

    components: {
      Patients
    },

    data () {
      return {
        searchQuery: ''
      }
    },

    computed: {
      localComputed () {
        //
      },
      ...mapState([
        'groups',
        'patientsBySearch'
      ])
    },

    methods: {
      searchPatients (searchQuery) {
        this.$store.commit('getPatientsBySearch', searchQuery)
      },

      clearSearch () {
        this.searchQuery = ''
        this.searchPatients(null)
      }
    },

    mounted: function () {
      this.searchPatients(null)
    }
  }

</script>