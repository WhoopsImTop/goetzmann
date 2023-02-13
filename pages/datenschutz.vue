<template>
    <div class="content-container">
        <nuxt-content :document="article"></nuxt-content>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        try {
            const article = await $content('wichtig/datenschutz').fetch();
            return { article };
        } catch (error) {
            console.log(error);
        }
    },
    async fetch({ params, store: { dispatch, getters } }) {
        try {
            await dispatch("getContents");
        } catch (err) {
            console.log(err)
        }
    },
}
</script>

<style>

</style>