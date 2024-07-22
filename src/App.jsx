import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import { Footer } from "./components/Footer/Footer";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

import "./styles/App.css";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles/"
      );
      const newsData = response.data;

      setNews(newsData);
    }
    loadNews();
  }, []);

  return (
    <>
      <Navbar />

      <section id="articles">
        {news.length === 0 ? (
          <div
            style={{
              height: "400px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#ffffff"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          news.results.map((article) => {
            return (
              <Article
                key={article.id}
                link={article.url}
                title={article.title}
                provider={article.news_site}
                description={article.summary}
                thumbnail={article.image_url}
              />
            );
          })
        )}
      </section>

      <Footer />
    </>
  );
}

export default App;
