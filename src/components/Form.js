import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './form.css';

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        weekdays: [],
        gender: '',
        dob: '',
      });


      const [errors, setErrors] = useState({
          name: '',
          email: '',
          contact: '',
          weekdays: '',
          gender: '',
        });

        const validateName = () => {
            if (formData.name.length < 3) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                name: 'Name must be at least 3 characters long',
              }));
            } else {
              setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
            }
          };

          const validateEmail = () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
              setErrors((prevErrors) => ({ ...prevErrors, email: 'Enter a valid email address' }));
            } else {
              setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
            }
          };
        
          const validateContact = () => {
            const contactRegex = /^\d{10}$/;
            if (!contactRegex.test(formData.contact)) {
              setErrors((prevErrors) => ({ ...prevErrors, contact: 'Enter a valid 10-digit contact number' }));
            } else {
              setErrors((prevErrors) => ({ ...prevErrors, contact: '' }));
            }
          };

          const validateWeekdays = () => {
            if (formData.weekdays.length === 0) {
              setErrors((prevErrors) => ({ ...prevErrors, weekdays: 'Select at least one weekday' }));
            } else {
              setErrors((prevErrors) => ({ ...prevErrors, weekdays: '' }));
            }
          };
        
          const validateGender = () => {
            if (formData.gender === '') {
              setErrors((prevErrors) => ({ ...prevErrors, gender: 'Select gender' }));
            } else {
              setErrors((prevErrors) => ({ ...prevErrors, gender: '' }));
            }
          };

          
    

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'weekday') {
        const updatedWeekdays = checked
          ? [...formData.weekdays, value]
          : formData.weekdays.filter((day) => day !== value);
  
        setFormData((prevData) => ({ ...prevData, weekdays: updatedWeekdays }));
        return; 
      }

        if (type === 'radio' && name === 'gender') {
            setFormData((prevData) => ({ ...prevData, gender: value }));
            return;
        }

    setFormData((prevData) => ({ ...prevData, [name]: value }));

   
    switch (name) {
        case 'name':
            validateName();
            break;
        case 'email':
            validateEmail();
            break;
        case 'contact':
            validateContact();
            break;
        default:
        break;
    }
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    validateWeekdays();
    validateGender();

    const isNameValid = errors.name === '';
    const isEmailValid = errors.email === '';
    const isContactValid = errors.contact === '';
    const areWeekdaysValid = errors.weekdays.length === 0;
    const isGenderValid = errors.gender === '';


    if (!isNameValid === true && !isEmailValid === true && !isContactValid === true && !areWeekdaysValid === true && !isGenderValid === true) {
        alert('Form has validation errors. Please correct them.');
        console.log(JSON.stringify(formData))
        return false;
    }
    console.log('Form submitted:', JSON.stringify(formData));
    onSubmit(formData);

    setFormData({
        name: '',
        email: '',
        contact: '',
        weekdays: [],
        gender: '',
        dob: '',
      });
    }

  return (
    <>
  <h1>User Information</h1>
    <form onSubmit={handleSubmit}>
      <label for="name">Name:
            <input value={formData.name} onChange={handleChange} onBlur={validateName} type="text" id="name" name="name" placeholder='Enter your full name.' autocomplete="on" required/>
            <span className="error">{errors.name}</span>
        </label>

        <label for="email">Email:
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={validateEmail} placeholder='Enter your email address.' required/>
            <span className="error">{errors.email}</span>
        </label>
        
        <label for="contact">Contact:
            <input name="contact" value={formData.contact} onChange={handleChange} onBlur={validateContact} type="tel" id="contact"  pattern="[0-9]{10}" placeholder='Enter a 10-digit phone number.' required/>
            <span className="error">{errors.contact}</span>
        </label>
        
        
        <label>Weekdays:
        <div className="weekdays-container">
        <label for="monday">
            <input checked={formData.weekdays.includes('Monday')} onChange={handleChange} type="checkbox" id="monday" name="weekday" value="Monday"/> Monday
        </label>
        <label for="tuesday">
            <input checked={formData.weekdays.includes('Tuesday')} onChange={handleChange} type="checkbox" id="tuesday" name="weekday" value="Tuesday"/> Tuesday
        </label>
        <label for="wednesday">
            <input checked={formData.weekdays.includes('Wednesday')} onChange={handleChange} type="checkbox" id="wednesday" name="weekday" value="Wednesday"/> Wednesday
        </label>
        <label for="thursday">
            <input checked={formData.weekdays.includes('Thursday')} onChange={handleChange} type="checkbox" id="thursday" name="weekday" value="Thursday"/> Thursday
        </label>
        <label for="friday">
            <input checked={formData.weekdays.includes('Friday')} onChange={handleChange} type="checkbox" id="friday" name="weekday" value="Friday"/> Friday
        </label>
        </div>
        </label>
        <span className="error">{errors.weekdays}</span>
       

       
        <label>Gender:
        <div className="gender-group">
        <label for="male">
            <input type="radio" id="male" name="gender" value="Male" checked={formData.gender === 'Male'}
        onChange={handleChange}/>Male
        </label>
    
        <label for="female">
            <input type="radio" id="female" name="gender" value="Female" checked={formData.gender === 'Female'}
        onChange={handleChange}/>Female
        </label>
        </div>
        </label>
        <span className="error">{errors.gender}</span>
   
        
        <label for="dob">Date of Birth:
        <input type="date" id="dob" name="dob"  value={formData.dob} onChange={handleChange} required/>
        </label>
        
        <button type="submit">Submit</button>
    </form>
    </>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
