<template>
    <div class="col-sm-4 col-sm-offset-6">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>Archive</h4>
            </div>
            <patients :patients="patientsByArchive"></patients>
        </div>
    </div>
</template>

<script>
  import Patients from '../Patients'
  import { mapState } from 'vuex'

  export default {
    name: 'archiveTab',

    components: {
      Patients
    },

    computed: mapState([
      'patientsByArchive'
    ]),

    mounted: function () {
      this.$store.commit('getPatientsByArchive')
    }
  }
</script>
