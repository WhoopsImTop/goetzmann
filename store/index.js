export const state = () => ({
  mainContent: [],
  formularQuestion:
    "Sie haben eine Frage? <br> Interesse an einem persönlichen Gespräch? <br> Ich freue mich über Ihre Nachricht!",
  formularSubject: "Anfrage über Kontaktformular",
  instagram: [],
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
  }
};

export const actions = {
  async getContents({ commit }, callback) {
    const content = await this.$content("/").fetch();
    commit("setContent", content[0]);
    const instagram = await this.$content("/instagram").fetch();
    commit("setInstagram", instagram);
  },
};
