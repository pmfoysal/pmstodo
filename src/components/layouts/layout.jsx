import Header from '@shared/header';
import SideNav from '@shared/sideNav';
import {Outlet} from 'react-router-dom';
import PageLoader from '@helpers/pageLoader';
import React, {Fragment, Suspense} from 'react';
import MainContainer from '@shared/mainContainer';
import {LayoutContainer, LayoutLeftSide, LayoutRightSide} from './layout.styled';

export default function Layout() {
   return (
      <Fragment>
         <Header />
         <LayoutContainer>
            <MainContainer>
               <LayoutLeftSide>
                  <SideNav />
               </LayoutLeftSide>
               <LayoutRightSide>
                  <Suspense fallback={<PageLoader />}>
                     <Outlet />
                  </Suspense>
               </LayoutRightSide>
            </MainContainer>
         </LayoutContainer>
      </Fragment>
   );
}
