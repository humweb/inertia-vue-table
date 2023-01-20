<template>
    <td>
        <slot>
            {{ get(record, field.attribute) }}
        </slot>
    </td>
</template>

<script>
import get from 'lodash/get';
export default {
    props: {
        record: {
            type: Object,
            required: true,
        },
        field: {
            type: Object,
            required: true
        },
    },
    methods: {get},

};
</script>
