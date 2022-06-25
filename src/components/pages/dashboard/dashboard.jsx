import Todo from '@partials/todo';
import useStats from '@hooks/useStats';
import React, { Fragment } from 'react';
import getStats from '@servers/getStats';
import Details from '../details/details';
import PageTitle from '@shared/pageTitle';
import EmptyText from '@shared/emptyText';
import InfoCard from './partials/infoCard';
import useAllTodos from '@hooks/useAllTodos';
import PageLoader from '@helpers/pageLoader';
import { DashboardTodos, DashboardTodosContent } from './dashboard.styled';
import { DashboardCards, DashboardContainer, DashboardTodoArea } from './dashboard.styled';

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
