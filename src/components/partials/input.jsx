import React from 'react';
import { InputContainer } from './input.styled';

export default function Input(props) {
   const { name = '', type = 'text', holder = '' } = props;
   const { value = '', handler = () => {} } = props;

   function changeHandler(event) {
      if (handler) handler(event.target.value);
   }

   return (
      <InputContainer
         type={type}
         name={name}
         placeholder={holder}
         required
         value={value}
         onChange={changeHandler}
         spellCheck='false'
      />
   );
}
