
<script setup>
    const props = defineProps({
    row: Object,
    field: Object,
    value: [String, Object, Array]
});

</script>

<template>
    <img :src="props.field.path+props.value" :class="props.field.class" :alt="field.alt||props.value" />
</template>

