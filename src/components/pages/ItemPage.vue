<template>
  <div>
    <app-header></app-header>
    <article>
      <router-link :to="editItemPath + itemId">Edit</router-link>
      <template v-for="field in item.fields">
        <p><strong>{{ field.fieldLabel }}</strong></p>
        <display-field-morpher :field="field"></display-field-morpher>
      </template>
    </article>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AppFooter from '../AppFooter.vue'
  import AppHeader from '../AppHeader.vue'
  import DisplayFieldMorpher from '../fields/display/DisplayFieldMorpher.vue'
  
  const fetchInitialData = store => {
    // @TODO: window not found and $route not found, so how do I get the item id???
    // let url = window.location.pathname
    // let itemId = url.substr(url.lastIndexOf('/') + 1)
    
    return store.dispatch('items/getItem', this.$route.params.itemId)
  }
  
  export default {
    name: 'item-page',
    data: function () {
      return {
        editItemPath: '/app/item/edit/',
        itemId: this.$route.params.itemId
      }
    },
    prefetch: fetchInitialData,
    computed: {
      ...mapGetters({
        item: 'items/getActiveItem'
      })
    },
    components: {
      AppFooter,
      AppHeader,
      DisplayFieldMorpher
    }
  }
</script>