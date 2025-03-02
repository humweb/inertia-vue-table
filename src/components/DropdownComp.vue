<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

interface Props {
  closeOnClick?: boolean;
  align?: string;
  width?: string;
  contentClass?: string | string[];
}

const {
  closeOnClick = false,
  align = 'right',
  width = 'w-48',
  contentClass = 'bg-white dark:bg-gray-700 dark:text-gray-200',
} = defineProps<Props>();

const open = ref(false);

const alignmentClasses = computed(() => {
  if (align === 'left') {
    return 'origin-top-left left-0';
  } else if (align === 'right') {
    return 'origin-top-right right-0';
  } else {
    return 'origin-top';
  }
});

function closeOnEscape(e: any) {
  if (open.value && e.key === 'Escape') {
    open.value = false;
  }
}

function autoClose() {
  if (closeOnClick) {
    open.value = false;
  }
}

onMounted(() => document.addEventListener('keydown', closeOnEscape));
onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));
</script>

<template>
  <div class="relative">
    <div @click="open = !open">
      <slot name="trigger"></slot>
    </div>

    <div v-show="open" class="fixed inset-0 z-40 bg-black/30" @click.self="open = false"></div>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95">
      <div
        v-show="open"
        class="absolute z-50 mt-2 rounded-md shadow-lg"
        :class="[width, alignmentClasses]"
        style="display: none"
        @click="autoClose">
        <div
          class="rounded-lg overflow-hidden ring-1 ring-black ring-opacity-5"
          :class="contentClass">
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
