import React from 'react';
import {TodoContainer} from './todo.styled';
import {useNavigate} from 'react-router-dom';

export default function Todo() {
   const navigate = useNavigate();

   function clickHandler() {
      navigate('?view=2314943');
   }

   return <TodoContainer onClick={clickHandler}>ami</TodoContainer>;
}
