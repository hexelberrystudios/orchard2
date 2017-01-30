<template>
  <object-list :objects="items"></object-list>
</template>

<script>
  import ObjectList from './ObjectList.vue'
  
  /**
   * Shows a list of items and bundles for the current bundle directory.
   *
   * @TODO: Replace items with data pulled from DB.
   *
   * @param {STRING} {REQUIRED} path The bundle path to display.
   */

  export default {
    name: 'item-directory',
    data: function () {
      return {
        items: [
          { link: '/test1', label: 'Test Item 1' },
          { link: '/test2', label: 'Test Item 2' }
        ]
      }
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