import React from 'react';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { TodoTag, TodoTags, TodoTexts, TodoTitle } from './todo.styled';
import { TodoCheck, TodoContainer, TodoDate, TodoStatus } from './todo.styled';

export default function Todo() {
   const navigate = useNavigate();
   const [done, setDone] = useState(true);
   const status = 'completed';
   const tag = 'personal';
   const date = 'today';

   function clickHandler() {
      navigate('?view=2314943');
   }

   return (
      <TodoContainer>
         <TodoCheck active={done}>{done && <Icon icon='entypo:check' />}</TodoCheck>
         <TodoTexts>
            <TodoTitle onClick={clickHandler}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, excepturi?
            </TodoTitle>
            <TodoTags>
               <TodoStatus status={status}>{status}</TodoStatus>
               <TodoDate>{date}</TodoDate>
               at
               <TodoTag>{tag}</TodoTag>
            </TodoTags>
         </TodoTexts>
      </TodoContainer>
   );
}
