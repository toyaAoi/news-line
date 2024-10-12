import PropTypes from "prop-types";

const NewsCard = ({ article }) => {
  if (!article) return null;

  return (
    <article>
      <a href={article.url} target="blank">
        <div className="aspect-video bg-neutral-800 flex justify-center items-center">
          {article.urlToImage ? (
            <img
              className="w-full h-full object-cover"
              src={article.urlToImage}
              alt={article.title}
            />
          ) : (
            <p className="text-neutral-400 text-2xl">No image available</p>
          )}
        </div>
        <h2 className="text-xl">{article.title}</h2>
        <p className="text-neutral-400">
          <span>{article.source.name}</span>, <span>{article.author}</span>
        </p>
        <p>{Date(article.publishedAt).toString().slice(4, 15)}</p>
      </a>
    </article>
  );
};

NewsCard.propTypes = {
  article: PropTypes.object,
};

export default NewsCard;
