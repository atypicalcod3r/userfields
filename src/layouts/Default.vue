<template>
    <section>
        <div>
            <slot name="form" />
        </div>

        <div>
            <slot name="out" />
        </div>
    </section>
</template>

<style lang="scss">
section {
    padding: 5rem 0;

    & > div {
        padding: 2.5rem 0;
    }

    @media screen and (min-width: 728px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        & > div {
            width: 50%;
            padding: 0 2.5rem;
        }
    }
}
</style>
