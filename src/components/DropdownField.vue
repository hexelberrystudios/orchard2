<template>
  <div class="hxb-form-field">
    <label :for="id"
           class="hxb-u-display-block">{{ label }}</label>
    <select :id="id" class="hxb-dropdown">
      <option v-for="option in options" :value="option.value">option.label</option>
    </select>
  </div>
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