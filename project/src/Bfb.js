import "./App.css";
import "bootstrap";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Bfb(props) {
  const [books, setBooks] = useState([]);
  const [typeFilter, setTypeFilter] = useState('');
  const [publicationFilter, setPublicationFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, [typeFilter, publicationFilter, languageFilter]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/books', {
        params: {
          type: typeFilter || undefined,
          pub: publicationFilter || undefined,
          language: languageFilter || undefined
        }
      });
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const goTo = () =>{
    alert("Your order will be delivered to your home soon as per the registered address");
  };

  const addToCart = (curProduct) => {
    const isAlreadyInList = readingList.some((book) => book.title === curProduct.title);
    if (isAlreadyInList) {
      alert(`${curProduct.title} is already in your reading list.`);
    } else {
      alert(`${curProduct.title} has been added to your reading list.`);
      setReadingList([...readingList, curProduct]);
      props.purchaseFun(curProduct); 
    }
  };

  return (
    <div className="bfb body">
      <div className="bfilter row">
        <div className="col-3 btitle"><h2 className="bttl">Filters</h2></div>
        <div className="filter-group col-3">
          <label htmlFor="filterType" className="bfrm-label">Filter by Type</label>
          <select id="filterType" onChange={(e) => setTypeFilter(e.target.value)} className="bfrm-select form-select" aria-label="Default select example">
            <option value="">All Types</option>
            <option value="Novel">Novel</option>
            <option value="Mythology">Mythology</option>
            <option value="Knowledge">Knowledge</option>
            <option value="Poetry">Poetry</option>
          </select>
        </div>
        <div className="filter-group col-3">
          <label htmlFor="filterPublication" className="bfrm-label">Filter by Publication</label>
          <select id="filterPublication" onChange={(e) => setPublicationFilter(e.target.value)} className="bfrm-select form-select" aria-label="Default select example">
            <option value="">All Publications</option>
            <option value="Navbharat Publication">Navbharat Publication</option>
            <option value="Global Publication">Global Publication</option>
            <option value="Seth Publication">Seth Publication</option>
          </select>
        </div>
        <div className="filter-group col-3">
          <label htmlFor="filterLanguage" className="bfrm-label">Filter by Language</label>
          <select id="filterLanguage" onChange={(e) => setLanguageFilter(e.target.value)} className="bfrm-select form-select" aria-label="Default select example">
            <option value="">All Languages</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Gujarati">Gujarati</option>
          </select>
        </div>
      </div>
      <div className="row bcontainer">
        <h1>Buy Books</h1>  
        <div className="row bcardbdy">
          {books.map((book, index) => (
            <div key={index} className="col-md-3 col-lg-3 mb-4">
              <div className="card h-100 bcard">
                <img src={book.url} className="card-img-top" alt={book.title} />
                <div className="card-body">
                  <h4 className="card-title">{book.title}</h4>
                  <h5 className="card-title">{book.author}</h5>
                  <p className="card-text">Price: Rs.{book.price}/-</p>
                  <button className="bfbbutton" onClick={goTo}>Buy Now</button>
                  <button className="bfbbutton" onClick={() => addToCart(book)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
