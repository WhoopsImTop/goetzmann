<template>
  <div>
    <LandingHeader
      :background="$store.state.mainContent.landingImage"
      textPosition="left"
      :textAsBanner="true"
      bannerColor="linear-gradient(90deg, #3B5999, #4EB0E1)"
    >
      <h1 v-html="$store.state.mainContent.landingTitle"></h1>
    </LandingHeader>
    <Banner class="section" id="oberbuergermeisterwahl-2023">
      <template #content>
        <div class="grid">
          <div class="grid1">
            <h3>{{ $store.state.mainContent.bannerTitle }}</h3>
            <p
              v-html="$md.render($store.state.mainContent.bannerText ?? '')"
            ></p>
          </div>
          <div class="grid2 centered">
            <img
              width="200"
              :src="
                $store.state.mainContent.bannerImage
                  ? $store.state.mainContent.bannerImage
                  : ''
              "
              alt="wählen"
            />
            <p
              v-html="$md.render($store.state.mainContent.bannerSubtitle ?? '')"
            ></p>
          </div>
        </div>
      </template>
    </Banner>
    <Section>
      <template #content>
        <div id="video">
          <iframe
            width="100%"
            class="videoIFrame"
            src="https://www.youtube-nocookie.com/embed/20KQAQJ73pY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <a @click="shareVideo" class="video_share"
          >Video teilen
          <img src="img/share.svg" width="25px" style="margin-left: 10px"
        /></a>
        <div>
          <a class="share_error"></a>
          <a class="copy-btn" style="display: none" data-link="https://www.youtube.com/watch?v=20KQAQJ73pY" @click="copyToClipboard">Link kopieren</a>
        </div>
      </template>
    </Section>
    <Section
      id="infomaterial"
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
            :image="card.materialImage"
            :link="card.materialBtnLink"
            :buttonText="card.materialBtnText"
            btnColor="linear-gradient(90deg, #3B5999, #4EB0E1)"
          />
        </div>
      </template>
    </Section>
    <Section
      class="section"
      id="termine"
      :title="$store.state.mainContent.terminTitle"
      :subtitle="$store.state.mainContent.terminText"
    >
      <template #content>
        <div class="row justify-between">
          <termin-component
            v-for="(termin, index) in $store.state.termine"
            :key="index"
            :title="termin.title"
            :subtitle="termin.description"
            :date="termin.start"
            :weekday="termin.wochentag"
            :backgroundColor="'#F3F9Fb'"
          />
        </div>
      </template>
    </Section>
    <Section
      class="section"
      id="soziale-medien"
      :title="$store.state.mainContent.sozialeMedienTitle"
      :subtitle="$store.state.mainContent.sozialeMedienText"
    >
      <template #header>
        <div class="row icons">
          <a href="https://www.instagram.com/romangoetzmann/" target="_blank"
            ><img class="instagram-icon" src="/img/in.svg" alt="instagram"
          /></a>
          <a href="https://www.facebook.com/rgoetzmann" target="_blank"
            ><img class="facebook-icon" src="/img/fb.svg" alt="facebook"
          /></a>
        </div>
      </template>
      <template #content>
        <iframe
          src="https://widget.taggbox.com/122457"
          style="width: 100%; height: 800px; border: none"
        ></iframe>
      </template>
    </Section>
    <Section
      class="section"
      id="unterstuetzer-werden"
      :title="$store.state.mainContent.supporterTitle"
      :subtitle="$store.state.mainContent.supporterText"
    >
      <template #content>
        <div class="row justify-between">
          <radio-button
            v-for="(card, index) in $store.state.mainContent.supporterCards"
            :key="index"
            :contactAction="true"
            :title="card.materialTitle"
            :subtitle="card.materialText"
            :setAction="'setFormularSelectedObjects'"
            :removeAction="'removeFormularSelectedObjects'"
            :backgroundColor="'#F3F9Fb'"
          />
        </div>
        <formular-component
          :backgroundColor="'linear-gradient(90deg, #3B5999, #4EB0E1)'"
          v-show="$store.state.formularSelectedObjects.length != 0"
        ></formular-component>
      </template>
    </Section>
    <contact-formular
      class="section"
      id="kontakt"
      backgroundColor="linear-gradient(90deg, #3B5999, #4EB0E1)"
    >
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
  async fetch() {
    try {
      await this.$store.dispatch("getContents");
    } catch (err) {
      console.log(err);
    }
  },
  name: "IndexPage",
  layout: "default",
  head() {
    return {
      title: "Roman Götzmann - Oberbürgermeisterwahl 2023",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Roman Götzmann - Oberbürgermeisterwahl 2023",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Roman Götzmann - Oberbürgermeisterwahl 2023",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Roman Götzmann - Oberbürgermeisterwahl 2023",
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://www.romangoetzmann.de/img/goetzmann-fotoshooting-069-tal-hintegrund-grafik-1zu1.jpg",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.romangoetzmann.de/",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Roman Götzmann - Oberbürgermeisterwahl 2023",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: "@romangoetzmann",
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "@romangoetzmann",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Roman Götzmann - Oberbürgermeisterwahl 2023",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Roman Götzmann - Oberbürgermeisterwahl 2023",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://www.romangoetzmann.de/img/goetzmann-fotoshooting-069-tal-hintegrund-grafik-1zu1.jpg",
        },
      ],
    };
  },
  computed: {},
  methods: {
    async shareVideo() {
      let data = {
        title: "Roman Götzmann - Oberbürgermeisterwahl 2023",
        text: "Roman Götzmann - Wahlvideo 2023",
        url: "https://www.youtube.com/watch?v=20KQAQJ73pY",
      };

      try {
        await navigator.share(data);
      } catch (e) {
        document.querySelector('.copy-btn').style.display = 'inline-block';
        document.querySelector('.share_error').innerHTML = 'Ihr Browser unterstützt das Teilen leider nicht.'
      }
    },
    copyToClipboard() {
      let link = document.querySelector('.copy-btn').getAttribute('data-link');
      navigator.clipboard.writeText(link);
      document.querySelector('.copy-btn').innerHTML = 'kopiert';
      setTimeout(() => {
        document.querySelector('.copy-btn').innerHTML = 'Link kopieren';
      }, 2000);
    }
  },
};
</script>

<style>
#video {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
}
.videoIFrame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video_share {
  color: var(--primary-color);
  margin: 15px 0;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 2px solid var(--primary-color);
  display: inline-flex;
  align-items: center;
}

.copy-btn {
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: var(--primary-color-muted);
  color: var(--primary-color);
  cursor: pointer;
  margin-left: 10px;
}
</style>