export const state = () => ({
  mainContent: [],
  formularQuestion: "Sie haben eine Frage? <br> Interesse an einem persönlichen Gespräch? <br> Ich freue mich über Ihre Nachricht!",
  formularSubject: "Anfrage über Kontaktformular",
});

export const getters = {
  getContent: (state) => parseJSON(state.mainContent),
};

export const mutations = {
  setContent(state, payload) {
    state.mainContent = payload;
  },
};

export const actions = {
  async getContents({ commit }, callback) {
    const content = await this.$content("/").fetch();
    commit("setContent", content[0]);
  },
};
