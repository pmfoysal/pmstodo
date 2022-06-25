import React, { Fragment } from 'react';
import useStats from '@hooks/useStats';
import getStats from '@servers/getStats';
import PageTitle from '@shared/pageTitle';
import InfoCard from './partials/infoCard';
import { DashboardCards, DashboardContainer, DashboardTodoArea, DashboardTodos, DashboardTodosContent } from './dashboard.styled';
import Details from '../details/details';
import useAllTodos from '@hooks/useAllTodos';
import EmptyText from '@shared/emptyText';
import Todo from '@partials/todo';
import PageLoader from '@helpers/pageLoader';

export default function Dashboard() {
   const { isLoading: statsLoading, data: stats = {} } = useStats();
   const { isLoading: todosLoading, data: todos = [] } = useAllTodos();

   function renderStats() {
      const allStats = getStats(stats);
      let index = 0;
      const cards = [];
      for (const item in allStats) {
         index++;
         cards.push(<InfoCard key={`${item}-${index}`} {...allStats[item]} />);
      }
      return cards;
   }

   return (
      <DashboardContainer>
         <PageTitle>overall statistics</PageTitle>
         <DashboardCards className={statsLoading}>{statsLoading ? <PageLoader /> : renderStats()}</DashboardCards>
         <DashboardTodoArea>
            <DashboardTodosContent>
               <PageTitle>all users todos</PageTitle>
               <DashboardTodos>
                  {todosLoading ? (
                     <PageLoader />
                  ) : (
                     <Fragment>
                        {!todos?.length && <EmptyText />}
                        {todos?.map(todo => (
                           <Todo key={todo?._id} data={todo} />
                        ))}
                     </Fragment>
                  )}
               </DashboardTodos>
            </DashboardTodosContent>
            <Details />
         </DashboardTodoArea>
      </DashboardContainer>
   );
}
