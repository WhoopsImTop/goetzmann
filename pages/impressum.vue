<template>
    <div class="content-container">
        <nuxt-content :document="article"></nuxt-content>
    </div>
</template>

<script>
export default {
    async fetch() {
        try {
            await this.$store.dispatch("getContents");
        } catch (err) {
            console.log(err)
        }
    },
    head() {
        return {
            title: "Impressum | Roman Götzmann - Oberbürgermeisterwahl 2023",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Impressum | Roman Götzmann - Oberbürgermeisterwahl 2023",
                }
            ]
        }
    },
    async asyncData({ $content, params }) {
        try {
            const article = await $content('wichtig/impressum').fetch();
            return { article };
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style>

</style>