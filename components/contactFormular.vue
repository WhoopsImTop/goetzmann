<template>
  <div>
    <div class="content-container row">
      <div class="col">
        <h2>Kontakt</h2>
        <p v-html="$store.state.formularQuestion"></p>

        <a class="contact-mail" :href="'mailto:' + $store.state.mainContent.contactEmail">{{
          $store.state.mainContent.contactEmail
        }}</a>
        <a v-if="$store.state.mainContent.contactPhone" :href="'tel:' + $store.state.mainContent.contactPhone">{{
          $store.state.mainContent.contactPhone
        }}</a>

        <radio-button style="margin-top: 30px;" title="Interesse an einem persönlichen Gespräch?"
          subtitle="Ich freue mich über Ihre Nachricht!" :setAction="'setContactForm'"
          :removeAction="'unsetContactForm'" :backgroundColor="'#F3F9FB'"/>
        <form class="form" v-show="$store.state.showContactForm">
          <div class="formgroup">
            <label for="name">Vor- und Nachname</label>
            <input type="text" id="name" name="name" placeholder="Vor- und Nachname" v-model="name" />
          </div>
          <div class="formgroup">
            <label for="email">E-Mail-Adresse</label>
            <input type="email" id="email" name="email" placeholder="E-Mail" v-model="email" />
          </div>
          <div class="formgroup">
            <label for="message">Ihre Nachricht</label>
            <textarea id="message" name="message" placeholder="Ihre Nachricht" v-model="message"></textarea>
          </div>
          <div class="formgroup checkbox">
            <input type="checkbox" id="privacy" name="privacy" v-model="privacy" placeholder="Datenschutz" />
            <span for="privacy">Ich habe die <a href="#">Datenschutzerklärung</a> gelesen und
              akzeptiere diese.</span>
          </div>
          <div class="formgroup">
            <button class="button" :style="'background: ' + backgroundColor" @click="submitContactForm">
              Absenden
            </button>
            <div id="error"></div>
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
  data() {
    return {
      name: "",
      email: "",
      message: "",
      privacy: false,
    };
  },
  methods: {
    submitContactForm(event) {
      event.preventDefault();
      if (
        this.privacy === false &&
        this.name == "" &&
        this.email == "" &&
        this.message == ""
      ) {
        document.getElementById("error").innerHTML =
          "Bitte füllen Sie alle Felder aus und stimmen Sie der Datenschutzerklärung zu.";
      } else {
        fetch('/mail.php', {
          method: 'POST',
          body: new URLSearchParams({
            subject: "Interesse an einem persönlichen Gespräch",
            name: this.name,
            email: this.email,
            nachricht: this.message,
          })
        })
          .then((response) => {
            if (response.ok) {
              document.getElementById("error").innerHTML =
                "Ihre Nachricht wurde erfolgreich versendet.";
              this.name = "";
              this.email = "";
              this.message = "";
              window.location.href = "/email-bestaetigung";
            } else {
              document.getElementById("error").innerHTML =
                "Ihre Nachricht konnte nicht versendet werden.";
            }
          })
          .catch((error) => {
            document.getElementById("error").innerHTML =
              "Ihre Nachricht konnte nicht versendet werden.";
          });
      }
    },
  }
};
</script>

<style>

</style>