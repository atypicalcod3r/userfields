<template>
    <div id="app">
        <main>
            <LayoutDefault>
                <template #form>
                    <h2>Form</h2>

                    <UserForm v-model="userData" :fields="userFields" />
                </template>

                <template #out>
                    <h2>Data</h2>
                    <pre>{{ userData }}</pre>
                </template>
            </LayoutDefault>
        </main>
    </div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
}

*::after, *::before {
    box-sizing: border-box;
}

::-moz-focus-inner {
    padding: 0;
    border: 0;
}

html {
    height: 100%;
    min-height: 100%;
    background-color: white;

    font-size: 10px;

    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    position: relative;

    min-height: 100%;
    min-width: 30rem;

    font-family: 'Arial', 'Helvetica', sans-serif;
    font-size: 1.5em;
    font-weight: 400;

    line-height: 1.4;

    color: #333333;
}

main {
    width: 90%;
    margin: 0 auto;
}

h1, h2, h3, h4, h5, h6 {
    margin-bottom: 2.5rem;

    font-size: 1.6rem;
    font-weight: 600;
}

pre {
    padding: 1.25rem;

    background: #eeeeee;
    border: thin solid #dddddd;
    border-radius: .2rem;

    font-size: 1.2rem;
}
</style>

<script>
import LayoutDefault from './layouts/Default.vue'
import UserForm from './components/forms/User.vue'

export default {
    name: 'App',
    components: {
        LayoutDefault, UserForm
    },
    data: () => ({
        userData: {
            name:   'User Name',
            gender: 'male',
            sub:    '2020-03-04T13:40:00Z'
        },
        userFields: [
            {
                label:     'Name',
                field:     'name',
                type:      'string',
                validator: 'nameValidator'
            },
            {
                label:     'Gender',
                field:     'gender',
                type:      'select',
                validator: 'genderValidator',
                meta: {
                    values: [
                        {
                            label: 'Male',
                            value: 'male'
                        },
                        {
                            label: 'Female',
                            value: 'female'
                        }
                    ]
                }
            },
            {
                label:     'Subscription',
                field:     'sub',
                type:      'date',
                validator: 'dateValidator'
            }
        ]
    })
}
</script>
