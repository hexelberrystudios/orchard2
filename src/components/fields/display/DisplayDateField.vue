<template>
  <p>{{ value }}</p>
</template>

<script>
  /*
   * This is the output of a date field.
   */

  export default {
    name: 'display-date-field',
    props: {
      value: {
        type: String,
        required: false
      }
    }
  }
</script>