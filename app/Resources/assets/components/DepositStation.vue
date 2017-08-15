<template>
    <div class="container-fluid">
        <deposit-station-list
                v-for="list in navigation"
                :list="list"
                :key="list.id"
                v-if="list.name == currentList.name"
        ></deposit-station-list>
        <deposit-station-navigation></deposit-station-navigation>
    </div>
</template>

<script>
  import DepositStationNavigation from './DepositStationNavigation'
  import DepositStationList from './DepositStationList'
  import { mapState } from 'vuex'

  export default {

    components: {
      DepositStationNavigation,
      DepositStationList
    },

    computed: {
      localComputed () {
        //
      },
      ...mapState([
        'navigation',
        'currentList'
      ])
    },

    mounted () {
      this.$store.dispatch('loadPatients')
    }
  }
</script>

<style>
    a {
        cursor: pointer;
    }
</style>