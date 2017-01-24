<template>
  <form name="login" method="post" action="/login" class="hxb-form">
    <text-field id="username" type="text" placeholder="username"></text-field>
    <text-field id="password" type="password" placeholder="password"></text-field>
    <submit-button text="Login"></submit-button>
    <router-link to="/register" exact>or Register</router-link>
  </form>
</template>

<script>
  import TextField from './TextField.vue'
  import SubmitButton from './SubmitButton.vue'
  
  export default {
    name: 'login-form',
    // List the components used on this page. This is using ES2015 syntax,
    // where PrimaryButton is the same as 'PrimaryButton': PrimaryButton
    components: {
      TextField,
      SubmitButton
    }
  }
</script>