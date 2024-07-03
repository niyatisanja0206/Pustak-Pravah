import { Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "bootstrap";
export default function Footer()
{
    const [fdbc, setFdbc] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!fdbc){
            alert("Feel the message/feedback first")
            return;
        }
        alert("Your message is sent")
        setFdbc('')
    }
    return(
        <div className="whole">
             <footer class="footer">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className='nav-link' to="/privacy" style={{ color: "white", fontSize: "20px"}}>Privacy Policy</Link>
                    </li>
                </ul>
                <div className='icon'>
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <Link class="nav-link" href="#"><img src="instagram.svg" width="25" height="25" alt="img file"/></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#"><img src="facebook.svg" width="25" height="25" alt="img file"/></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#"><img src="twitter-x.svg" width="25" height="25" alt="img file"/></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#"><img src="pinterest.svg" width="25" height="25" alt="img file"/></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#"><img src="whatsapp.svg" width="25" height="25" alt="img file"/></Link>
                        </li><br/>
                    </ul>
                </div><br/>
            </footer>
            <div class="navbar-nav me-auto mb-2 mb-lg-0 fdbc" style={{padding: "15px"}}>
                <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="" value={fdbc} onChange={(e) => setFdbc(e.target.value)}/>
                <label for="floatingInput">Type your feedback here</label>    
            </div>
            <div class="d-grid gap-2 d-md-block col-3">
                <button type="button" class="btn btn-lg" onClick={handleSubmit}>Send</button>
            </div>
            <ul class="nav justify-content-end">
                <li class="nav-item" style={{color: "white"}}><h5>PustakPravh pvt.ltd</h5></li>
            </ul>
            </div>
        </div>
    )
}