import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
 
  return (
    <input 
     
     key="random1"
     value={keyword}
     placeholder={"search news"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar