import React from 'react'
import "./news.css"
// author, title, description, url, urlToImage, publishedAt
const News = ({data}) => {
  return (
    <div className="container">
      <div className="frames">
        <div id="item">
          <img className="item_img" src={data.urlToImage} alt="" />
          <h2>{data.author}</h2>
          <h3><a href={data.url} target="_blank">{data.title}</a></h3>
          <p id="desc">{data.description}</p>
          <h4 id="publish">{data.publishedAt}</h4>
        </div>
      </div>
    </div>
  )

}

export default News
