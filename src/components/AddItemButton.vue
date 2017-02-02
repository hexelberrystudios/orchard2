<template>
  <button type="button" class="hxb-field-card hxb-add-item-button" @click="addField">
    <span class="hxb-add-item-button__icon">+</span>
  </button>
</template>

<script>
  import { mapActions } from 'vuex'
  
  export default {
    // define the html tag that will be used to invoke this component (<primary-button text="exampleText"></primary-button>)
    name: 'add-item-button',
    methods: {
      ...mapActions({
        addField: 'fields/addField'
      })
    }
  }
</script>