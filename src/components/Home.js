import { React, useContext } from 'react';
import { Database } from '../components/context/index';
import News from './News';
import "./home.css"

export default function Home() {

  const articles = useContext(Database)

  return (
    <>
      {/* {articles.articles.map(article =>{
            return(
             <News 
             author={article.author}
             title={article.title}
             description={article.description}
             url={article.url}
             urlToImage={article.urlToImage}
             publishedAt={article.publishedAt}


             />   
            )
      })} */}
    
     <div className="news">
     {
        articles.length !== 0 ? articles.map((news,index)=><News data={news}/>):'yok'
      }
     </div>
     <div className="weather">
     {
        articles.length !== 0 ? articles.map((weather,index)=><News data={weather}/>):'yok'
      }
     </div>
    </>
  )
}