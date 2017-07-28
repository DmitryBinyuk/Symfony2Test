<template>
    <div class="col-sm-4 col-sm-offset-6">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>Groups</h4>
            </div>

            <div v-show="groups == ''"><img src="loader.svg"></div>

            <div class="panel-body" v-show="showGroupsBlock">
                <div class="list-group">
                    <a class="list-group-item" @click="showPatients(group.patientGroup)" v-for="group in groups">{{ group.patientGroup }}</a>
                </div>
            </div>

            <div class="panel-body" v-show="showPatientsBlock">
                <button class="btn btn-default" @click="showGroups()">back</button>
            </div>

            <patients v-show="showPatientsBlock" :patients="patientsByGroup"></patients>
        </div>
    </div>
</template>

<script>
  import Patients from '../Patients'
  import { mapState } from 'vuex'

  export default {
    name: 'groupTab',

    components: {
      Patients
    },

    data () {
      return {
        showPatientsBlock: false,
        showGroupsBlock: true
      }
    },

    computed: mapState([
      'groups',
      'patientsByGroup'
    ]),

    methods: {
      showPatients (group) {
        this.$store.commit('getPatientsByGroup', group)
        this.showPatientsBlock = true
        this.showGroupsBlock = false
      },
      showGroups () {
        this.showPatientsBlock = false
        this.showGroupsBlock = true
      }
    },

    mounted: function () {
      this.$store.commit('getGroups')
    }
  }
</script>
