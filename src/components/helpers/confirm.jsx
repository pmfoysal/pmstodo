import React from 'react';
import Backdrop from './backdrop';
import Button from '@partials/button';
import { Icon } from '@iconify/react';
import { ConfirmButtons, ConfirmContainer, ConfirmPara, ConfirmTitle } from './confirm.styled';

export default function Confirm({ setActive, handler }) {
   function cancelHandler() {
      if (setActive) setActive(false);
   }

   function mainHandler() {
      if (setActive) setActive(false);
      if (handler) handler();
   }

   return (
      <Backdrop>
         <ConfirmContainer>
            <ConfirmTitle>
               confirmation!
               <Icon onClick={cancelHandler} icon='ion:close-circle-outline' />
            </ConfirmTitle>
            <ConfirmPara>
               Are you sure you want to delete it? Once deleted, this item can't be possible to bring back again!
            </ConfirmPara>
            <ConfirmButtons>
               <Button name='cancel' handler={cancelHandler} />
               <Button name='delete' handler={mainHandler} main />
            </ConfirmButtons>
         </ConfirmContainer>
      </Backdrop>
   );
}
