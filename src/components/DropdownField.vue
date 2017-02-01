<template>
  <div class="hxb-form-field">
    <label :for="id"
           class="hxb-u-display-block">{{ label }}</label>
    <select :id="id" class="hxb-dropdown" @change="update">
      <option v-for="option in options" :value="option.value" :selected="isSelected(option.value)">{{ option.label }}</option>
    </select>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  
  /*
   * options {ARRAY} - [{ label: 'string', value: 'string' }, ...]
   */
  export default {
    name: 'dropdown-field',
    methods: {
      update (e) {
        // tell action in form vuex module to update its form field with the following key/value pair
        this.$store.dispatch('form/updateField', {
          name: this.id,
          value: e.target.value
        })
      },
      isSelected (value) {
        return this.value === value;
      }
    },
    computed: {
      // get the latest value of this form field from the vuex store
      ...mapState({
        value: state => state.form.fields[this.id]
      })
    },
    props: {
      id: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      }
    }
  }
</script>