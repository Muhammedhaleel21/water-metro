import React, { useEffect, useState } from 'react'
import './NewsCard.css'

function NewsCard() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/e3ob/wm-test/refs/heads/main/news.json")
        .then((response) => response.json())
        .then((data) => setNews(data.data))
        .catch((error) => console.error("Error fetching news:", error));
    },[])

  return (
    <>
        <div className='news-container'>
            <h1 className='latest-news'>Latest News</h1>
            <div className='news-cards'>
                {news.map((item, index) => (
                    <div key={index} className='news-content'>
                        <h2>{item.title}</h2>
                        <p>{item.shortDescription}</p>
                        <a href={item.link} target='_blank' rel='noopener noreferrer' className='news-link'>Read more</a>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default NewsCard