import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Input from '@partials/input';
import Button from '@partials/button';
import addTodo from '@servers/addTodo';
import Backdrop from '@helpers/backdrop';
import getModDate from '@utilities/getModDate';
import isValidDate from '@validations/isValidDate';
import isValidTask from '@validations/isValidTask';
import { StoreContext } from '@contexts/storeProvider';
import { AddTodoTag, AddTodoTags, AddTodoTitle } from './addTodo.styled';
import { AddTodoButtons, AddTodoContainer, AddTodoLabel } from './addTodo.styled';

export default function AddTodo({ closer }) {
   const { user } = useContext(StoreContext);
   const [tag, setTag] = useState('personal');
   const [date, setDate] = useState('');
   const [task, setTask] = useState('');

   function closeHandler() {
      if (closer) closer(false);
   }

   function getData() {
      return {
         name: user?.name,
         email: user?.email,
         tag,
         task,
         isDone: false,
         dates: {
            add: getModDate(new Date()),
            due: getModDate(date),
            done: '',
         },
      };
   }

   function submitHandler() {
      const dateOk = isValidDate(date);
      const taskOk = isValidTask(task);
      if (dateOk && taskOk) addTodo(getData(), closer);
   }

   return (
      <Backdrop>
         <AddTodoContainer>
            <AddTodoTitle>add new task</AddTodoTitle>
            <AddTodoLabel>What task do you want to do?</AddTodoLabel>
            <Input holder='Task description in detailed' handler={setTask} value={task} />
            <AddTodoLabel>When do you complete the task?</AddTodoLabel>
            <Input type='date' handler={setDate} value={date} />
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
               <Button name='submit' main handler={submitHandler} />
            </AddTodoButtons>
         </AddTodoContainer>
      </Backdrop>
   );
}
