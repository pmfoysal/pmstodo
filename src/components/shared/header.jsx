import React from 'react';
import { useState } from 'react';
import Logo from '@partials/logo';
import Button from '@partials/button';
import UserIcon from '@partials/userIcon';
import MainContainer from './mainContainer';
import AddTodo from 'components/pages/addTodo/addTodo';
import { HeaderContainer, HeaderRightSide } from './header.styled';

export default function Header() {
   const [popup, setPopup] = useState(true);

   function clickHandler() {
      setPopup(true);
   }

   return (
      <HeaderContainer>
         <MainContainer>
            <Logo />
            <HeaderRightSide>
               <Button name='new task' icon='fluent:add-24-filled' main handler={clickHandler} />
               <UserIcon />
            </HeaderRightSide>
         </MainContainer>
         {popup && <AddTodo closer={setPopup} />}
      </HeaderContainer>
   );
}
