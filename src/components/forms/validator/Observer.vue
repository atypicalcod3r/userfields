<script>
export default {
    name: 'ValidatorObserver',
    computed: {
        error() {
            return this.children.some((e) => e.error)
        },
        options() {
            return {
                $error: this.$error
            }
        }
    },
    methods: {
        addChildren(data) {
            this.children.push(data)
        },
        removeChildren(data) {
            const index = this.children.indexOf(data)
            this.children.splice(index, 1)
        },
        isValid() {
            return new Promise((resolve) => {
                this.$nextTick(() => resolve(!this.error))
            })
        }
    },
    provide() {
        return {
            $ValidatorObserver: {
                addChildren: this.addChildren,
                removeChildren: this.removeChildren
            },
        }
    },
    data: () => ({
        children: []
    }),
    render() {
        return this.$scopedSlots.default(this.options)
    }
}
</script>
