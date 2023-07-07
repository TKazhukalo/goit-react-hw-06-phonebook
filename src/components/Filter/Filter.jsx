import React from 'react';
import { nanoid } from "nanoid";
import { FormContainer, Input, Label } from "components/Form/Form.styled";
import PropTypes from 'prop-types';


export const Filter = ({ value, onChange }) => {
   
   const filterId = nanoid();
    
return (
      <FormContainer>
        <Label htmlFor={filterId}>Find contacts by name</Label>
        <Input
          id={filterId}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </FormContainer>
    );
  }

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

