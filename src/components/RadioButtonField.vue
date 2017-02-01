<template>
  <fieldset class="hxb-fieldset">
    <legend>{{ label }}</legend>
    <template v-for="(option, index) in options">
      <input  :id="id + '_' + index"
              type="radio"
              class="hxb-radio-button"
              :name="id"
              :value="option.value" />
      <label  :for="id + '_' + index"
              class="hxb-radio-button-label">
        {{ option.value }}
      </label>
    </template>
  </fieldset>
</template>

<script>
  /*
   * options {ARRAY} - [{ label: 'string', value: 'string' }, ...]
   */
  export default {
    name: 'radio-button-field',
    props: ['id', 'label', 'options']
  }
</script>