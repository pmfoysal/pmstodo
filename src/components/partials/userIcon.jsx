import avatar from '@icons/user.svg';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';
import React, { useState, useContext } from 'react';
import { StoreContext } from '@contexts/storeProvider';
import {
   UserIconContainer,
   UserIconImage,
   UserIconWindow,
   UserWindowButton,
   UserWindowImage,
   UserWindowName,
   UserWindowRole,
} from './userIcon.styled';

export default function UserIcon() {
   const [active, setActive] = useState(false);
   const { user, setUser } = useContext(StoreContext);

   function clickHandler() {
      setActive(current => !current);
   }

   function signOutHandler() {
      window.localStorage.removeItem('userToken');
      setUser({});
      toast.warning('Warning! You have signed out.');
   }

   return (
      <UserIconContainer>
         <UserIconImage src={user?.image || avatar} alt='user' onClick={clickHandler} />
         {active && (
            <UserIconWindow>
               <UserWindowImage src={user?.image || avatar} alt='user' />
               <UserWindowName>{user?.name || 'unknown'}</UserWindowName>
               <UserWindowRole>{user?.isAdmin ? 'admin' : 'user'}</UserWindowRole>
               <UserWindowButton onClick={signOutHandler}>
                  <Icon icon='fa:sign-out' />
                  signout
               </UserWindowButton>
            </UserIconWindow>
         )}
      </UserIconContainer>
   );
}
