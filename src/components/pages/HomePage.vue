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
    // List the components used on this page. This is using ES2015 syntax,
    // where PrimaryButton is the same as 'PrimaryButton': PrimaryButton
    components: {
      AppFooter,
      AppHeader,
      ItemDirectory
    }
  }
</script>

