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
}
</script>

<style>

</style>