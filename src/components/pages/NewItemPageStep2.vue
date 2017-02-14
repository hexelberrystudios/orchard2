<template>
  <div>
    <app-header></app-header>
    <h1 class="hxb-u-pdl-1" v-if="template">Time to add a new {{ template.templateName }}!</h1>
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
  import TextField from '../TextField.vue'
  import SubmitButton from '../SubmitButton.vue'
  
  // @TODO: Get this to work without javascript,
  // and get this to work with reloading the page

  export default {
    name: 'new-item-page-2',
    computed: {
      ...mapGetters({
        template: 'templates/getActiveTemplate'
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
      TextField,
      SubmitButton
    }
  }
</script>

<style scoped>
  .hxb-form-field > .hxb-button {
    margin-left: calc(5.5rem + 2%);
  }
</style>