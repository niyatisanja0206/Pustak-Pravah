import "./App.css";
import "bootstrap";
import { useEffect, useState } from "react";
export default function Cart(props){

    const books= props.purchaseItem;
    const [amount, setAmount] = useState(0);
    const del = (i) =>{
        props.delProduct(i);
    }
    const goTo = (e) =>{
       e.preventDefault();
       alert("Your order is placed");
       props.delProduct(e)
    }
    return(
      <div className="row bcontainer">
          <h1>Buy Books</h1>  
          <div className="row bcardbdy">
            {books.map((book,index) => (
              <div key={index} className="col-md-3 col-lg-3 mb-4">
                <div className="card h-100 bcard">
                  <img src={book.url} className="card-img-top" alt={book.title} />
                  <div className="card-body">
                    <h4 className="card-title">{book.title}</h4>
                    <h5 className="card-title">{book.author}</h5>
                    <p className="card-text">Price: Rs.{book.price}/-</p>
                    <p className="card-text">{book.description}</p>
                    <button className="bfbbutton" onClick={goTo}>Buy Now</button>
                    <button className="bfbbutton" onClick={()=>del(index)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    )
}