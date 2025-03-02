<script setup lang="ts">
import DropdownComp from './DropdownComp.vue';
import { ref } from 'vue';

interface Props {
  closeOnClick?: boolean;
  disabled?: boolean;
}

const { closeOnClick = false, disabled = false } = defineProps<Props>();

const opened = ref(false);

//@ts-ignore
function toggle() {
  opened.value = !opened.value;
}

//@ts-ignore
function hide() {
  opened.value = false;
}
</script>

<template>
  <DropdownComp :close-on-click="closeOnClick">
    <template #trigger>
      <button
        type="button"
        :disabled="disabled"
        class="btn btn-sm btn-slate"
        :class="{ 'cursor-not-allowed': disabled }"
        aria-haspopup="true"
        ref="button">
        <slot name="button" />
      </button>
    </template>

    <template #content>
      <slot />
    </template>
  </DropdownComp>
</template>
