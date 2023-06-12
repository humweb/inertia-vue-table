<template>
    <td :class="{'text-right': field.component == 'action-field'}">
        <slot>
            <Actions v-if="field.component == 'action-field'" :record="record" :actions="field.actions" />
            <template v-else>
            {{ get(record, field.attribute) }}
            </template>
        </slot>
    </td>
</template>

<script>
import get from 'lodash-es/get';
import Actions from './Actions.vue';
export default {
    components:{
        Actions
    },
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
