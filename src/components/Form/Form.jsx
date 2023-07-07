import React, { useState } from 'react';

import { nanoid } from "nanoid";
import { FormContainer, Input, Label } from "./Form.styled";
import { Button } from "components/ContactsList/ContactsList.styled";

export const Form=({onSubmit})=>{
const nameId = nanoid();
 const  numberId = nanoid();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
  
const handleChange = evt => {
    
   const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({name,number});
    reset();
};

const reset = () => {
    setName('');
    setNumber('')
};
    return (
       <FormContainer onSubmit={handleSubmit}>
                <Label htmlFor={nameId}>Name:</Label>
                <Input
                    type="text"
                    name="name"
                    id={nameId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChange}
                />
                <Label htmlFor={numberId}>Number:</Label>
                <Input
                    type="tel"
                    name="number"
                    id={numberId}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                />
                <Button type="submit">Add contact</Button>
            </FormContainer>
        );
        
}
