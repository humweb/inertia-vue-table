<template>
    <td :class="{'text-right': field.component === 'action-field'}">
        <slot>
            <Actions v-if="field.component === 'action-field'" :record="record" :actions="field.actions" />
            <LinkField v-else-if="field.component === 'link-field'" :field="field" v-html="get(record, field.attribute)" />
            <template v-else>
                <span v-html="get(record, field.attribute)"></span>
            </template>
        </slot>
    </td>
</template>

<script>
import get from 'lodash-es/get';
import Actions from './Actions.vue';
import LinkField from './Fields/LinkField.vue';
export default {
    components:{
        Actions,
        LinkField
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
