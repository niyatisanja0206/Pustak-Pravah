import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from "./Header"
import About from "./About"
import Home from "./Home"
import Bfb from "./Bfb"
import Cart from "./Cart"
import Detpub from "./Detpub"
import Login from "./Login"
import Profile from "./Profile"
import Regpub from "./Regpub"
import Signup from "./Signup"
import Updtstr from "./Updtstr"
import Privacy from "./Privacy"
import Footer from './Footer';
function App() {

    const [cartItems,setCartItems] = useState([]);
    const cartItemFun = (item) => {
        let list = [...cartItems, item];
        setCartItems(list);
    }
    const deleteItem =(index)=>{
        let list = [...cartItems];
        list.splice(index,1);
        setCartItems(list);
    }
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<><Header/><Home/></>}/>
                    <Route path="/about" element={<><Header/><About/></>}/>
                    <Route path="/bfb" element={<><Header/><Bfb purchaseFun={cartItemFun}/></>}/>
                    <Route path="/cart" element={<><Header/><Cart purchaseItem={cartItems} delProduct={deleteItem}/></>}/>
                    <Route path="/detpub" element={<><Header/><Detpub/></>}/>
                    <Route path="" element={<Login/>}/>
                    <Route path="/profile" element={<><Header/><Profile/></>}/>
                    <Route path="/regpub" element={<Regpub/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/updtstr" element={<><Header/><Updtstr/></>}/>
                    <Route path="/privacy" element={<Privacy/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App;
