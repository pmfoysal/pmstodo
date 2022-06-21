import React from 'react';
import Todo from '@partials/todo';
import PageContainer from '@shared/pageContainer';

export default function Today() {
   return (
      <PageContainer>
         <div>Today Page</div>
         <br />
         <Todo />
         <Todo />
         <Todo />
         <Todo />
      </PageContainer>
   );
}
