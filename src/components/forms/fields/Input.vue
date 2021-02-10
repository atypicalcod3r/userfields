<template>
    <input type="text" :name="name" :value="value" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
    name: 'FormFieldInput',
    inheritAttrs: false,
    props: {
        name: String,
        value: String
    }
}
</script>
