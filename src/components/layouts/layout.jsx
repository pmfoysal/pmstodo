import Header from '@shared/header';
import SideNav from '@shared/sideNav';
import MainContainer from '@shared/mainContainer';
import { Outlet, useLocation } from 'react-router-dom';
import Details from 'components/pages/details/details';
import React, { Fragment, useState, useEffect } from 'react';
import { LayoutContainer, LayoutLeftSide, LayoutRightParts, LayoutRightSide } from './layout.styled';

export default function Layout() {
   const [hide, setHide] = useState(false);
   const { pathname } = useLocation();

   const routings = ['/', '/upcoming', '/overdue', '/archived', '/personal', '/office', '/home', '/travel'];

   useEffect(() => {
      if (routings.includes(pathname)) setHide(false);
      else setHide(true);
   }, [pathname]);

   return (
      <Fragment>
         <Header />
         <LayoutContainer>
            <MainContainer>
               <LayoutLeftSide>
                  <SideNav />
               </LayoutLeftSide>
               <LayoutRightSide className={hide}>
                  <LayoutRightParts>
                     <Outlet />
                  </LayoutRightParts>
                  {!hide && (
                     <LayoutRightParts>
                        <Details />
                     </LayoutRightParts>
                  )}
               </LayoutRightSide>
            </MainContainer>
         </LayoutContainer>
      </Fragment>
   );
}
