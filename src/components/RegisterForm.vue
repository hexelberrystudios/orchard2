<template>
  <form v-on:submit="register" name="register" method="post" action="/register" class="hxb-form">
    <text-field id="username"
                label="username"
                type="text"
                placeholder="username"></text-field>
    <text-field id="password"
                label="password"
                type="password"
                placeholder="password"></text-field>
    <submit-button text="Register"></submit-button>
  </form>
</template>

<script>
  import TextField from './TextField.vue'
  import SubmitButton from './SubmitButton.vue'
  
  export default {
    name: 'register-form',
    methods: {
      register: function (e) {
        e.preventDefault();
        console.log(this.$store.state.form);
        console.log(this.$store.state.form.fields.username);
        console.log(this.$store.state.form.fields.password);
      }
    },
    components: {
      TextField,
      SubmitButton
    }
  }
</script>