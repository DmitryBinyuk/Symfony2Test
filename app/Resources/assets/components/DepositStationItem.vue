<template>
    <a class="list-group-item" @click="showPatient(patient.id)">
        {{ patient.label }}

        <span class="caret"></span>
        <!--<div v-show="openedPatient === patient.id">-->
            <!--<p><strong>Tel.:</strong> {{ patient.details.tel }}</p>-->
            <!--<p><strong>E-mail:</strong> {{ patient.details.email }}</p>-->
        <!--</div>-->
    </a>
</template>

<script>
  export default {

    props: [
      'patient'
    ],

    data () {
      return {
        openedPatient: 0
      }
    },

    methods: {
      showPatient (id) {
        if (this.openedPatient === id) {
          this.openedPatient = null
        } else {
          this.openedPatient = id
        }
      }
    }
  }
</script>