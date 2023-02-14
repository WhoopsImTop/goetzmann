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
  async asyncData({ params, store: { dispatch, getters } }) {
    try {
      await dispatch("getContents");
      console.log('TEST')
    } catch (err) {
      console.log(err)
    }
  },
  data() {
    return {
      verticalAlign: false,
      links: [
        {
          name: "Oberbürgermeisterwahl 2023",
          link: "#oberbuergermeisterwahl-2023",
          img: "img/obwahl.png",
          highlight: true
        },
        /* {
          name: "Infomaterial",
          link: "#infomaterial"
        }, */
        {
          name: "Termine",
          link: "#termine"
        },
        {
          name: "Soziale Medien",
          link: "#soziale-medien"
        },
        {
          name: "Wählerinitiative",
          link: "#unterstuetzer-werden"
        },
        {
          name: "Kontakt",
          link: "#kontakt"
        }
      ]
    };
  },
}
</script>

<style>
@import "~/assets/css/main.css";
</style>
