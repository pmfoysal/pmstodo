import React from 'react';
import {Icon} from '@iconify/react';
import {ButtonContainer} from './button.styled';

export default function Button({name, main = false, icon, handler = () => {}}) {
   return (
      <ButtonContainer main={main} onClick={handler}>
         {icon && <Icon icon={icon} />}
         {name}
      </ButtonContainer>
   );
}
