import React from 'react';
import MainContainer from '@shared/mainContainer';
import { AuthErrorContainer, AuthErrorTitle } from './authError.styled';

export default function AuthError() {
   return (
      <AuthErrorContainer>
         <MainContainer>
            <AuthErrorTitle>
               <span>opps,</span> authorization failed!
            </AuthErrorTitle>
         </MainContainer>
      </AuthErrorContainer>
   );
}
