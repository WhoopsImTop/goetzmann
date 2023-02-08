<template>
  <div class="mute">
    <div class="content-container row">
      <div class="col">
        <h2>Kontakt</h2>
        <p v-html="$store.state.formularQuestion"></p>

        <a :href="'mailto:' + $store.state.mainContent.contactEmail">{{
          $store.state.mainContent.contactEmail
        }}</a>
        <a :href="'tel:' + $store.state.mainContent.contactPhone">{{
          $store.state.mainContent.contactPhone
        }}</a>

        <radio-button style="margin-top: 30px;"
          title="Interesse an einem persönlichen Gespräch?"
          subtitle="Ich freue mich über Ihre Nachricht!"
          :setAction="'setContactForm'"
          :removeAction="'unsetContactForm'"
        />
        <form class="form" v-show="$store.state.showContactForm">
          <div class="formgroup">
            <label for="name">Vor- und Nachname</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Vor- und Nachname"
            />
          </div>
          <div class="formgroup">
            <label for="email">E-Mail-Adresse</label>
            <input type="email" id="email" name="email" placeholder="E-Mail" />
          </div>
          <div class="formgroup">
            <label for="message">Ihre Nachricht</label>
            <textarea
              id="message"
              name="message"
              placeholder="Ihre Nachricht"
            ></textarea>
          </div>
          <div class="formgroup checkbox">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              placeholder="Datenschutz"
            />
            <span for="privacy"
              >Ich habe die <a href="#">Datenschutzerklärung</a> gelesen und
              akzeptiere diese.</span
            >
          </div>
          <div class="formgroup">
            <button
              class="button"
              :style="'background: ' + backgroundColor"
              type="submit"
            >
              Absenden
            </button>
          </div>
        </form>
      </div>
      <div class="col">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import radioButton from "./radioButton.vue";

export default {
  props: {
    backgroundColor: {
      type: String,
      required: true,
    },
  },
  components: { radioButton },
};
</script>

<style>
</style>