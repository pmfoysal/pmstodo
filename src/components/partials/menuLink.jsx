import React from 'react';
import {Icon} from '@iconify/react';
import {MenuLinkContainer} from './menuLink.styled';
import {useLocation, useNavigate} from 'react-router-dom';

export default function MenuLink({name, link = '', icon = ''}) {
   const navigate = useNavigate();
   const {pathname} = useLocation();

   function clickHandler() {
      if (link) {
         if (link !== pathname) navigate(link);
      }
   }

   function setClassName() {
      if (link === pathname) return 'active';
      return '';
   }

   return (
      <MenuLinkContainer onClick={clickHandler} className={setClassName()}>
         {icon && <Icon icon={icon} />}
         {name}
      </MenuLinkContainer>
   );
}
