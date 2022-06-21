import React from 'react';
import Logo from '@partials/logo';
import Button from '@partials/button';
import UserIcon from '@partials/userIcon';
import MainContainer from './mainContainer';
import { HeaderContainer, HeaderRightSide } from './header.styled';

export default function Header() {
   return (
      <HeaderContainer>
         <MainContainer>
            <Logo />
            <HeaderRightSide>
               <Button name='new task' icon='fluent:add-24-filled' main />
               <UserIcon />
            </HeaderRightSide>
         </MainContainer>
      </HeaderContainer>
   );
}
