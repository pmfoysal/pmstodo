import React from 'react';
import { LogoContainer } from './logo.styled';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Logo() {
   const navigate = useNavigate();
   const { pathname } = useLocation();

   function clickHandler() {
      if (pathname !== '/') navigate('/');
   }

   return (
      <LogoContainer onClick={clickHandler}>
         Todo<span>app</span>
      </LogoContainer>
   );
}
