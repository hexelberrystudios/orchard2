<template>
  <ul class="hxb-object-list">
    <li v-for="object in objects" class="hxb-object-list-item">
      <a href="object.link" class="hxb-object-list-item__link">
        <span>{{ object.label }}</span>
        <span class="hxb-object-list-item__arrow">&#8674;</span>
      </a>
    </li>
  </ul>
</template>

<script>
  /*
   * choices {ARRAY} - [{ link: 'string', label: 'string' }, ...]
   */
  export default {
    name: 'object-list',
    props: ['objects']
  }
</script>