<template>
    <date-picker :value="model" type="datetime" @input="$emit('input', $event)"></date-picker>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
    name: 'FormFieldDate',
    inheritAttrs: false,
    components: {
        DatePicker
    },
    props: {
        value: null
    },
    computed: {
        model() {
            const { value } = this
            return value && new Date(value)
        }
    }
}
</script>
