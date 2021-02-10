<template>
    <ValidatorObserver ref="validator">
        <form name="userform" @submit.prevent="onSubmit">
            <template v-for="(value, key) in form">
                <ValidatorProvider
                    :name="fieldsMap[key].field"
                        :value="value"
                            :validator="fieldsMap[key].validator"
                                :key="key"
                                    #default="{ $error, $message }">
                    <FormFieldView
                        @input="onChange"
                            v-model="form[key]"
                                :key="key"
                                    :error="$error"
                                        :message="$message"
                                            :field="fieldsMap[key]"
                                            />
                </ValidatorProvider>
            </template>
        </form>
    </ValidatorObserver>
</template>

<script>
import * as validators from '@/modules/validators'

import ValidatorObserver from './validator/Observer.vue'
import ValidatorProvider from './validator/Provider.vue'

import FormFieldView from './fields/View.vue'

const VALIDATORS = Object.values(validators)

export default {
    name: 'UserForm',
    model: {
        prop: 'data',
        event: 'change'
    },
    components: {
        ValidatorObserver,
        ValidatorProvider,
        FormFieldView
    },
    props: {
        data: {
            type: Object,
            required: true
        },
        fields: {
            type: Array,
            required: true
        },
    },
    data: () => ({
        form: {}
    }),
    computed: {
        fieldsMap() {
            return this.fields.reduce((sum, data) => {
                const validator = (VALIDATORS.find(({ id }) => id === data.validator) || sum.validator)

                sum[data.field] = { ...data, validator }

                return sum
            }, {})
        }
    },
    methods: {
        onReset() {
            const { data } = this
            const form = JSON.parse(JSON.stringify(data))

            this.form = form
        },
        async onChange() {
            const { validator } = this.$refs
            const isValid = await validator.isValid()

            if (isValid) this.$emit('change', this.form)
        },
        async onSubmit() {
            // do submit
        }
    },
    watch: {
        data: {
            immediate: true,
            handler: 'onReset'
        }
    }
}
</script>
