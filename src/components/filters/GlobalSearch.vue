<template>
    <div class="relative">
        <input
            class="form-input pr-12"
            placeholder="Search..."
            :value="modelValue"
            type="text"
            @input="update($event.target.value)"
        />
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
            />
        </div>
    </div>
</template>

<script>
import {MagnifyingGlassIcon} from '@heroicons/vue/24/solid';

export default {
    props: {
        modelValue: {
            type: String,
            default: '',
            required: false,
        },
    },
    components: {
        MagnifyingGlassIcon,
    },
    methods: {
        update(value) {
            this.$emit('update:modelValue', value);
        },
    },

};
</script>
