<template>
  <div>
    <app-header></app-header>
    <h1 class="hxb-u-pdl-1">Time to make a new template!</h1>
    <form v-on:submit="addItem" name="new-item" method="POST" action="/new-item" class="hxb-form">
      <text-field id="name" label="Name"></text-field>
      <template v-for="(field, index) in fields">
        <field-card :fieldIndex="index" :removeField="removeField"></field-card>
      </template>
      <add-item-button></add-item-button>
      <submit-button text="Save"></submit-button>
    </form>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AppFooter from '../AppFooter.vue'
  import AppHeader from '../AppHeader.vue'
  import FieldCard from '../FieldCard.vue'
  import AddItemButton from '../AddItemButton.vue'
  import TextField from '../TextField.vue'
  import SubmitButton from '../SubmitButton.vue'
  
  export default {
    name: 'new-item-page',
    computed: {
      ...mapGetters({
        fields: 'fields/getFields'
      })
    },
    methods: {
      addItem: function (e) {
        e.preventDefault();
      },
      removeField: function (fieldIndex) {
        this.$store.dispatch('fields/removeField', fieldIndex);
      }
    },
    components: {
      AppHeader,
      AppFooter,
      FieldCard,
      AddItemButton,
      TextField,
      SubmitButton
    }
  }
</script>

