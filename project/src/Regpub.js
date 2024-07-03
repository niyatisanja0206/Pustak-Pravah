import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./App.css";
import "bootstrap";
export default function Regpub() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        publicationHouseName: '',
        owner: '',
        offmail: '',
        cntct: '',
        checked: false
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        if (!formData.publicationHouseName) {
            errors.publicationHouseName = 'Publication House name is required.';
            formIsValid = false;
        }

        if (!formData.owner) {
            errors.owner = "Owner's full name is required.";
            formIsValid = false;
        }

        if (!formData.offmail) {
            errors.offmail = "Email is required.";
            formIsValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.offmail)) {
            errors.offmail = "Email is invalid.";
            formIsValid = false;
        }

        if (!formData.cntct) {
            errors.cntct = "Contact number is required.";
            formIsValid = false;
        } else if (!/^\d{10}$/.test(formData.cntct)) {
            errors.cntct = "Contact number must be a 10-digit number.";
            formIsValid = false;
        }

        if (!formData.checked) {
            errors.checked = "You must agree to the terms.";
            formIsValid = false;
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            navigate('/Updtstr'); 
        }
    };

    return (
        <div className='container'>
            <div style={{ textAlign: "center" }}>
                <div className="card-image">
                    <img src="PustakPravah.png" alt="Pustak" height={500} width={500} />
                </div>
                <h1>Register Publication</h1>
            </div>
            <div>
                <form style={{ marginLeft: "5px", padding: "10px" }} onSubmit={handleSubmit}>
                    <div className="col-md-9 fld">
                        <label htmlFor="publicationHouseName" className="form-label">Publication House name (As per your license)</label>
                        <input type="text" className="form-control" name="publicationHouseName" value={formData.publicationHouseName} onChange={handleChange} placeholder="Publication House name Reg" />
                        {errors.publicationHouseName && <div className="text-danger">{errors.publicationHouseName}</div>}
                    </div>

                    <div className="col-md-9 fld">
                        <label htmlFor="owner" className="form-label">Owner's full name as per license</label>
                        <input type="text" className="form-control" name="owner" value={formData.owner} onChange={handleChange} placeholder="Owner's name" />
                        {errors.owner && <div className="text-danger">{errors.owner}</div>}
                    </div>

                    <div className="col-md-9 fld">
                        <label htmlFor="offmail" className="form-label">Official Email-id</label>
                        <input type="email" className="form-control" name="offmail" value={formData.offmail} onChange={handleChange} placeholder="abc@gmail.com" />
                        {errors.offmail && <div className="text-danger">{errors.offmail}</div>}
                    </div>

                    <div className="col-md-9 fld">
                        <label htmlFor="cntct" className="form-label">Contact no</label>
                        <input type="text" className="form-control" name="cntct" value={formData.cntct} onChange={handleChange} placeholder="0000000000" />
                        {errors.cntct && <div className="text-danger">{errors.cntct}</div>}
                    </div>

                    <div className="mb-3 form-check flds" style={{ marginTop: "10px", marginBottom: "10px"}}>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" name="checked" checked={formData.checked} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="exampleCheck1">I have filled all the details correctly, and if any detail is wrong, I am responsible for further action</label>
                        {errors.checked && <div className="text-danger">{errors.checked}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary col-md-3" style={{ marginTop: "10px", marginBottom: "10px"}}>Register Publication</button>
                </form>
            </div>
        </div>
    );
}
