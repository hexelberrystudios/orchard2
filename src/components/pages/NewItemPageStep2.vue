<template>
  <div>
    <app-header></app-header>
    <h1 class="hxb-u-pdl-1" v-if="template">Time to add a new {{ template.name }}!</h1>
    <form v-on:submit="addItem" name="new_item" method="POST" action="/app/new-item" class="hxb-form">
      <text-field id="name" label="Name"></text-field>
      <template v-for="field in template.fields">
      
      </template>
      <div class="hxb-form-field">
        <submit-button text="Save"></submit-button>
      </div>
    </form>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AppFooter from '../AppFooter.vue'
  import AppHeader from '../AppHeader.vue'
  import SubmitButton from '../SubmitButton.vue'
  
  const fetchInitialData = store => {
    let templateId
    let searchStr
    
    if (typeof window !== 'undefined') {
      searchStr = window.location.search
      
      if (searchStr) {
        templateId = searchStr.substr(searchStr.lastIndexOf('=' + 1))
      }
    }
    
    if (templateId) {
      return store.dispatch('getActiveTemplate', templateId)
    } else {
      // @TODO: Show user facing error and redirect them to the home page
      throw Error('No active template found.')
    }
  }
  
  export default {
    name: 'new-item-page-2',
    prefetch: fetchInitialData,
    computed: {
      ...mapGetters({
        template: 'getActiveTemplate'
      })
    },
    mounted () {
      fetchInitialData(this.$store)
    },
    methods: {
      addItem: function (e) {
        /*
        hoodie.ready.then(function () {
          if (hoodie.account.isSignedIn()) {
            hoodie.store.add({})
          } else {
            throw new Error('User is not currently signed in.');
          }
        });
        */
      }
    },
    components: {
      AppHeader,
      AppFooter,
      SubmitButton
    }
  }
</script>

<style scoped>
  .hxb-form-field > .hxb-button {
    margin-left: calc(5.5rem + 2%);
  }
</style>