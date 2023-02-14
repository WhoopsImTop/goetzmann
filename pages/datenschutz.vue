<template>
    <div class="content-container">
        <nuxt-content :document="article"></nuxt-content>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Datenschutz | Roman Götzmann - Oberbürgermeisterwahl 2023",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Datenschutz | Roman Götzmann - Oberbürgermeisterwahl 2023",
                }
            ]
        }
    },
    async fetch() {
        try {
            await this.$store.dispatch("getContents");
        } catch (err) {
            console.log(err)
        }
    },
    async asyncData({ $content, params }) {
        try {
            const article = await $content('wichtig/datenschutz').fetch();
            return { article };
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style>

</style>