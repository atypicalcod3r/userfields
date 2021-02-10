<script>
export default {
    name: 'ValidatorProvider',
    inject: {
        $ValidatorObserver: {
            default: null
        }
    },
    props: {
        validator: {
            type: Function
        },
        value: null
    },
    computed: {
        message() {
            const { validator, value } = this
            return typeof validator === 'function' ? validator(value) : ''
        },
        error() {
            return !!this.message
        },
        options() {
            return {
                $error: this.error,
                $message: this.message
            }
        }
    },
    render() {
        return this.$scopedSlots.default(this.options)
    }
}
</script>
