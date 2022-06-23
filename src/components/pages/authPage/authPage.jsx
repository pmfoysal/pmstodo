import React from 'react';
import Logo from '@partials/logo';
import Button from '@partials/button';
import getUser from '@servers/getUser';
import { StoreContext } from '@contexts/storeProvider';
import { useState, useContext, useEffect } from 'react';
import { AuthPageContainer, AuthPageContent, AuthPageInput, AuthPageLabel } from './authPage.styled';

export default function AuthPage() {
   const [token, setToken] = useState('');
   const [disable, setDisable] = useState(true);
   const { setUser } = useContext(StoreContext);

   async function saveToken() {
      window.localStorage.setItem('userToken', token);
   }

   async function clickHandler() {
      setDisable(true);
      await saveToken();
      getUser(setUser, setDisable);
   }

   function changeHandler(event) {
      const value = event?.target?.value;
      if (value?.length < 500) {
         setToken(value);
      }
   }

   useEffect(() => {
      const array = token?.split('.');
      if (array.length === 3) {
         const newArray = array.filter(Boolean);
         if (newArray.length === 3) setDisable(false);
         else setDisable(true);
      } else setDisable(true);
   }, [token]);

   return (
      <AuthPageContainer>
         <AuthPageContent>
            <Logo />
            <AuthPageLabel>Give your access token :</AuthPageLabel>
            <AuthPageInput
               required
               placeholder='header.payload.signature'
               rows='10'
               spellCheck='false'
               value={token}
               onChange={changeHandler}
            ></AuthPageInput>
            <Button name='verify' main disabled={disable} handler={clickHandler} />
         </AuthPageContent>
      </AuthPageContainer>
   );
}
