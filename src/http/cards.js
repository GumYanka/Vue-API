import API from "./http-client";

function getCardsList() {
  return API.get(`cards`).then(({ data }) => data);
}

export const cardsService = {
  getCardsList
};
