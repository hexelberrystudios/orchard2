<template>
  <div class="hxb-form-field">
    <label :for="id"
           class="hxb-u-display-block">{{ label }}</label>
    <textarea :id="id"
              :name="id"
              class="hxb-input-field"
              :placeholder="placeholder"
              rows="10"
              cols="50">{{ value }}</textarea>
  </div>
</template>

<script>
  export default {
    name: 'textarea-field',
    props: ['id', 'label', 'type', 'placeholder', 'value']
  }
</script>