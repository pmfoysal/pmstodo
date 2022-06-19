import React from 'react';
import SideNav from '@shared/sideNav';
import MainContainer from '@shared/mainContainer';
import {HomeContainer, HomeContent} from './home.styled';

export default function Home() {
   return (
      <HomeContainer>
         <MainContainer>
            <SideNav />
            <HomeContent>
               <h1>page content goes here</h1>
            </HomeContent>
         </MainContainer>
      </HomeContainer>
   );
}
