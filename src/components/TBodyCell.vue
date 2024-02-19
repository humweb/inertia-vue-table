<template>
  <td :class="{'text-right': field.component == 'action-field'}">
    <slot>
      <Actions v-if="field.component == 'action-field'" :record="record" :actions="field.actions"/>
      <DateField v-if="field.component === 'date'" v-model="value" :format="field.meta.dateFormat" :relative="field.meta.relative"/>
      <template v-else>
        {{ value }}
      </template>
    </slot>
  </td>
</template>

<script>
import get from 'lodash-es/get';
import Actions from './Actions.vue';
import DateField from "./Fields/DateField.vue";

export default {
  components: {
    Actions,
    DateField,
  },
  props: {
    record: {
      type: Object,
      required: true,
    },
    field: {
      type: Object,
      required: true
    },
  },
  methods: {get},
  computed: {
    value() {
      return get(this.record, this.field.attribute)
    }
  }
};
</script>
