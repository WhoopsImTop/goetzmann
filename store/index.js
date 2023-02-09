export const state = () => ({
  mainContent: [],
  formularQuestion:
    "Sie haben eine Frage? <br> Interesse an einem persönlichen Gespräch? <br> Ich freue mich über Ihre Nachricht!",
  formularSubject: "Anfrage über Kontaktformular",
  formularSelectedObjects: [],
  instagram: [],
  showContactForm: false,
  termine: [],
});

export const getters = {
  getContent: (state) => parseJSON(state.mainContent),
};

export const mutations = {
  setContent(state, payload) {
    state.mainContent = payload;
  },
  setFormularQuestion(state, payload) {
    state.formularQuestion = payload;
  },
  setFormularSubject(state, payload) {
    state.formularSubject = payload;
  },
  setInstagram(state, payload) {
    state.instagram = payload;
  },
  setTermine(state, payload) {
    let sortedTermine = payload.sort((a, b) => {
      return new Date(a.start) - new Date(b.start);
    });

    //remove past events
    sortedTermine = sortedTermine.filter((item) => {
      return new Date(item.start) > new Date();
    });
    state.termine = sortedTermine;
  },
  setFormularSelectedObjects(state, payload) {
    state.formularSelectedObjects.push(payload);
  },
  removeFormularSelectedObjects(state, payload) {
    //find payload.title in state.formularSelectedObjects and remove it
    state.formularSelectedObjects = state.formularSelectedObjects.filter(
      (item) => item.title !== payload.title
    );
  },
  setContactForm(state, payload) {
    state.showContactForm = true;
  },
  unsetContactForm(state, payload) {
    state.showContactForm = false;
  },
};

export const actions = {
  async getContents({ commit }, callback) {
    const content = await this.$content("/").fetch();
    commit("setContent", content[0]);
    const instagram = await this.$content("/instagram").fetch();
    commit("setInstagram", instagram);
    const termine = await this.$content("/termine").fetch();
    commit("setTermine", termine);
  },
};
