import Todo from '@partials/todo';
import React, { Fragment } from 'react';
import PageTitle from '@shared/pageTitle';
import { TodayContent } from './today.styled';

export default function Today() {
   return (
      <Fragment>
         <PageTitle>today's todos</PageTitle>
         <TodayContent>
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
         </TodayContent>
      </Fragment>
   );
}
