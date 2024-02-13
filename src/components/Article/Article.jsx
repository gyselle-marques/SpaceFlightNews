import React from "react";

import "./styles.css";

export function Article({ link, title, provider, description, thumbnail }) {
  return (
    <article id="article">
      <img src={thumbnail} alt={title} />

      <div className="article-infos">
        <a href={link}>{title}</a>
        <h3>{provider}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
