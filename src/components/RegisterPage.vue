<template>
  <article>
    <h1 class="hxb-u-txt-center">Hexelberry Orchard</h1>
    <register-form></register-form>
  </article>
</template>

<script>
  import RegisterForm from './RegisterForm.vue'
  
  export default {
    name: 'register-page',
    // List the components used on this page. This is using ES2015 syntax,
    // where PrimaryButton is the same as 'PrimaryButton': PrimaryButton
    components: {
      RegisterForm
    }
  }
</script>

