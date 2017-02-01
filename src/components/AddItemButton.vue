<template>
  <button type="button" class="hxb-add-item-button" @click="addField">+</button>
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