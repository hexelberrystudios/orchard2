<template>
  <div class="hxb-form-card">
    <remove-button :fn="remove"></remove-button>
    <text-field id="field_label"></text-field>
    <dropdown-field id="field_type"></dropdown-field>
    <radio-button-field id="show_in_preview"></radio-button-field>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'field-card',
    methods: {
      remove () {
        this.$store.dispatch('fields/removeField', field)
      }
    },
    props: {
      field: {
        type: Object,
        required: true
      }
    }
  }
</script>