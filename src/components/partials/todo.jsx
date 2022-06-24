import { Icon } from '@iconify/react';
import Confirm from '@helpers/confirm';
import React, { useState } from 'react';
import editTodo from '@servers/editTodo';
import getStatus from '@utilities/getStatus';
import deleteTodo from '@servers/deleteTodo';
import getDayName from '@utilities/getDayName';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { TodoCheck, TodoContainer, TodoDate, TodoStatus } from './todo.styled';
import { TodoButton, TodoTag, TodoTags, TodoTexts, TodoTitle } from './todo.styled';

export default function Todo({ data }) {
   const navigate = useNavigate();
   const [query] = useSearchParams();
   const [popup, setPopup] = useState(false);
   const { _id, task, isDone, dateDue, tag } = data;
   const status = getStatus(dateDue, isDone);
   const view = query.get('view');

   function clickHandler() {
      if (view !== _id) {
         navigate(`?view=${_id}`);
      }
   }

   function isDoneHandler() {
      const date = new Date().toISOString();
      const dateDone = !isDone ? new Date(date).getTime() : 0;
      editTodo(_id, { isDone: !isDone, dateDone }, undefined);
   }

   function deleteHandler() {
      deleteTodo(_id, setPopup);
   }

   return (
      <TodoContainer className={view === _id}>
         <TodoButton onClick={() => setPopup(true)}>
            <Icon icon='fluent:delete-24-regular' />
         </TodoButton>
         <TodoCheck active={isDone} onClick={isDoneHandler}>
            {isDone && <Icon icon='entypo:check' />}
         </TodoCheck>
         <TodoTexts>
            <TodoTitle onClick={clickHandler}>{task}</TodoTitle>
            <TodoTags>
               <TodoStatus status={status}>{status}</TodoStatus>
               <TodoDate>{getDayName(dateDue)}</TodoDate>
               at
               <TodoTag>{tag}</TodoTag>
            </TodoTags>
         </TodoTexts>
         {popup && <Confirm setActive={setPopup} handler={deleteHandler} />}
      </TodoContainer>
   );
}
