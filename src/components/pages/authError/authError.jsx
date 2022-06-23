import React from 'react';
import Logo from '@partials/logo';
import MainContainer from '@shared/mainContainer';
import { AuthErrorContainer, AuthErrorTitle } from './authError.styled';

export default function AuthError() {
   return (
      <AuthErrorContainer>
         <MainContainer>
            <Logo />
            <AuthErrorTitle>
               <span>opps,</span> authorization failed!
            </AuthErrorTitle>
         </MainContainer>
      </AuthErrorContainer>
   );
}
