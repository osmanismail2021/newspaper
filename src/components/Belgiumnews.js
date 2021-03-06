import { React, useState, useEffect } from 'react';
import News from './News';

export default function Belgiumnews() {
  const [articles, setArticles] = useState([])


  useEffect(() => {
   const fetchIt = async ()=>{
    await fetch('/api/v2/everything?q=belgium&apiKey=a85abafdd40249398d40a7794a9506a1')
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles)

      })
   }
   

   

   fetchIt()
  }, [])

  
  
  return (
          <div className="news">
     {
        articles.length !== 0 ? articles.map((news,index)=><News key={index} data={news}/>):'yok'
      }
     </div>
  )
}

