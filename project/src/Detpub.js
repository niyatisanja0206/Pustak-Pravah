import React, { useState, useEffect } from 'react';
import BookData from './BookData.json';
import Customer from './Publication.json';

const Profile = () => {
    const [books, setBooks] = useState([]);
    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        const indexes = [];
        const NBBooks = BookData.filter(book => book.pub === "Navbharat Publication");
        setBooks(NBBooks);
        setCustomer(Customer);
    }, []);

    return (
        <div className="profile body">
            <div className="container">
                <h1>Details of Publication</h1>
                {customer && customer.map((customer, index) => (
                    <div key={index} className="customer-details">
                        <div key={index} className="customer-details">
                            <h2>Publication House Name: {customer.PublicationName}</h2>
                            <h3>Official Email: {customer.OfficialEmailAddress}</h3>
                            <h3>Owner's name: {customer.OwnersName}</h3>
                            <h3>Contact No: {customer.ContactNo}</h3>
                            <h5>Address: {customer.Address}</h5>
                            <h5>Pincode: {customer.Pincode}</h5>
                            <h5>City: {customer.City}</h5>
                            <h5>State: {customer.State}</h5>
                            <h5>Country: {customer.Country}</h5>
                            <h5>Number of books Uploaded: {customer.Numberofbooks}</h5>
                        </div>
                    </div>
                ))}
                <br/>
                <h1>Books Uploaded for sell</h1>
                <div className="row bcardbdy">
                    {books.map((book, index) => (
                        <div key={index} className="col-md-3 col-lg-3 mb-4">
                            <div className="card h-100 bcard">
                                <img src={book.url} className="card-img-top" alt={book.title} />
                                <div className="card-body">
                                    <h4 className="card-title">{book.title}</h4>
                                    <h5 className="card-title">{book.author}</h5>
                                    <p className="card-text">Price: Rs.{book.price}/-</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
