<template>
  <div class="hxb-form-field">
    <input :id="id"
           type="checkbox"
           class="hxb-checkbox"
           :name="id"
           :value="value" />
    <label :for="id" class="hxb-checkbox-label">
      {{ label }}
    </label>
  </div>
</template>

<script>
  export default {
    name: 'checkbox-field',
    // define the props that can be passed in, to differentiate local variables versus arguments I guess
    props: ['id', 'label', 'type', 'placeholder', 'value']
  }
</script>