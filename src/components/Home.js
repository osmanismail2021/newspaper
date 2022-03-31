import { React, useContext } from 'react';
import { Database } from '../components/context/index';
import News from './News';


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
      {
        articles.length !== 0 ? articles.map((news,index)=><News data={news}/>):'yok'
      }
      {console.log(articles)}
    </>
  )
}