<script setup>
import {Link} from '@inertiajs/vue3';
import {computed} from 'vue';

const props = defineProps({
    row: Object,
    field: Object,
    value: [String, Object, Array]
});

const routeParams = computed(() => {
    return props.field.routeParams.map(param => props.row[param])
})
</script>

<template>
    <Link :href="route(props.field.route, routeParams)" :class="props.field.class">{{value}}</Link>

</template>

<style scoped>

</style>
