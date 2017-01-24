<template>
  <form name="register" method="post" action="/register" class="hxb-form">
    <text-field id="username" type="text" placeholder="username"></text-field>
    <text-field id="password" type="password" placeholder="password"></text-field>
    <submit-button text="Register"></submit-button>
  </form>
</template>

<script>
  import TextField from './TextField.vue'
  import SubmitButton from './SubmitButton.vue'
  
  export default {
    name: 'register-form',
    // List the components used on this page. This is using ES2015 syntax,
    // where PrimaryButton is the same as 'PrimaryButton': PrimaryButton
    components: {
      TextField,
      SubmitButton
    }
  }
</script>