import "./ContactFormStyles.css";

import React, { useState } from "react";
// import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmemail: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.firstName.trim()) {
      validationErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      validationErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!formData.confirmemail.trim()) {
      validationErrors.confirmemail = "Confirm email is required";
    }
    if (formData.confirmemail !== formData.email) {
      validationErrors.confirmemail = "Email and confirm email do not match";
    }
    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone number is required";
      if (!formData.message.trim()) {
        validationErrors.message = "Message is required";
      }
    } else if (formData.phone.length < 10) {
      validationErrors.phone = "Phone number is invalid";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      
      // try {
      //   await axios.post("http://localhost:3000/sendEmail", formData);
      //   alert("Email sent successfully!");
      // } catch (error) {
      //   console.error("Failed to send email:", error);
      //   alert("Failed to send email. Please try again later.");
      // }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container my-5">
          <div className="row">
            <h2 className="heading-touch text-center my-5">
              We’re looking to hear from you!
            </h2>
          </div>
          <div className="row py-4">
            <h4>Name*</h4>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-md-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
              />
              {errors.firstName && (
                <span className="red">{errors.firstName}</span>
              )}
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
              />
              {errors.lastName && (
                <span className="red">{errors.lastName}</span>
              )}
            </div>
          </div>
          <div className="row">
            <h4>Work Email*</h4>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <input name="email" type="text" onChange={handleChange} />
              {errors.email && <span className="red">{errors.email}</span>}
              <p className="fw-bold py-2">Email</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <input name="confirmemail" type="text" onChange={handleChange} />
              {errors.confirmemail && (
                <span className="red">{errors.confirmemail}</span>
              )}
              <p className="fw-bold py-2">Confirm Email</p>
            </div>
          </div>
          <div className="row">
            <h4>Phone No.*</h4>
            <div className="col-lg-12 col-md-12 col-sm-6 col-6">
              <input
                className="phone"
                name="phone"
                type="number"
                onChange={handleChange}
              />
              {errors.phone && <span className="red">{errors.phone}</span>}
              <p>x xxxx xxxxxx</p>
            </div>
          </div>
          <div className="row py-4">
            <h4>Enter Your Message</h4>
            <div className="col-12">
              <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>
          <button className="btn-style rounded">Submit</button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
