<template>
  <div>
    <app-header></app-header>
    <article>
      <item-directory path="/"></item-directory>
    </article>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppFooter from '../AppFooter.vue'
  import AppHeader from '../AppHeader.vue'
  import ItemDirectory from '../ItemDirectory.vue'
  
  export default {
    name: 'home-page',
    components: {
      AppFooter,
      AppHeader,
      ItemDirectory
    }
  }
</script>

