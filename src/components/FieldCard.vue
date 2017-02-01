<template>
  <div class="hxb-form-card">
    <remove-button :remove="remove"></remove-button>
    <text-field :id="fieldLabel" label="Field Label"></text-field>
    <dropdown-field :id="fieldType" label="Field Type" :options="fieldTypes"></dropdown-field>
    <radio-button-field :id="showInPreview" label="Show in preview?" :options="radioButtonOptions"></radio-button-field>
  </div>
</template>

<script>
  import RemoveButton from './RemoveButton.vue'
  import TextField from './TextField.vue'
  import DropdownField from './DropdownField.vue'
  import RadioButtonField from './RadioButtonField.vue'

  export default {
    name: 'field-card',
    data: function () {
      return {
        fieldLabel: 'field_label_' + this.fieldIndex,
        fieldType: 'field_type_' + this.fieldIndex,
        showInPreview: 'show_in_preview_' + this.fieldIndex,
        radioButtonOptions: [
          {
            label: 'No',
            value: 'no'
          },
          {
            label: 'Yes',
            value: 'yes'
          }
        ],
        fieldTypes: [
          {
            label: 'Text Field',
            value: 'text-field'
          },
          {
            label: 'Large Text Field',
            value: 'text-area-field'
          },
          {
            label: 'Completable',
            value: 'checkbox-field'
          }
        ]
      };
    },
    methods: {
      remove () {
        // clean up the fields we're about to remove from the form
        this.$store.dispatch('form/deleteField', {
          name: this.fieldLabel
        });
        this.$store.dispatch('form/deleteField', {
          name: this.fieldType
        });
        this.$store.dispatch('form/deleteField', {
          name: this.showInPreview
        });
        // tells the parent component that we've done the clean up necessary
        // to now remove this card
        this.removeField(this.fieldIndex);
      }
    },
    props: {
      fieldIndex: {
        type: Number,
        required: true
      },
      removeField: {
        type: Function,
        required: true
      }
    },
    components: {
      RemoveButton,
      TextField,
      DropdownField,
      RadioButtonField
    }
  }
</script>