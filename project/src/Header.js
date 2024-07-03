import {Link} from 'react-router-dom';
import './App.css';
import 'bootstrap';
export default function Header(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="">
                        <img src="Pustak2.png" width="200" height="50" alt="img file"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link active' to="/home">Home<span className='sr-only'></span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active' to="/bfb">Buy books</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Publication    
                                </a>
                                <ul className="dropdown-menu dark" aria-labelledby="navbarDropdown">
                                    <li><Link className='nav-link active' to="/detpub">See details of your publication</Link></li>
                                    <li><Link className='nav-link active' to="/updtstr">Update your store</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active' to="/about">About</Link>
                            </li>
                        </ul>
                        <form className="d-flex" style={{background:'none', border:'none', boxShadow:'none', padding:'0'}}>
                            <Link className='nav-link nav-item' to="/cart"><img src="bag-heart.svg" width="40" height="40" alt="img file"/></Link>
                            <Link className='nav-link uico' to="/profile"><img src="person-circle.svg" width="40" height="40" alt="img file"/></Link>   
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}