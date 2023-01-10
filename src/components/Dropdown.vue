<template>
    <DropdownComp :close-on-click="closeOnClick">
        <template #trigger>
            <button
                type="button"
                :disabled="disabled"
                class="btn btn-slate"
                :class="{ 'cursor-not-allowed': disabled }"
                aria-haspopup="true"
                ref="button"
            >
                <slot name="button"/>
            </button>
        </template>

        <template #content>
            <slot/>
        </template>
    </DropdownComp>
</template>

<script>
import DropdownComp from './DropdownComp.vue';

export default {
    components: {
        DropdownComp,
    },
    props: {
        closeOnClick:{
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false,
            required: false,
        },

        disabled: {
            type: Boolean,
            default: false,
            required: false,
        },
    },

    data() {
        return {
            opened: false,
            popper: null,
        };
    },


    methods: {
        toggle() {
            this.opened = !this.opened;
        },

        hide() {
            this.opened = false;
        },
    },

    mounted() {
    },
};
</script>
