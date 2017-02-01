<template>
  <div>
    <app-header></app-header>
    <h1 class="hxb-u-pdl-1">Time to make a new template!</h1>
    <form v-on:submit="addItem" name="new-item" method="POST" action="/new-item">
      <text-field id="name" label="Name"></text-field>
      <template v-for="field in fields">
        <field-card :field="field"></field-card>
      </template>
      <add-item-button></add-item-button>
    </form>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AppFooter from '../AppFooter.vue'
  import AppHeader from '../AppHeader.vue'
  
  export default {
    name: 'new-item-page',
    methods: function () {
      addItem: function addItem (e) {
        e.preventDefault();
      }
    },
    computed: {
      ...mapGetters({
        fields: 'getFields'
      })
    },
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

