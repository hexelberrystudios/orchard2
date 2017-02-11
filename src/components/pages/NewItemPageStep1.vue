<template>
  <div>
    <app-header></app-header>
    <h1 class="hxb-u-pdl-1 hxb-u-txt-center" v-if="!areTemplatesLoaded()">Loading...</h1>
    <h1 class="hxb-u-pdl-1" v-if="templates.length > 0">What would you like to organize today?</h1>
    <form v-on:submit="setTemplate" name="set_template" method="POST" action="/app/new-item-page-2" class="hxb-form" v-if="templates.length > 0">
      <dropdown-field id="templates" label="Select a template" :options="templates"></dropdown-field>
      <div class="hxb-form-field">
        <submit-button text="Save"></submit-button>
      </div>
    </form>
    <h1 class="hxb-u-pdl-1 hxb-u-txt-center" v-if="areTemplatesLoaded() && templates.length === 0">No templates found. Please make a template first.</h1>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppFooter from '../AppFooter.vue'
  import AppHeader from '../AppHeader.vue'
  import DropdownField from '../DropdownField.vue'
  import SubmitButton from '../SubmitButton.vue'
  
  const fetchInitialData = store => {
    return store.dispatch('getTemplates')
  }
  
  export default {
    name: 'new-item-page-1',
    prefetch: fetchInitialData,
    computed: {
      templates: function () {
        let i,
          template
        let templates = this.$store.getters.getTemplates
        let templateList = []
      
        console.log(templates)
        for (i = 0; i < templates.length; i++) {
          template = templates[i]
          templateList.push({
            label: template.templateName,
            value: template.id
          })
        }

        return templateList
      }
    },
    mounted () {
      fetchInitialData(this.$store)
    },
    methods: {
      areTemplatesLoaded: function () {
        return Array.isArray(this.templates)
      },
      setTemplate: function (e) {
        e.preventDefault()
      }
    },
    components: {
      AppHeader,
      AppFooter,
      DropdownField,
      SubmitButton
    }
  }
</script>

<style scoped>
  .hxb-form-field > .hxb-button {
    margin-left: calc(5.5rem + 2%);
  }
</style>