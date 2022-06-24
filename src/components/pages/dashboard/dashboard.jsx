import React, { Fragment } from 'react';
import PageTitle from '@shared/pageTitle';
import { DashboardCards } from './dashboard.styled';

export default function Dashboard() {
   return (
      <Fragment>
         <PageTitle>overall statistics</PageTitle>
         <DashboardCards>ami</DashboardCards>
      </Fragment>
   );
}
