import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import booksData from "./BookData.json";


export default function Home() {
    const navigate = useNavigate();
    {/*const [bookName, setBookName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [publicationName, setPublicationName] = useState('');
    const [bookLan, setBookLan] = useState('');*/}

    const goTo = () => {
        navigate('/bfb');
    }
    
        const [index, setIndex] = useState(0);
        const booksPerPage = 6;
        const maxIndex = Math.ceil(booksData.length / booksPerPage) - 1;     
        const next = () => {
          setIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : prevIndex));
        };
        const prev = () => {
          setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        };      
        const displayedBooks = booksData.slice(index * booksPerPage, index * booksPerPage + booksPerPage);

        {/*const handleSearch = (e) => {
            e.preventDefault(); 
            if (bookName && authorName) {
                navigate('./Bfb')
            } else {
                alert('Please fill in both book name and author name.');
            }
         };*/}
      

    return (
        <div className="home-container">
        <section className="main-section">
            <div className="main-image">
                <img src="Slide7.jpg" alt="Main Image" />
            </div>
            <div className="animation-text"><h1 style={{color:'#004d40', fontSize:'67.3px', fontWeight:'bolder'}}>Welcome to PustakaPravah</h1></div>
            <div>
                {/*<form onSubmit={handleSearch}>
                    <h1>Find your next read here</h1>
                    <input type="text" placeholder="Enter book name" value={bookName} onChange={(e) => setBookName(e.target.value)} />
                    <input type="text" placeholder="Enter book language" value={bookLan} onChange={(e) => setBookLan(e.target.value)}/>
                    <input type="text" placeholder="Enter author name" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
                    <input type="text" placeholder="Enter publication name (optional)" value={publicationName} onChange={(e) => setPublicationName(e.target.value)}/>
                    <button type="submit">Search</button>
                </form>*/}
            </div>
        </section>
        <section className="search-section">
            <div>
                <h1>Discover New Books</h1>
                <div class="book-carousel-container">
                <button onClick={prev} disabled={index === 0} className='arrow'><img src='chevron-left.svg'/></button>
                <div class="book-carousel">
                    {displayedBooks.map((book) => (
                    <div key={book.id} className="book">
                        <img src={book.url} alt={book.title} style={{ width: '100px', height: '150px' }} />
                        <h4>{book.title}</h4>
                        <p>{book.author}</p>
                    </div>
                    ))}
                </div>
                <button className="arrow" onClick={next} disabled={index === maxIndex}><img src='chevron-right.svg'/></button>
                </div>
                <h1>See our more books on next page <button className='arrow' onClick={goTo}><img src='box-arrow-in-right.svg'/></button></h1>
            </div>
        </section>
        </div>
    );
}
