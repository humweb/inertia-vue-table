<template>
    <Dropdown class="inline-flex">
        <template #trigger>
            <div class="btn btn-xs">
                <EllipsisHorizontalIcon class="w-6 h-6"/>
            </div>
        </template>
        <template #content>
            <div class="flex w-full text-left" role="menu" aria-orientation="vertical" aria-labelledby="sort-menu">
                <div class="w-full" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link
                        v-for="action in actions"
                        :href="route(action.route, getParams(action))"
                        class="text-left flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-500 dark:hover:text-gray-300"
                        role="menuitem">
                        {{ action.label }}
                    </Link>
                </div>
            </div>
        </template>
    </Dropdown>
</template>

<script>
import Dropdown from './DropdownComp.vue';
import {Link} from '@inertiajs/inertia-vue3';
import {EllipsisHorizontalIcon} from '@heroicons/vue/24/outline';
import get from 'lodash/get';

export default {
    name: 'Actions',
    components: {
        Dropdown,
        Link,
        EllipsisHorizontalIcon,
    },
    props: {
        record: Object,
        actions: Array,
    },
    methods: {
        getParams(action) {
            if ('params' in action) {
                return action.params.map(param => get(this.record, param));
            }
            return [];
        },
    },
};
</script>

<style scoped>

</style>
