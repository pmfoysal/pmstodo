import Todo from '@partials/todo';
import useTodos from '@hooks/useTodos';
import React, { Fragment } from 'react';
import EmptyText from '@shared/emptyText';
import PageTitle from '@shared/pageTitle';
import PageLoader from '@helpers/pageLoader';
import { TodayContent } from '../today/today.styled';

export default function Upcoming() {
   const { isLoading, data: todos = [] } = useTodos('upcoming');

   return (
      <Fragment>
         <PageTitle>upcoming todos</PageTitle>
         {isLoading ? (
            <PageLoader />
         ) : (
            <TodayContent>
               {!todos?.length && <EmptyText />}
               {todos?.map(todo => (
                  <Todo key={todo?._id} data={todo} />
               ))}
            </TodayContent>
         )}
      </Fragment>
   );
}
