import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import spaceship from "../assets/img-2.svg";
import { Image } from "react-bootstrap";
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
      <div className="form-container">
        <div className="form-content-left">
          <Image className="form-img" src={spaceship} alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </div>
  );
};

export default Form;
