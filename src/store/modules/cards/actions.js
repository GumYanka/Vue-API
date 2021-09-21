import * as types from "@/store/mutationTypes";
import { cardsService } from "@/http/cards";

export const actions = {
  getCards: async ({ commit }) => {
    const data = await cardsService.getCardsList();

    commit(types.SET_CARDS, data);
  }
};
