import React from 'react';
import './Form.css';
import success from '../assets/img-3.svg';
import {Image} from 'react-bootstrap';
const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <Image className='form-img-2' src={success} alt='success-image' />
    </div>
  );
};

export default FormSuccess;
