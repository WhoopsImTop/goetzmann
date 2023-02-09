<template>
  <div>
    <LandingHeader :background="$store.state.mainContent.landingImage.split('/static/')[1]" textPosition="left"
      :textAsBanner="true" bannerColor="linear-gradient(90deg, #3B5999, #4EB0E1)">
      <h1 v-html="$store.state.mainContent.landingTitle"></h1>
    </LandingHeader>
    <Banner class="section" id="oberbuergermeisterwahl-2023">
      <template #content>
        <div class="grid">
          <div class="grid1">
            <h3>{{ $store.state.mainContent.bannerTitle }}</h3>
            <p v-html="$md.render($store.state.mainContent.bannerText)"></p>
          </div>
          <div class="grid2 centered">
            <img width="200" :src="
              $store.state.mainContent.bannerImage
                ? $store.state.mainContent.bannerImage.split('/static/')[1]
                : ''
            " alt="wählen" />
            <p v-html="$md.render($store.state.mainContent.bannerSubtitle ?? '')"></p>
          </div>
        </div>
      </template>
    </Banner>
    <!-- <Section id="infomaterial" :title="$store.state.mainContent.infomaterialTitle"
      :subtitle="$store.state.mainContent.infomaterialText">
      <template #content>
        <div class="row justify-between">
          <card v-for="(card, index) in $store.state.mainContent.infomaterial" :key="index" :title="card.materialTitle"
            :subtitle="card.materialText" :image="card.materialImage.split('/static/')[1]" :link="card.materialBtnLink"
            :buttonText="card.materialBtnText" btnColor="linear-gradient(90deg, #3B5999, #4EB0E1)" />
        </div>
      </template>
    </Section> -->
    <Section class="section" id="termine" :title="$store.state.mainContent.terminTitle" :subtitle="$store.state.mainContent.terminText">
      <template #content>
        <div class="row justify-between">
          <termin-component v-for="(termin, index) in $store.state.termine" :key="index" :title="termin.title"
            :subtitle="termin.description" :date="termin.start" :weekday="termin.wochentag"
            :backgroundColor="'#F3F9FB'" />
        </div>
      </template>
    </Section>
    <Section class="section" id="soziale-medien" :title="$store.state.mainContent.sozialeMedienTitle"
      :subtitle="$store.state.mainContent.sozialeMedienText">
      <template #header>
        <div class="row icons">
          <a href="https://www.instagram.com/romangoetzmann/" target="_blank"><img class="instagram-icon"
              src="/img/in.svg" alt="instagram" /></a>
          <a href="https://www.facebook.com/rgoetzmann" target="_blank"><img class="facebook-icon" src="/img/fb.svg"
              alt="facebook" /></a>
        </div>
      </template>
      <template #content>
        <div class="row justify-between">
          <a href="https://www.instagram.com/romangoetzmann/" target="_blank"
            v-for="(post, index) in $store.state.instagram" class="instagram-image" :key="index">
            <img :src="post.image.split('/static/')[1]" :alt="index" />
          </a>
        </div>
      </template>
    </Section>
    <Section class="section" id="unterstuetzer-werden" :title="$store.state.mainContent.supporterTitle"
      :subtitle="$store.state.mainContent.supporterText">
      <template #content>
        <div class="row justify-between">
          <radio-button v-for="(card, index) in $store.state.mainContent.supporterCards" :key="index"
            :contactAction="true" :title="card.materialTitle" :subtitle="card.materialText"
            :setAction="'setFormularSelectedObjects'" :removeAction="'removeFormularSelectedObjects'"
            :backgroundColor="'#F3F9FB'" />
        </div>
        <formular-component :backgroundColor="'linear-gradient(90deg, #3B5999, #4EB0E1)'"
          v-show="$store.state.formularSelectedObjects.length != 0"></formular-component>
      </template>
    </Section>
    <contact-formular class="section" id="kontakt" backgroundColor="linear-gradient(90deg, #3B5999, #4EB0E1)">
      <template #content>
        <img src="/img/gm_smartphone.png" alt="Portrait Roman Götzmann" />
      </template>
    </contact-formular>
  </div>
</template>

<script>
import radioButton from "~/components/radioButton.vue";
export default {
  components: { radioButton },
  data() {
    return {};
  },
  name: "IndexPage",
  layout: "default",
  head() { },
  async fetch({ params, store: { dispatch, getters } }) {
    try {
      await dispatch("getContents");
    } catch (err) {
      console.log(err)
    }
  },
};
</script>

<style>

</style>