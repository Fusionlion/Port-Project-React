import React, { useState } from "react";
import styled from "styled-components";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor="name">Name:</Label>
      <Input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <Label htmlFor="email">Email:</Label>
      <Input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Label htmlFor="message">Message:</Label>
      <TextArea
        id="message"
        name="message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
      ></TextArea>

      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};

export default ContactForm;



const FormContainer = styled.form`
  background-color: #000;
  padding: 26px;
  box-shadow: 0 0 10px rgb(57 47 47);
  border-radius: 15px;
  width: 100%;
  margin: 0 10px 20px 120px;
  font-family: "Spline Sans Mono", sans-serif;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  
`;

const Input = styled.input`
  width: 50%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #5b5b5b !important;
  border-radius: 6px;
  box-sizing: border-box;
  background-color: transparent;
  color: white;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #5b5b5b;
  border-radius: 6px;
  box-sizing: border-box;
  background-color: transparent;
  color: white;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;