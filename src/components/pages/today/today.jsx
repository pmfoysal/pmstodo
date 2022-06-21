import Todo from '@partials/todo';
import React, { Fragment } from 'react';
import PageTitle from '@shared/pageTitle';

export default function Today() {
   return (
      <Fragment>
         <PageTitle>today's todos</PageTitle>
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
      </Fragment>
   );
}
