<template>
  <component v-bind:is="'Display' + field.fieldType" v-bind:value="field.value"></component>
</template>

<script>
  import DisplayTextField from './DisplayTextField.vue'
  
  /**
   * This component will morph into the given field.
   * NOTE: Remember to update this component with all relevant properties from possible fields,
   * so the properties can be properly bound.
   */
  export default {
    name: 'display-field-morpher',
    props: {
      field: {
        type: Object,
        required: true
      }
    },
    components: {
      DisplayTextField
    }
  }
</script>