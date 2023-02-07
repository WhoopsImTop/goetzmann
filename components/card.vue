<template>
  <div class="card">
    <div class="card-image">
      <img :src="image" :alt="title" />
    </div>
    <div class="card-header">
      <h4>{{ title }}</h4>
      <p v-html="$md.render(subtitle)"></p>
    </div>
    <a
      v-if="contactAction === true"
      class="card-button"
      @click="contactActions"
      :style="'background: ' + btnColor"
      >{{ buttonText }}</a
    >
    <a v-else class="card-button" :style="'background: ' + btnColor" :href="link">{{
      buttonText
    }}</a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    btnColor: {
      type: String,
      required: true,
    },
    contactAction: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    contactActions() {
        this.$store.state.formularQuestion = this.title + '<br>' + this.subtitle;
        this.$store.state.formularSubject = this.title;
    },
  },
};
</script>

<style>
</style>