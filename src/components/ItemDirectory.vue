<template>
  <object-list :objects="items"></object-list>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ObjectList from './ObjectList.vue'
  
  /**
   * Shows a list of items and bundles for the current bundle directory.
   *
   * @TODO: Replace items with data pulled from DB.
   *
   * @param {STRING} {REQUIRED} path The bundle path to display.
   */
  
  const fetchInitialData = store => {
    return store.dispatch('items/getItems')
  }
  
  export default {
    name: 'item-directory',
    computed: {
      ...mapGetters({
        items: 'items/getItems'
      })
    },
    mounted () {
      fetchInitialData(this.$store)
    },
    components: {
      ObjectList
    },
    props: {
      path: {
        type: String,
        required: true
      }
    }
  }
</script>