import React, { useEffect, useState } from "react";
import "./Blog.css";
import defaultImage from "../../images/Blog-default.jfif";
import Navbar from "../Header/Header";
const TechBlog = (logout, userData) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechBlogs = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?category=technology&apikey=f2f3a3d9db104c22a5b2182cfc5623aa"
        );
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the blog data:", error);
        setLoading(false);
      }
    };

    fetchTechBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Navbar userData={userData} logout={logout} />
      <div className="tech-blog-container row">
        {articles.map((article, index) => (
          <div key={index} className="blog-card">
            <img
              src={article.urlToImage || defaultImage}
              alt={article.title}
              className="blog-image"
            />
            <div className="blog-content">
              <h2 className="blog-title">{article.title}</h2>
              <p className="blog-description">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-link"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechBlog;
