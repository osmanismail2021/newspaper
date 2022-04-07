import React from 'react'

const NewsList = ({ data }) => {
    return (
        <>
            {
                
            }

            {
                data.articles !=undefined?
                data.articles.map((news,index)=>(
                    <p>{news.author}</p>
                ))
                :
                ''
            }

        </>
    );
}

export default NewsList
