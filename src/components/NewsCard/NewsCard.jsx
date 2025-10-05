import React, { useEffect, useState } from 'react'
import './NewsCard.css'

function NewsCard() {

    const [news, setNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/e3ob/wm-test/refs/heads/main/news.json")
        .then((response) => response.json())
        .then((data) => setNews(data.data))
        .catch((error) => console.error("Error fetching news:", error));
    },[])

    const handleReadMore = (newsItem) => {
        setSelectedNews(newsItem);
        setShowModal(true);
    }

    const closeModal = () => {
        setSelectedNews(null);
        setShowModal(false);
    }

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    }


    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }

  return (
    <>
        <div className='news-container'>
            <h1 className='latest-news'>Latest News</h1>
            <div className='news-cards'>
                {news.map((item) => (
                    <div key={item.id} className='news-content'>
                        <h2>{item.title}</h2>
                        <p>{item.shortDescription}</p>
                        
                        <button 
                            className='news-link'
                            onClick={() => handleReadMore(item)}
                        >
                            Read more
                        </button>
                    </div>
                ))}
            </div>
        </div>


        {/* Modal for full news content */}
        {showModal && selectedNews && (
            <div className="news-modal-overlay" onClick={closeModal}>
                <div className="news-modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close-btn" onClick={closeModal}>×</button>
                    <h2 className="modal-title">{selectedNews.title}</h2>

                    <div className="modal-meta">
                        {selectedNews.publishedAt && (
                            <span className="news-date">
                                {formatDate(selectedNews.publishedAt)}
                            </span>
                        )}
                        {selectedNews.AuthorName && (
                            <span className="news-author">By {selectedNews.AuthorName}</span>
                        )}
                    </div>

                    <div className="modal-body">
                        {/* Render HTML content safely */}
                        <div 
                            className="modal-full-description"
                            dangerouslySetInnerHTML={createMarkup(selectedNews.description)}
                        />
                    </div>
                    <div className="modal-footer">
                        <button className="modal-close-button" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )}


    </>
  )
}

export default NewsCard