import PropTypes from "prop-types";
const Header = ({ article }) => {
  return (
    <div>
      <header className="py-8 mt-4">
        <div className="flex max-lg:flex-col lg:items-center lg:gap-16">
          <h1 className="text-6xl font-normal lg:basis-1/2">{article.title}</h1>
          <div className="my-12 bg-slate-300 aspect-video max-lg:w-full">
            <img
              className="h-full w-full object-cover"
              src={article.urlToImage}
              alt={article.title}
            />
          </div>
        </div>
        <div>
          <div>
            <div className="text-xl">{article.description}</div>
            <div className="my-6 flex divide-x-2 *:px-6">
              <p className="!pl-0">{article.source}</p>
              <p>{article.author}</p>
              <p>{article.publishedAt}</p>
            </div>
            <div>
              <p className="text-neutral-400">
                {article.content.split("[")[0]}
                <a className="underline" href={article.url}>
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  article: PropTypes.object,
};

export default Header;
