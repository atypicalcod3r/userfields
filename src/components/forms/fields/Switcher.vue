<script>
import FormFieldDate from './Date.vue'
import FormFieldInput from './Input.vue'
import FormFieldSelect from './Select.vue'

import FormFieldError from './Error.vue'

export const TYPES = {
    STRING: 'string',
    SELECT: 'select',
    DATE: 'date'
}

const getFormComponent = (type) => {
    switch (type) {
        case TYPES.STRING:
            return FormFieldInput

        case TYPES.SELECT:
            return FormFieldSelect

        case TYPES.DATE:
            return FormFieldDate

        default:
            return FormFieldError
    }
}

export default {
    name: 'FormFieldSwitcher',
    functional: true,
    props: {
        type: {
            type: String,
            required: true
        }
    },
    render: (h, context) => h(
        getFormComponent(context.props.type),
        context.data,
        context.children
    )
}
</script>
