<template>
    <div class="col-md-3 col-md-offset-7">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>Alphabet</h4>
            </div>
            <patients :patients="patientsByAlphabet"></patients>
        </div>
    </div>
</template>

<script>
  import Patients from '../Patients'
  import { mapState } from 'vuex'

  export default {
    name: 'alphabetTab',

    components: {
      Patients
    },

    computed: mapState([
      'patientsByAlphabet'
    ]),

    mounted: function () {
      this.$store.commit('getPatientsByAlphabet')
    }
  }
</script>
