<template>
    <select ref="input" v-model="selected" class="form-select py-2 inline-flex">
        <option
            v-for="option in options"
            :key="option"
            :value="option"
        >
            {{ option }}
        </option>
    </select>
</template>

<script>


export default {
    props: {
        modelValue: {
            type: [Number, String],
            default: 15,
            required: false,
        },

        options: {
            type: Array,
            default() {
                return [15, 25, 30, 50, 100];
            },
            required: false,
        }
    },
    emits: ['update:modelValue'],
    data() {
        return {
            selected: this.modelValue,
        };
    },
    watch: {
        selected(selected) {
            this.$emit('update:modelValue', selected);
        },
    },
};
</script>
