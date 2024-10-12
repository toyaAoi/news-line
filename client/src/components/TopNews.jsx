import PropTypes from "prop-types";
import NewsCard from "./NewsCard";

const TopNews = ({ articles }) => {
  return (
    <section>
      <h1 className="text-6xl font-bold my-8">Top News</h1>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-8">
        {articles.map((article) => (
          <NewsCard key={article.title} article={article} />
        ))}
      </div>
    </section>
  );
};

TopNews.propTypes = {
  articles: PropTypes.array,
};

export default TopNews;
