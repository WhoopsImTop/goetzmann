<template>
    <div class="navigation-container" :class="verticalAlign ? 'vertical' : ''">
        <div class="navigation-content-container">
            <div class="navigation-content-image" :class="logoPosition">
                <nuxt-link to="/">
                    <img :src="logoImage" :alt="logoAlt" />
                </nuxt-link>
            </div>
            <div class="burger" :class="active ? 'active' : ''" @click="active = !active">
                <div class="burger-line"></div>
                <div class="burger-line"></div>
                <div class="burger-line"></div>
            </div>
            <div class="navigation-content-links">
                <nuxt-link v-for="link in links" class="navigation-link" :class="link.highlight ? 'highlight': ''" :key="link.name" :to="link.link">
                    <img v-show="link.img" :src="link.img" :alt="link.name" /> {{ link.name }}
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        logoPosition: {
            type: String,
            default: "left"
        },
        logoImage: {
            type: String,
            default: "img/logo.svg"
        },
        logoAlt: {
            type: String,
            default: "logo"
        },
        links: {
            type: Array,
            default: () => {
                return [
                    {
                        name: "Home",
                        link: "/"
                    },
                    {
                        name: "About",
                        link: "/about"
                    },
                    {
                        name: "Contact",
                        link: "/contact"
                    },
                ]
            }
        },
        verticalAlign: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            active: false
        }
    },
}
</script>

<style>

</style>