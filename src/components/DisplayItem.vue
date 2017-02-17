<template>
  <template v-for="field in item.fields">
    <display-field-morpher :field="field"></display-field-morpher>
  </template>
</template>

<script>
  import DisplayFieldMorpher from './fields/display/DisplayFieldMorpher.vue'
  
  export default {
    name: 'display-item',
    components: {
      DisplayFieldMorpher
    },
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>