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
  mounted() {
    document.addEventListener('DOMContentLoaded', function () {

      // grab the sections (targets) and menu_links (triggers)
      // for menu items to apply active link styles to
      const sections = document.querySelectorAll(".section");
      const menu_links = document.querySelectorAll(".navigation-link");

      // functions to add and remove the active class from links as appropriate
      const makeActive = (link) => {menu_links[link].classList.add("active")}
      const removeActive = (link) => menu_links[link].classList.remove("active");
      const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

      const sectionMargin = 200;

      let currentActive = 0;

      // listen for scroll events
      window.addEventListener("scroll", () => {
        const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1

        // only if the section has changed
        // remove active class from all menu links
        // and then apply it to the link for the current section
        if (current !== currentActive) {
          removeAllActive();
          currentActive = current;
          makeActive(current);
        }
      });
    }, false);
  }
}
</script>

<style>
@import "~/assets/css/main.css";
</style>
