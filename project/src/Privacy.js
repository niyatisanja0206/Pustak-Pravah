import './App.css';
import { useState } from 'react';

export default function Privacy() {
    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
        const isConfirmed = window.confirm("Are you sure you want to accept the terms and conditions?");
        if (isConfirmed) {
            setAccepted(true);
            // Redirect to the previous page
            window.history.back();
        }
    };

    if (accepted) {
        // Render nothing if accepted
        return null;
    }

    return (
        <div className="card-body prvcy bdy">
            <h1 className="card-title">Privacy Policy for Pustaka Pravah</h1>
            <p className="card-text">Welcome to Pustaka Pravah, accessible from [Your Website URL]. Your privacy is critically important to us, and this Privacy Policy outlines the types of information that is collected and recorded by Pustaka Pravah and how we use it.</p>
            <h3 className="card-title">Consent</h3>
            <p className="card-text">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
            <h3 className="card-title">Information We Collect</h3>
            <p className="card-text">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.<br/>
                If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.<br/>
                When you register for an Account on Pustaka Pravah, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
            <h3 className="card-title">How We Use Your Information</h3>
            <ul className="card-text">
                <li>Provide, operate, and maintain Pustaka Pravah</li>
                <li>Improve, personalize, and expand Pustaka Pravah</li>
                <li>Understand and analyze how you use Pustaka Pravah</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to Pustaka Pravah, and for marketing and promotional purposes</li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
            </ul>
            <button onClick={handleAccept} className="btn btn-primary" style={{backgroundColor: "#024c46"}}>Accept</button>
        </div>
    );
}