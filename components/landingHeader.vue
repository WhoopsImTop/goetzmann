<template>
    <div :style="'background-image: url(' + background + '); background-position: ' + backgroundPosition" class="landing-banner">
        <img class="person" src="/img/roman-goetzmann-waldkirch-wahl-2023-standard.png">
        <div class="landing-text" :class="returnBannerClasses" :style="'background:' + bannerColor">
            <slot></slot>
        </div>
        <div class="date-banner">
            <h4>12. März 2023 - Oberbürgermeisterwahl</h4>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        background: {
            type: String,
            default: "white"
        },
        backgroundPosition: {
            type: String,
            default: "center"
        },
        textPosition: {
            type: String,
            default: () => { return "left"; }
        },
        textAsBanner: {
            type: Boolean,
            default: false
        },
        bannerColor: {
            type: String,
            default: "black"
        },
    },
    computed: {
        returnBannerClasses() {
            let classes = "";
            classes += this.textAsBanner ? 'banner' : '';
            classes += ' ';
            classes += 'banner-' + this.textPosition;
            return classes;
        }
    }
}
</script>

<style>

</style>