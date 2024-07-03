import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./App.css";
import "bootstrap";

export default function Updtstr() {
  const navigate = useNavigate();

  const initialFormData = {
    bookName: '',
    authorName: '',
    quantity: 0,
    description: '',
    frontCover: '',
    backCover: '',
    coverType: '',
    price: 0,
    errors: {}
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'image' || name === 'frontCover' || name === 'backCover' ? files[0] : value
    });
  };
  const resetForm = () => {
    setFormData(initialFormData);
  };

  function validateForm() {
    const errors = {};
    let isValid = true;

    if (!formData.bookName) {
      errors.bookName = 'Book name is required';
      isValid = false;
    }

    if (!formData.authorName) {
      errors.authorName = 'Author name is required';
      isValid = false;
    }

    if (formData.quantity <= 0) {
      errors.quantity = 'Quantity must be greater than 0';
      isValid = false;
    }

    if (!formData.description) {
      errors.description = 'Description is required';
      isValid = false;
    }

    if (!formData.frontCover || !formData.frontCover.name.endsWith('.png')) {
      errors.frontCover = 'Please upload a .png front cover image';
      isValid = false;
    }

    if (!formData.backCover || !formData.backCover.name.endsWith('.png')) {
      errors.backCover = 'Please upload a .png back cover image';
      isValid = false;
    }

    if (formData.price <= 0) {
      errors.price = 'Price must be greater than 0';
      isValid = false;
    }

    setFormData({ ...formData, errors });
    return isValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      if (window.confirm("Do you want to enter details of another book?")) {
        const form = e.target.closest('form');
        if (form) {
          form.reset(); 
        }
      } else {
        navigate('/home'); 
      }
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };
 
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
      <div style={{ textAlign: "center" }}>
                <div className="card-image">
                    <img src="PustakPravah.png" alt="Pustak" height={500} width={500} />
                </div>
                <h1>Enter book details here</h1>
            </div>
        <div className="mb-3">
          <label className="form-label">Book Name</label>
          <input type="text" className="form-control" name="bookName" onChange={handleChange} />
          {formData.errors.bookName && <div className="text-danger">{formData.errors.bookName}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Author's Name</label>
          <input type="text" className="form-control" name="authorName" onChange={handleChange} />
          {formData.errors.authorName && <div className="text-danger">{formData.errors.authorName}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input type="number" className="form-control" name="quantity" onChange={handleChange} />
          {formData.errors.quantity && <div className="text-danger">{formData.errors.quantity}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" onChange={handleChange} />
          {formData.errors.description && <div className="text-danger">{formData.errors.description}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Front Cover Image</label>
          <input type="file" className="form-control" name="frontCover" onChange={handleChange} accept=".png" />
          {formData.errors.frontCover && <div className="text-danger">{formData.errors.frontCover}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Back Cover Image</label>
          <input type="file" className="form-control" name="backCover" onChange={handleChange} accept=".png" />
          {formData.errors.backCover && <div className="text-danger">{formData.errors.backCover}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Book written in language</label>
          <select className="form-select" name="Language" onChange={handleChange}>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="gujarati">Gujarati</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Cover Type</label>
          <select className="form-select" name="coverType" onChange={handleChange}>
            <option value="hard">Hard</option>
            <option value="soft">Soft</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="number" className="form-control" name="price" onChange={handleChange} />
          {formData.errors.price && <div className="text-danger">{formData.errors.price}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}