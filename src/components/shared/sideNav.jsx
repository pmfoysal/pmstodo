import React from 'react';
import MenuLink from '@partials/menuLink';
import {SideNavContainer, SideNavTitle} from './sideNav.styled';

export default function SideNav() {
   return (
      <SideNavContainer>
         <SideNavTitle>todos by day</SideNavTitle>
         <MenuLink name='today' link='/' />
         <MenuLink name='tomorrow' link='/tomorrow' />
         <MenuLink name='overdue' link='/overdue' />
         <SideNavTitle>todos by tag</SideNavTitle>
         <MenuLink name='personal' link='/personal' />
         <MenuLink name='office' link='/office' />
         <MenuLink name='home' link='/home' />
         <MenuLink name='travel' link='/travel' />
      </SideNavContainer>
   );
}
