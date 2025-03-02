<script setup lang="ts">
import { Search } from 'lucide-vue-next';

const model = defineModel();
</script>

<template>
  <div class="relative">
    <input class="form-input sm pr-12" placeholder="Search..." v-model="model" type="text" />
    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      <Search class="size-5" />
    </div>
  </div>
</template>
