import Header from '@shared/header';
import SideNav from '@shared/sideNav';
import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import MainContainer from '@shared/mainContainer';
import Details from 'components/pages/details/details';
import { LayoutContainer, LayoutLeftSide, LayoutRightParts, LayoutRightSide } from './layout.styled';
import { AuthError } from '@pages';

export default function Layout() {
   return (
      <Fragment>
         <Header />
         <AuthError />
         {/* <LayoutContainer>
            <MainContainer>
               <LayoutLeftSide>
                  <SideNav />
               </LayoutLeftSide>
               <LayoutRightSide>
                  <LayoutRightParts>
                     <Outlet />
                  </LayoutRightParts>
                  <LayoutRightParts>
                     <Details />
                  </LayoutRightParts>
               </LayoutRightSide>
            </MainContainer>
         </LayoutContainer> */}
      </Fragment>
   );
}
