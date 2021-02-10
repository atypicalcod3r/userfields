const createValidatorFn = (opts) => {
    const { id, handler } = opts
    const fn = handler.bind(opts)

    fn.id = id

    return fn
}

export const nameValidator = createValidatorFn({
    id: 'nameValidator',
    messages: [
        'Поле не должно быть пустым',
        'Поле должно содержать только буквы',
        'Поле должно содержать больше 5 символов'
    ],
    handler(val) {
        val = val.trim()

        if (!val) return this.messages[0]
        if (!/^[a-zа-я\s]+$/i.test(val)) return this.messages[1]
        if (val.length < 6) return this.messages[2]

        return ''
    }
})

export const genderValidator = createValidatorFn({
    id: 'genderValidator',
    messages: [
        'Поле не должно быть пустым',
        'Некорректное значение поля'
    ],
    handler(val) {
        val = val.trim()

        if (!val) return this.messages[0]

        const whitelist = ['male', 'female']

        return whitelist.includes(val) ? '' : this.messages.[1]
    }
})

export const dateValidator = createValidatorFn({
    id: 'dateValidator',
    messages: [
        'Поле не должно быть пустым',
        'Некорректный формат даты'
    ],
    handler(val) {
        if (!val) return this.messages[0]

        const date = new Date(val)
        const isValid = date.toString() !== 'Invalid Date'

        return isValid ? '' : this.messages[1]
    }
})
