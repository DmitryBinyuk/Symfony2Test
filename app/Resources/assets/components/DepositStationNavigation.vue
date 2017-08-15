<template>
    <div class="col-sm-2">
        <div class="panel panel-default">
            <div class="panel-body">
                <ul class="nav nav-pills nav-stacked">
                    <li v-for="list in navigation">
                        <a @click="selectList(list.name)">
                            <span class="glyphicon glyphicon-sort-by-alphabet" aria-hidden="true"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {

    computed: {
      localComputed () {
        //
      },
      ...mapState([
        'navigation'
      ])
    },

    methods: {
      selectList (list) {
        this.$store.dispatch('selectList', list)
      }
    }
  }
</script>