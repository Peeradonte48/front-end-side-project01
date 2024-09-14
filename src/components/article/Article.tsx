import React from "react";
import "./article.css";

interface articleProp {
  imgUrl: string;
  date: string;
  title: string;
}

export default function Article({ imgUrl, date, title }: articleProp) {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  );
}
