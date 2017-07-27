<template>
    <div class="container-fluid">
        <alphabet-tab v-show="currentPane == 'alphabet'"></alphabet-tab>
        <groups-tab v-show="currentPane == 'groups'"></groups-tab>
        <archive-tab v-show="currentPane == 'archive'"></archive-tab>
        <search-tab v-show="currentPane == 'search'"></search-tab>

        <div class="col-sm-2">
            <div class="panel panel-default">
                <div class="panel-body">
                    <ul class="nav nav-pills nav-stacked">
                        <li :class="{ 'active' : currentPane == 'alphabet'}"><a href="#" @click="currentPane = 'alphabet'"><span class="glyphicon glyphicon-sort-by-alphabet" aria-hidden="true"></span></a></li>
                        <li :class="{ 'active' : currentPane == 'groups'}"><a href="#" @click="currentPane = 'groups'"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span></a></li>
                        <li :class="{ 'active' : currentPane == 'archive'}"><a href="#" @click="currentPane = 'archive'"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a></li>
                        <li :class="{ 'active' : currentPane == 'search'}"><a href="#" @click="currentPane = 'search'"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import AlphabetTab from './tabs/AlphabetTab'
  import GroupsTab from './tabs/GroupsTab'
  import ArchiveTab from './tabs/ArchiveTab'
  import SearchTab from './tabs/SearchTab'

  export default {
    name: 'depositStation',

    components: {
      AlphabetTab,
      GroupsTab,
      ArchiveTab,
      SearchTab
    },

    data () {
      return {
        currentPane: 'alphabet'
      }
    }
  }
</script>