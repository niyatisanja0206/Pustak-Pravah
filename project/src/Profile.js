import React, { useState, useEffect } from 'react';
import BookData from './BookData.json';
import Customer from './Customer.json';
const Profile = () => {
    const [books, setBooks] = useState([]);
    const [customer, setCustomer] = useState(null);
    useEffect(() => {
        setBooks(BookData);
        setCustomer(Customer);
    }, []);
    return (
        <div className="profile body">
            <div className="container">
                <h1>Profile</h1>
                {customer && customer.map((customer) => (
                    <div className="customer-details">
                            <h2>Name: {customer.FirstName} {customer.LastName}</h2>
                            <h3>Email: {customer.Email}</h3>
                            <h3>Password: {customer.Password}</h3>
                            <h4>Type: {customer.Type}</h4>
                            <h5>City: {customer.City}</h5>
                            <h5>Pincode: {customer.Pincode}</h5>
                            <h5>State: {customer.State}</h5>
                            <h5>Number of books purchased: {customer.Numberofbooks}</h5>
                    </div>
                ))}
                <br/>
                <h1>Recent Purchases</h1>
                <div className="row bcardbdy">
                    {books.slice(0, 4).map((book, index) => (
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
