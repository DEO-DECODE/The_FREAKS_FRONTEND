import React, { useEffect, useState } from "react";
import HealthItems from "./HealthItems";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import "../styles/colors.scss";
import "../styles/Health.scss";
const Health = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateHealth = async () => {
    props.setProgress(10);
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateHealth();
  }, []);
  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
  return (
    <div className="Container">
      <h1 className="firstLetter" data-aos="fade-right"> and Fitness</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
      >
        <div className="healthColContainer">
          {articles.map((element) => {
            return (
              <div className="healthCol" key={element.url}>
                <HealthItems
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

Health.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "health",
};

Health.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default Health;
