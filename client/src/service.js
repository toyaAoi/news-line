import data from "./data.json";

const articles = data.articles;

export const getAll = () => {
  return articles;
};
