import React from 'react';
import Backdrop from '@helpers/backdrop';
import { AddTodoButtons, AddTodoContainer, AddTodoLabel, AddTodoTag, AddTodoTags, AddTodoTitle } from './addTodo.styled';
import Button from '@partials/button';
import { useState } from 'react';
import Input from '@partials/input';

export default function AddTodo({ closer }) {
   const [tag, setTag] = useState('personal');
   const [date, setDate] = useState('');

   function closeHandler() {
      if (closer) closer(false);
   }

   console.log(date);

   return (
      <Backdrop>
         <AddTodoContainer>
            <AddTodoTitle>add new task</AddTodoTitle>
            <AddTodoLabel>What task do you want to do?</AddTodoLabel>
            <Input holder='Task description in detailed' />
            <AddTodoLabel>When do you complete the task?</AddTodoLabel>
            <Input type='date' handler={setDate} />
            <AddTodoLabel>What is your task category?</AddTodoLabel>
            <AddTodoTags>
               <AddTodoTag onClick={() => setTag('personal')} className={tag === 'personal'}>
                  personal
               </AddTodoTag>
               <AddTodoTag onClick={() => setTag('office')} className={tag === 'office'}>
                  office
               </AddTodoTag>
               <AddTodoTag onClick={() => setTag('home')} className={tag === 'home'}>
                  home
               </AddTodoTag>
               <AddTodoTag onClick={() => setTag('travel')} className={tag === 'travel'}>
                  travel
               </AddTodoTag>
            </AddTodoTags>
            <AddTodoButtons>
               <Button name='cancel' handler={closeHandler} />
               <Button name='submit' main />
            </AddTodoButtons>
         </AddTodoContainer>
      </Backdrop>
   );
}
