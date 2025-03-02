<script setup lang="ts">
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';
import { computed } from 'vue';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

const model = defineModel<string>();

// default: 'lll',
interface Props {
  format: string;
  relative?: boolean;
}

const { format = 'lll', relative = false } = defineProps<Props>();

const date = computed(() => {
  return dayjs(model.value).tz(dayjs.tz.guess());
});
const formatted = computed(() => {
  return relative ? dayjs().to(date.value) : date.value.format(format);
});
const fullDate = computed(() => {
  return { content: date.value.format(format), disabled: !relative };
});
</script>

<template>
  <span>
    <time :datetime="model" v-tooltip="fullDate" :title="model">{{ formatted }}</time>
  </span>
</template>
