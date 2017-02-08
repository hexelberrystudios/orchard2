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
        items: []
      }
    },
    created: function () {
      /*
      let self = this;

      hoodie.ready.then(function () {
        // look through the DB for all the items for the given bundle path
        hoodie.store.findAll()
          .then((docs) => {
            return docs.filter(function (doc) {
              // check if the doc is an item, and if the doc is a part of a bundle,
              // only include items that are part of the specified bundle path
              return doc.itemName && (!doc.bundle || doc.bundles && doc.bundles.indexOf(self.path) !== -1)
            })
          })
          .then(function (itemDocs) {
            // do your thing
            self.items = itemDocs;
          })
      })
      */
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