<template>
  <footer class="hxb-footer">
    <ul class="hxb-footer-list">
      <li class="hxb-footer-list__action"><router-link to="/todo">To Do</router-link></li>
      <li class="hxb-footer-list__action"><router-link to="/search">Search</router-link></li>
      <li class="hxb-footer-list__action"><router-link to="/new">New</router-link></li>
    </ul>
  </footer>
</template>

<script>
  export default {
    name: 'app-footer'
  }
</script>