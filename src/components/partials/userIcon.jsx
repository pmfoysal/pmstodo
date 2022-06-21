import { Icon } from '@iconify/react';
import avatar from '@icons/user.svg';
import React, { useState } from 'react';
// import userSignout from 'customs/auth/userSignout';
import {
   UserIconContainer,
   UserIconImage,
   UserIconWindow,
   UserWindowButton,
   UserWindowImage,
   UserWindowName,
   UserWindowRole,
} from './userIcon.styled';

export default function UserIcon({ user }) {
   const [active, setActive] = useState(false);

   function clickHandler() {
      setActive(current => !current);
   }

   return (
      <UserIconContainer>
         <UserIconImage src={user?.photoURL || avatar} alt='user' onClick={clickHandler} />
         {active && (
            <UserIconWindow>
               <UserWindowImage src={user?.photoURL || avatar} alt='user' />
               <UserWindowName>{user?.displayName || 'unknown'}</UserWindowName>
               <UserWindowRole>user</UserWindowRole>
               <UserWindowButton onClick={() => {}}>
                  <Icon icon='fa:sign-out' />
                  signout
               </UserWindowButton>
            </UserIconWindow>
         )}
      </UserIconContainer>
   );
}
