<template>
  <div>
    <app-header></app-header>
    <h1 class="hxb-u-pdl-1">Time to add a new {{ template.name }}!</h1>
    <form v-on:submit="addItem" name="new_item" method="POST" action="/new-item" class="hxb-form">
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
  import AppFooter from '../AppFooter.vue'
  import AppHeader from '../AppHeader.vue'
  import SubmitButton from '../SubmitButton.vue'
  
  export default {
    name: 'new-item-page-2',
    data: function () {
      return {
        fields: [],
        template: {}
      }
    },
    created: function () {
      // let templateId;
      // let self = this;

      // get the template id from the url
      /*
      hoodie.ready.then(function () {
        // look through the DB for all the templates
        hoodie.store.find(templateId)
          .then((template) => {
            self.template = template;
          })
      })
      */
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