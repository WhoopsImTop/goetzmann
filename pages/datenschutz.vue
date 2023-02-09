<template>
    <div class="content-container">
        <nuxt-content :document="article"></nuxt-content>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('wichtig/datenschutz').fetch();
        return { article };
    },
}
</script>

<style>

</style>