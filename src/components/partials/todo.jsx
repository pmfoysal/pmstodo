import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { TodoButton, TodoTag, TodoTags, TodoTexts, TodoTitle } from './todo.styled';
import { TodoCheck, TodoContainer, TodoDate, TodoStatus } from './todo.styled';
import { useState } from 'react';
import Confirm from '@helpers/confirm';

export default function Todo() {
   const navigate = useNavigate();
   const [query] = useSearchParams();
   const [popup, setPopup] = useState(false);
   const status = 'completed';
   const tag = 'personal';
   const date = 'today';
   const view = query.get('view');
   const done = status === 'completed';

   function clickHandler() {
      if (view !== '2314943') {
         navigate('?view=2314943');
      }
   }

   return (
      <TodoContainer className={view === '2314943'}>
         <TodoButton onClick={() => setPopup(true)}>
            <Icon icon='fluent:delete-24-regular' />
         </TodoButton>
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
         {popup && <Confirm setActive={setPopup} />}
      </TodoContainer>
   );
}
