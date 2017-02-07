<template>
  <div>
    <app-header></app-header>
    <h1 class="hxb-u-pdl-1">What would you like to organize today?</h1>
    <form name="set_template" method="GET" action="/new-item-page-2" class="hxb-form">
      <dropdown-field id="templates" label="Select a template" :options="templates"></dropdown-field>
      <div class="hxb-form-field">
        <submit-button text="Save"></submit-button>
      </div>
    </form>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppFooter from '../AppFooter.vue'
  import AppHeader from '../AppHeader.vue'
  import DropdownField from '../DropdownField.vue'
  import SubmitButton from '../SubmitButton.vue'
  
  export default {
    name: 'new-item-page-1',
    data: function () {
      return {
        templates: []
      }
    },
    created: function () {
      let self = this;
      
      hoodie.ready.then(function () {
        // look through the DB for all the templates
        hoodie.store.findAll()
          .then((docs) => {
            return docs.filter(doc => doc.templateName) // filter out docs that have no templateName field
          })
          .then((templateDocs) => {
            // do your thing
            self.templates = templateDocs;
          })
      })
    },
    components: {
      AppHeader,
      AppFooter,
      DropdownField,
      SubmitButton
    }
  }
</script>

<style scoped>
  .hxb-form-field > .hxb-button {
    margin-left: calc(5.5rem + 2%);
  }
</style>