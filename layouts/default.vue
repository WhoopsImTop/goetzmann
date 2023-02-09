<template>
  <div>
    <navigation :links="links" logoImage="img/rg_logo.png" :verticalAlign=verticalAlign />
    <div :class="verticalAlign ? 'vertical-content' : ''">
      <Nuxt></Nuxt>
    </div>
    <footer-component />
  </div>
</template>

<script>
export default {
  name: "default",
  data() {
    return {
      verticalAlign: false,
      links: [
        {
          name: "Oberbürgermeisterwahl 2023",
          link: "/",
          img: "img/obwahl.png",
          highlight: true
        },
        /* {
          name: "Infomaterial",
          link: "#infomaterial"
        },
        {
          name: "Soziale Medien",
          link: "#soziale-medien"
        },
        {
          name: "Unterstützer werden",
          link: "#unterstuetzer-werden"
        },
        {
          name: "Kontakt",
          link: "#kontakt"
        } */
      ]
    };
  },
}
</script>

<style>
@import "~/assets/css/main.css";
</style>
