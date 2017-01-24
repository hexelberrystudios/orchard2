<template>
  <ul class="hxb-choice-list">
    <li v-for="choice in choices" class="hxb-choice-list-item">
      <a :href="choice.link" class="hxb-choice-list-item__link">
        <span>{{ choice.label }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
  /*
   * choices {ARRAY} - [{ link: 'string', label: 'string' }, ...]
   */
  export default {
    name: 'choice-list',
    props: ['choices']
  }
</script>