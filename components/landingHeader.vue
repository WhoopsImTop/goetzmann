<template>
    <div :style="'background-image: url(' + background + '); background-position: ' + backgroundPosition" class="landing-banner">
        <div class="landing-text" :class="returnBannerClasses" :style="'background:' + bannerColor">
            <slot></slot>
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