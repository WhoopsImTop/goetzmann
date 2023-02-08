<template>
  <form class="custom-form">
    <h3>Kontaktaufnahme</h3>
    <p>Sie möchten <span v-for="(supporter, index) in $store.state.formularSelectedObjects" :key="index">{{ supporter.title }}, </span> werden.</p>
    <div class="form-row">
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
</template>

<script>
export default {
  props: ["backgroundColor"],
};
</script>

<style>
</style>