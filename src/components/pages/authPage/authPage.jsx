import React from 'react';
import Logo from '@partials/logo';
import Button from '@partials/button';
import { AuthPageContainer, AuthPageContent, AuthPageInput, AuthPageLabel } from './authPage.styled';

export default function AuthPage() {
   return (
      <AuthPageContainer>
         <AuthPageContent>
            <Logo />
            <AuthPageLabel>Give your access token :</AuthPageLabel>
            <AuthPageInput required placeholder='header.payload.signature' rows='10' spellCheck='false'></AuthPageInput>
            <Button name='verify' main />
         </AuthPageContent>
      </AuthPageContainer>
   );
}
