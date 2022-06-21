import React from 'react';
import Todo from '@partials/todo';
import PageContainer from '@shared/pageContainer';
import PageTitle from '@shared/pageTitle';

export default function Today() {
   return (
      <PageContainer>
         <PageTitle>today's todos</PageTitle>
         <Todo />
         <Todo />
         <Todo />
         <Todo />
      </PageContainer>
   );
}
