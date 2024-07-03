import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./App.css";
import "bootstrap";
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password) {
            alert('Please fill in all the details');
            return;
        }

        if (email !== 'abcd@gmail.com' || password !== 'abc@123DE') {
            alert('Please fill correct details');
            setEmail('');
            setPassword('');
            return;
        }

        navigate('/home'); 
    };

    return (
        <div class="row bdy lgn">
            <div className='col-6'>
            <div>
            <img src="PustakPravah.png" alt="Pustak" height={700} width={700} />
            </div>
            </div>
            <div className='col-6 lgnfrm'>
            <div  style={{ alignItems: "center", marginTop: "130px", marginBottom: "60px", fontSize: "20px", width:"550px", padding: "10px", overflowX:"hidden"}}>
            <div>
                <h1>Log in</h1>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="col-md-8">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="col-md-8">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{margin: "10px"}}>Log in</button>
                </form>
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
            </div>
            </div>
        </div>

    );
}