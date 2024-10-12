import axios from "axios";
import NodeCache from "node-cache";

const cache = new NodeCache();
const API_KEY = process.env.API_KEY;

export const dataController = (req, res) => {
  const key = req.path;
  const cachedResponse = cache.get(key);

  if (cachedResponse) {
    return res.json(cachedResponse);
  }

  const data = { message: "Hello, World!", timestamp: Date.now() };

  cache.set(key, data, 3600);
};

export const getTopHeadlines = async (req, res) => {
  const key = req.path;
  const cachedResponse = cache.get(key);

  if (cachedResponse) {
    return res.json(cachedResponse);
  }

  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );
  const data = response.data.articles;
  cache.set(key, data, 3600);

  res.json(response.data.articles);
};
