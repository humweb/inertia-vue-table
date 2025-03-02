<script lang="ts" setup>
const model = defineModel<number | string>({ default: 15 });

const { options = [5, 15, 25, 30, 50, 100] } = defineProps<{
  options?: Array<number | string>;
}>();
</script>

<template>
  <select ref="input" v-model="model" class="form-select pr-8 py-2">
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>
