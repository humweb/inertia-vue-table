<template>
    <td :class="{'text-right': field.component === 'action-field'}">
        <slot>
            <Actions v-if="field.component === 'action-field'" :record="record" :actions="field.actions" />
            <LinkField v-else-if="field.component === 'link-field'" :field="field" :value="get(record, field.attribute)" />
            <ImageField v-else-if="field.component === 'image-field'" :field="field" :value="get(record, field.attribute)" />
            <template v-else>
               {{ get(record, field.attribute) }}
            </template>
        </slot>
    </td>
</template>

<script>
import get from 'lodash-es/get';
import Actions from './Actions.vue';
import LinkField from './Fields/LinkField.vue';
import ImageField from './Fields/ImageField.vue';

export default {
    components:{
        Actions,
        LinkField,
        ImageField
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
