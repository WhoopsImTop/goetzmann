<template>
  <form class="custom-form">
    <h3>Kontaktaufnahme</h3>
    <p>Sie interessieren sich für <span v-for="(supporter, index) in $store.state.formularSelectedObjects" :key="index">{{
      supporter.title
    }}{{ index != $store.state.formularSelectedObjects.length - 1 ? ',' : '' }} </span></p>
    <div class="form-row">
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
    </div>
    <div class="formgroup checkbox">
      <input type="checkbox" id="privacy" name="privacy" v-model="privacy" placeholder="Datenschutz" />
      <span for="privacy">Ich habe die <a href="#">Datenschutzerklärung</a> gelesen und
        akzeptiere diese.</span>
    </div>
    <div class="formgroup">
      <button class="button" :style="'background: ' + backgroundColor" @click="submitContactForm1">
        Absenden
      </button>
      <div id="error2"></div>
    </div>
  </form>
</template>

<script>
export default {
  props: ["backgroundColor"],
  data() {
    return {
      name: "",
      email: "",
      message: "",
      privacy: false,
    };
  },
  methods: {
    submitContactForm1(event) {
      event.preventDefault();
      if (
        this.privacy === false &&
        this.name == "" &&
        this.email == "" &&
        this.message == ""
      ) {
        document.getElementById("error2").innerHTML =
          "Bitte füllen Sie alle Felder aus und stimmen Sie der Datenschutzerklärung zu.";
      } else {
        fetch('/mail.php', {
          method: 'POST',
          body: new URLSearchParams({
            name: this.name,
            email: this.email,
            nachricht: this.message,
          })
        })
          .then((response) => {
            if (response.ok) {
              document.getElementById("error2").innerHTML =
                "Ihre Nachricht wurde erfolgreich versendet.";
            } else {
              document.getElementById("error2").innerHTML =
                "Ihre Nachricht konnte nicht versendet werden.";
            }
          })
          .catch((error) => {
            document.getElementById("error2").innerHTML =
              "Ihre Nachricht konnte nicht versendet werden.";
          });
      }
    },
  }
};
</script>

<style>

</style>