import { useState } from "react";
import NewsCard from "./NewsCard";
import { getAll } from "../service";

const TopNews = () => {
  const [articles, setArticles] = useState(null);

  useState(() => {
    const articlesData = getAll().slice(1);

    setArticles(articlesData);
  });

  if (!articles) return <div>Loading...</div>;

  return (
    <section>
      <h1 className="text-6xl font-bold my-8">Top News</h1>
      <div className="grid grid-cols-2 gap-8">
        {articles.map((article) => (
          <NewsCard key={article.title} article={article} />
        ))}
      </div>
    </section>
  );
};

export default TopNews;
