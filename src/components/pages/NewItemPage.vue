<template>
  <div>
    <app-header></app-header>
    <h1 class="hxb-u-pdl-1">Time to make a new []!</h1>
    <form v-on:submit="addItem" name="new-item" method="POST" action="/new-item" class="hxb-form">
      <template v-for="(field, index) in fields">
        
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
    name: 'new-item-page',
    computed: function () {
      hoodie.ready.then(function () {
        // look through the DB for all the templates
        hoodie.store.findAll()
          .then((docs) => {
            return docs.filter(doc => doc.templateName) // filter out docs that have no templateName field
          })
          .then((templateDocs) => {
            // do your thing
          })
      })
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