import React from 'react';
import useStats from '@hooks/useStats';
import getStats from '@servers/getStats';
import PageTitle from '@shared/pageTitle';
import InfoCard from './partials/infoCard';
import { DashboardCards, DashboardContainer } from './dashboard.styled';

export default function Dashboard() {
   const { isLoading, data: stats = {} } = useStats();

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
         <DashboardCards>{renderStats()};</DashboardCards>
      </DashboardContainer>
   );
}
