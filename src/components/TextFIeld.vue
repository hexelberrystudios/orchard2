<template>
  <div class="hxb-form-field">
    <label :for="id"
          class="hxb-u-display-block">{{ label }}</label>
    <input :id="id"
          :type="type"
          :name="id"
          class="hxb-input-field hxb-u-border hxb-gray-border-color"
          :placeholder="placeholder"
          :value="value" />
  </div>
</template>

<script>
  export default {
    name: 'text-field',
    // define the props that can be passed in, to differentiate local variables versus arguments I guess
    props: ['id', 'label', 'type', 'placeholder', 'value']
  }
</script>