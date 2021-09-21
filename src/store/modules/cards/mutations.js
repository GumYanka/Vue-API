import * as types from "@/store/mutationTypes";

export const mutations = {
  [types.SET_CARDS](state, data) {
    state.cards = data;
  }
};
