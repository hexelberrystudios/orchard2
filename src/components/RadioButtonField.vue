<template>
  <fieldset class="hxb-fieldset">
    <legend>{{ label }}</legend>
    <input v-for="(option, index) in options"
            :id="id + '_' + index"
            type="radio"
            class="hxb-radio-button"
            :name="id"
            :value="option.value" />
    <label v-for="(option, index) in options"
            :for="id + '_' + index"
            class="hxb-radio-button-label">
      {{ option.value }}
    </label>
  </fieldset>
</template>

<script>
  /*
   * options {ARRAY} - [{ label: 'string', value: 'string' }, ...]
   */
  export default {
    name: 'dropdown-field',
    props: ['id', 'label', 'options']
  }
</script>