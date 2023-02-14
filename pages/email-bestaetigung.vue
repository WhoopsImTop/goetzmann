<template>
    <div>
        <LandingHeader :background="$store.state.mainContent.landingImage" textPosition="left" :textAsBanner="true"
            bannerColor="linear-gradient(90deg, #3B5999, #4EB0E1)">
            <h1>Vielen Dank <br> für ihre Nachricht!</h1>
        </LandingHeader>
    </div>
</template>

<script>
export default {
    layout: 'default',
    async fetch() {
        try {
            await this.$store.dispatch("getContents");
        } catch (err) {
            console.log(err)
        }
    },
    head() {
        return {
            title: "Email Bestätigung | Roman Götzmann - Oberbürgermeisterwahl 2023",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Email Bestätigung | Roman Götzmann - Oberbürgermeisterwahl 2023",
                }
            ]
        }
    }
}
</script>

<style>

</style>