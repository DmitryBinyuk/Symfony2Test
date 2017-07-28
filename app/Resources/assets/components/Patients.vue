<template>
    <div class="list-group patients">
        <a class="list-group-item" v-for="patient in patients" @click="showPatient(patient.id)">
            {{ patient.label }}<span class="caret"></span>
            <div v-show="openedPatient == patient.id">
                <p><strong>Tel.:</strong> {{ patient.tel }}</p>
                <p><strong>E-mail:</strong> {{ patient.email }}</p>
            </div>
        </a>
        <div v-show="patients == '' && !nothingNotFound "><img src="loader.svg"></div>

        <p v-show="nothingNotFound">Nothing not found</p>

        <a v-show="!nothingNotFound" class="list-group-item more">
            <strong>More</strong>
        </a>
    </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'patients',

    props: [
      'patients'
    ],

    computed: {
      localComputed () {
        //
      },
      ...mapState([
        'nothingNotFound'
      ])
    },

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
<style>
    .patients {
        max-height: 500px;
        overflow-y:scroll;
    }
</style>
