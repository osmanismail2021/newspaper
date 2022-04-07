import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import NewsList from './NewsList';
import { useSearchParams } from 'react-router-dom';
const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [newsListDefault, setNewsListDefault] = useState();
  const [newsList, setNewsList] = useState();
  const [searchParams] = useSearchParams();
  

  const updateInput = async (input) => {
     const filtered = newsListDefault.filter(news => {
      return news.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setNewsList(filtered);
  }

  useEffect( () => {
    const fetchData = async () => {
    return await fetch(`https://newsapi.org/v2/everything?q=${searchParams.get('q')}&apiKey=a85abafdd40249398d40a7794a9506a1`)
      .then(response => response.json())
      .then(data => {
         setNewsList(data) 
         setNewsListDefault(data)
       });}
    fetchData()
    console.log(searchParams.get('q'));
  },[]);
	
  return (
    <>
      <h1>News List</h1>
      {/* <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <NewsList newsList={newsList}/> */}
      <NewsList data={newsList}/>
    
    </>
   );
}

export default SearchPage