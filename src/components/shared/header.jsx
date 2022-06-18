import React from 'react';
import Logo from '@partials/logo';
import Button from '@partials/button';
import {HeaderContainer, HeaderRightSide} from './header.styled';
import UserIcon from '@partials/userIcon';

export default function Header() {
   return (
      <HeaderContainer>
         <Logo />
         <HeaderRightSide>
            <Button name='new task' icon='fluent:add-24-filled' main />
            <UserIcon />
         </HeaderRightSide>
      </HeaderContainer>
   );
}
