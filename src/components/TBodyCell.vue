<script setup lang="ts">
import get from 'lodash-es/get';
import Actions from './Actions.vue';
import DateField from '@/components/Table/components/fields/DateField.vue';
import { computed } from 'vue';
import { CheckIcon, BanIcon } from 'lucide-vue-next';
// Define props with TypeScript
const props = defineProps<{
  record: any;
  field: any;
}>();

const value = computed(() => {
  return get(props.record, props.field.attribute);
});
</script>

<template>
  <td :class="{ 'text-right': props.field.component == 'action-field' }">
    <slot>
      <Actions
        v-if="props.field.component == 'action-field'"
        :record="props.record"
        :actions="props.field.actions" />
      <DateField
        v-if="props.field.component === 'date'"
        v-model="value"
        :format="props.field.meta.dateFormat"
        :relative="props.field.meta.relative" />
      <template v-else-if="typeof value === 'boolean'">
        <CheckIcon v-if="value" class="size-6 text-success" />
        <BanIcon v-else class="size-6 text-destructive" />
      </template>
      <template v-else>
        {{ value }}
      </template>
    </slot>
  </td>
</template>
