<template>
  <ul class="hxb-object-list">
    <li v-for="object in objects" class="hxb-object-list-item">
      <router-link :to="object.link" class="hxb-object-list-item__link">
        <span>{{ object.label }}</span>
        <span class="hxb-object-list-item__arrow">&#8674;</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
  /*
   * An object list is one that lists items.
   *
   * choices {ARRAY} - [{ link: 'string', label: 'string' }, ...]
   */
  export default {
    name: 'object-list',
    props: ['objects']
  }
</script>