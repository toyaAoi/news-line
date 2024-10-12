import axios from "axios";

export const getAll = async () => {
  try {
    const response = await axios.get("/api/top-headlines");
    const data = response.data.map((article) => {
      return {
        ...article,
        source: article.source.name,
        publishedAt: Date(article.publishedAt).toString().slice(4, 15),
      };
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
