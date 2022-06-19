import React from 'react';
import MenuLink from '@partials/menuLink';
import {SideNavContainer, SideNavTitle} from './sideNav.styled';

export default function SideNav() {
   return (
      <SideNavContainer>
         <SideNavTitle>todos by day</SideNavTitle>
         <MenuLink name='today' link='/' icon='fluent:calendar-today-24-regular' />
         <MenuLink name='tomorrow' link='/tomorrow' icon='fluent:calendar-sync-24-regular' />
         <MenuLink name='overdue' link='/overdue' icon='fluent:calendar-cancel-24-regular' />
         <MenuLink name='all todos' link='/all' icon='fluent:calendar-star-24-regular' />
         <br />
         <SideNavTitle>todos by tag</SideNavTitle>
         <MenuLink name='personal' link='/personal' icon='fluent:notepad-person-24-regular' />
         <MenuLink name='office' link='/office' icon='fluent:building-multiple-24-regular' />
         <MenuLink name='home' link='/home' icon='fluent:building-retail-24-regular' />
         <MenuLink name='travel' link='/travel' icon='fluent:airplane-take-off-24-regular' />
      </SideNavContainer>
   );
}
