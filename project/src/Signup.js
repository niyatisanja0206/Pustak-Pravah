import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./App.css";
import "bootstrap";
import axios from 'axios';
export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType: '',
        publicationHouseName: '',
        publicationProof: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        bookTypes: '',
        customerBookTypes: '',
        customerState: '',
        customerCity: '',
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let tempErrors = {};
        let formIsValid = true;

        if (!formData.firstName.match(/^[a-zA-Z]*$/)) {
            formIsValid = false;
            tempErrors["firstName"] = "Only letters are allowed.";
        }

        if (!formData.lastName.match(/^[a-zA-Z]*$/)) {
            formIsValid = false;
            tempErrors["lastName"] = "Only letters are allowed.";
        }

        if (!formData.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formIsValid = false;
            tempErrors["email"] = "Email is not valid.";
        }

        if (formData.password !== formData.confirmPassword) {
            formIsValid = false;
            tempErrors["confirmPassword"] = "Passwords do not match.";
        }

        if (!formData.userType) {
            formIsValid = false;
            tempErrors["userType"] = "User Type is required.";
        }

        if (formData.userType === "Publisher") {
            if (!formData.publicationHouseName) {
                formIsValid = false;
                tempErrors["publicationHouseName"] = "Publication House name is required.";
            }
        } else if (formData.userType === "Customer") {
            if (!formData.customerBookTypes) {
                formIsValid = false;
                tempErrors["customerBookTypes"] = "Preferred Book Types is required.";
            }
        }

        setErrors(tempErrors);
        return formIsValid;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) {
            alert("Please correct the errors in the form.");
            return;
        }
        console.log(formData);
        try {
            const response = await axios.get('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                // User sign-up successful, redirect to appropriate page
                const responseData = await response.json();
                if (formData.userType === 'Customer') {
                    navigate('/home');
                } else if (formData.userType === 'Publisher') {
                    navigate('/Regpub');
                }
            } else {
                // Handle sign-up failure
                const errorMessage = await response.text();
                alert(`Sign-up failed: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error signing up:', error);
            alert('An unexpected error occurred. Please try again later.');
        }
    };
    
    return (
        <div className='bdy container'>
            <div style={{ textAlign: "center", marginBottom:"10px"}}>
                <div className="card-image">
                    <img src="PustakPravah.png" alt="Pustak" height={500} width={500} />
                </div>
                <h1>Sign Up Here</h1>
            </div>
            <div>
                <form className="row g-3 signup-form" style={{marginLeft: "5px"}} onSubmit={handleSubmit}>
                    <div className="row g-3 fld">
                        <div className="col">
                            <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" aria-label="First name" />
                            {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" aria-label="Last name" />
                            {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
                        </div>
                    </div>
                    <div className="row g-3 fld">
                    <div className="col">
                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                    </div>
                    <div className="col">
                        <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                    </div>
                    </div>
                    <div className="row g-3 fld">
                    <div className="col">
                        <label>I am a: &nbsp;</label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="userType" value="Publisher" onChange={handleChange} />
                            <label className="form-check-label">Publisher</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="userType" value="Customer" onChange={handleChange} />
                            <label className="form-check-label">Customer</label>
                        </div>  
                    </div>
                    <div className="col">
                        <input type="password" className="form-control" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
                        {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
                    </div>
                    </div>
                    {formData.userType === 'Publisher' && (
                        <>
                            <div className="col-md-9">
                                <label for="inputAddress" class="form-label">Publication House name</label>
                                <input type="text" className="form-control" name="publicationHouseName" value={formData.pubname} onChange={handleChange} placeholder="Publication House name" />
                                {errors.publicationHouseName && <div style={{ color: 'red' }}>{errors.publicationHouseName}</div>}
                            </div>
                            <div className="col-md-9">
                                <label for="formFile" class="form-label">Give a validation proof of your publication house</label>
                                <input class="form-control" type="file" id="formFile" placeholder="Validation proof of your publication house" />
                                {errors.publicationProof && <div style={{ color: 'red' }}>{errors.publicationProof}</div>}
                            </div>
                            <div className="col-md-9">
                                <label for="inputAddress" class="form-label">Address</label>
                                <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
                                {errors.address && <div style={{ color: 'red' }}>{errors.address}</div>}
                            </div>
                            <div className="col-md-9">
                                <label for="inputCity" class="form-label">City</label>
                                <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
                                {errors.city && <div style={{ color: 'red' }}>{errors.city}</div>}
                            </div>
                            <div className="col-md-9">
                            <label for="inputState" class="form-label">State</label>
                                <input type="text" className="form-control" name="state" value={formData.state} onChange={handleChange} placeholder="State" />
                                {errors.state && <div style={{ color: 'red' }}>{errors.state}</div>}
                            </div>
                            <div className="col-md-9">
                                <label for="inputpincode" class="form-label">Pincode</label>
                                <input type="text" className="form-control" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" />
                                {errors.pincode && <div style={{ color: 'red' }}>{errors.pincode}</div>}
                            </div>
                            <div className="col-md-9">
                                <label for="bookType" class="form-label">Select the type of book you usually sell</label>
                                <select className="form-select" name="bookTypes" value={formData.typeofbookwanttosell} onChange={handleChange}>
                                    <option value="">Select Book Types</option>
                                    <option value="Educational">Educational</option>
                                    <option value="Mythological">Mythological</option>
                                    <option value="Novel">Novel</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.typeofbookwanttosell && <div style={{ color: 'red' }}>{errors.typeofbookwanttosell}</div>}
                            </div>
                            <div className="mb-3 form-check checkbox-container">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">I have fill all the details correct and if any detail is wrong I am responsible for further taken action</label>
                                <br/>
                                <label className="form-check-label" htmlFor="exampleCheck1">You need to enter few more details about your publication for that please move to register publication page</label>
                            </div>
                        </>
                    )}
                    {formData.userType === 'Customer' && (
                        <>
                            <div className="col-md-9">
                            <label for="favBook" class="form-label">Select the type book you like to read</label>
                                <select className="form-select" name="customerBookTypes" value={formData.typeofbookwanttoread} onChange={handleChange}>
                                    <option value="">Select Book Types</option>
                                    <option value="Educational">Educational</option>
                                    <option value="Mythological">Mythological</option>
                                    <option value="Novel">Novel</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.typeofbookwanttoread && <div style={{ color: 'red' }}>{errors.typeofbookwanttoread}</div>}
                            </div>
                            <div className="col-md-9">
                                <label for="userState" class="form-label">Select your state</label>
                                <input type="text" className="form-control" name="customerState" value={formData.State} onChange={handleChange} placeholder="State" />
                                {errors.State && <div style={{ color: 'red' }}>{errors.State}</div>}
                            </div>
                            <div className="col-md-9">
                                <label for="userCity" class="form-label">Select your city</label>
                                <input type="text" className="form-control" name="customerCity" value={formData.customerCity} onChange={handleChange} placeholder="City" />
                                {errors.City && <div style={{ color: 'red' }}>{errors.City}</div>}
                            </div>
                            <div className="mb-3 form-check checkbox-container">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">I have fill all the details correct and if any detail is wrong I am responsible for further taken action</label>
                            </div>
                        </>
                    )}
                    <br/><button type="submit" className="btn btn-primary col-md-3">Sign Up</button>
                </form>
            </div>
        </div>
    );
}