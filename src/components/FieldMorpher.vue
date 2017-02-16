<template>
  <component v-bind:is="field.field_type" v-bind:id="fieldId" v-bind:label="field.field_label"></component>
</template>

<script>
  import TextField from './TextField.vue'
  
  /**
   * This component will morph into the given field.
   * NOTE: Remember to update this component with all relevant properties from possible fields,
   * so the properties can be properly bound.
   */
  export default {
    props: {
      field: {
        type: Object,
        required: true
      },
      fieldId: {
        type: String,
        required: true
      }
    },
    components: {
      TextField
    }
  }
</script>