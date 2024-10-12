import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import TopNews from "./components/TopNews";
import { useEffect } from "react";
import { getAll } from "./service";

function App() {
  const [articles, setArticles] = useState(null);

  const getArticles = async () => getAll().then((data) => setArticles(data));

  useEffect(() => {
    getArticles();
  }, []);

  console.log(articles);

  const firstArticle = articles ? articles[0] : null;
  const otherArticles = articles ? articles.slice(1) : null;

  return (
    <div className="">
      <Nav />
      {articles ? (
        <>
          <Header article={firstArticle} />
          <TopNews articles={otherArticles} />
        </>
      ) : (
        <div className="h-screen flex justify-center items-center text-neutral-700 text-2xl font-semibold">
          <p>Site is not available right now.</p>
        </div>
      )}
    </div>
  );
}

export default App;
