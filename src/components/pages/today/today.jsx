import Todo from '@partials/todo';
import useTodos from '@hooks/useTodos';
import React, { Fragment } from 'react';
import PageTitle from '@shared/pageTitle';
import { TodayContent } from './today.styled';

export default function Today() {
   const { isLoading, data: todos } = useTodos('today');
   return (
      <Fragment>
         <PageTitle>today's todos</PageTitle>
         <TodayContent>
            {todos?.map(todo => (
               <Todo key={todo?._id} data={todo} />
            ))}
         </TodayContent>
      </Fragment>
   );
}
