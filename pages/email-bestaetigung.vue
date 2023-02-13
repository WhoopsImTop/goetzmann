<template>
    <div>
        <LandingHeader :background="$store.state.mainContent.landingImage.split('/static/')[1]" textPosition="left"
            :textAsBanner="true" bannerColor="linear-gradient(90deg, #3B5999, #4EB0E1)">
            <h1>Vielen Dank <br> für ihre Nachricht!</h1>
        </LandingHeader>
    </div>
</template>

<script>
export default {
    layout: 'default',
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