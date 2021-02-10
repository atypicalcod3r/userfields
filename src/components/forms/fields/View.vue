<template>
    <div class="form__field" :class="error ? 'is-error' : type">
        <div class="form__field__row">
            <label>{{ field.label }}</label>
        </div>

        <div class="form__field__row">
            <FormFieldSwitcher
                :field="field"
                    :type="field.type"
                        :value="value"
                            v-on="$listeners"
            />
        </div>

        <div v-if="error && message" class="form__field__message">{{ message }}</div>
    </div>
</template>

<style lang="scss">
::placeholder {
    &:active, &:focus {
        color: #aaaaaa;
    }
}

.form__field {
    margin-bottom: 2.5rem;

    label {
        display: inline-block;
        padding-bottom: .675rem;

        font-size: 1.2rem;
    }

    input[type="text"], select {
        width: 100%;

        padding: 1.25rem .675rem;

        font-size: 1.4rem;
        font-family: Arial, Helvetica, sans-serif;

        background-color: transparent;

        border: thin solid #ddd;
        border-radius: .2rem;

        box-shadow: none;
        outline: 0;
    }

    &__message {
        padding-top: .675rem;

        font-size: 1.2rem;
        color: #aaa;

        .is-error & {
            color: red;
        }
    }
}
</style>

<script>
import FormFieldSwitcher from './Switcher.vue';

export default {
    name: 'FormFieldView',
    components: {
        FormFieldSwitcher
    },
    props: {
        field: {
            type: Object,
            required: true
        },
        type: String,
        value: null,
        error: Boolean,
        message: String
    }
}
</script>
