<template>
  <div>
    <LandingHeader
      :background="$store.state.mainContent.landingImage.split('/static/')[1]"
      textPosition="left"
      :textAsBanner="true"
      bannerColor="linear-gradient(90deg, #3B5999, #4EB0E1)"
    >
      <h1 v-html="$store.state.mainContent.landingTitle"></h1>
      <h3>{{ $store.state.mainContent.landingSlogan }}</h3>
    </LandingHeader>
    <Banner>
      <template #content>
        <div class="row">
          <div class="col">
            <h3>{{ $store.state.mainContent.bannerTitle }}</h3>
            <p v-html="$md.render($store.state.mainContent.bannerText)"></p>
          </div>
          <div class="col align-end">
            <img width="200" :src="$store.state.mainContent.bannerImage.split('/static/')[1]" alt="wählen" />
            <p v-html="$md.render($store.state.mainContent.bannerSubtitle ?? '')"></p>
          </div>
        </div>
      </template>
    </Banner>
    <Section
      :title="$store.state.mainContent.infomaterialTitle"
      :subtitle="$store.state.mainContent.infomaterialText"
    >
      <template #content>
        <div class="row justify-between">
          <card
            v-for="(card, index) in $store.state.mainContent.infomaterial"
            :key="index"
            :title="card.materialTitle"
            :subtitle="card.materialText"
            :image="card.materialImage.split('/static/')[1]"
            :link="card.materialBtnLink"
            :buttonText="card.materialBtnText"
            btnColor="linear-gradient(90deg, #3B5999, #4EB0E1)"
          />
        </div>
      </template>
    </Section>
    <Section
      :title="$store.state.mainContent.sozialeMedienTitle"
      :subtitle="$store.state.mainContent.sozialeMedienText"
    >
      <template #header>
        <div class="row">
          <a href="https://www.instagram.com/romangoetzmann/" target="_blank"
            ><img width="30" src="/img/in.svg" alt="instagram"
          /></a>
          <a href="https://www.facebook.com/rgoetzmann" target="_blank"
            ><img width="15" src="/img/fb.svg" alt="facebook"
          /></a>
        </div>
      </template>
      <template #content> </template>
    </Section>
    <Section
      title="Unterstützer werden"
      subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. Lorem ipsum"
    >
      <template #content>
        <div class="row justify-between">
          <card
            v-for="(card, index) in $store.state.mainContent.supporterCards"
            :key="index"
            :contactAction="true"
            :title="card.materialTitle"
            :subtitle="card.materialText"
            :image="card.materialImage.split('/static/')[1]"
            :link="card.materialBtnLink"
            :buttonText="card.materialBtnText"
            btnColor="linear-gradient(90deg, #3B5999, #4EB0E1)"
          />
        </div>
      </template>
    </Section>
    <contact-formular
      backgroundColor="linear-gradient(90deg, #3B5999, #4EB0E1)"
    >
      <template #content>
        <img src="/img/gm_smartphone.png" alt="Portrait Roman Götzmann" />
      </template>
    </contact-formular>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "IndexPage",
  layout: "default",
  head() {},
  async fetch({ params, store: { dispatch, getters } }) {
    await dispatch("getContents");
  },
};
</script>

<style>
</style>