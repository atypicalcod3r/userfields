<template>
    <select :value="value" @input="$emit('input', $event.target.value)">
        <option value="">-- Select --</option>
        
        <option
            v-for="item in field.meta.values"
                :key="item.label"
                    :value="item.value"
                        v-text="item.label"
        />
    </select>
</template>

<script>
export default {
    name: 'FormFieldSelect',
    inheritAttrs: false,
    props: {
        value: String,
        field: {
            type: Object,
            required: true
        }
    }
}
</script>
