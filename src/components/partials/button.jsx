import React from 'react';
import { Icon } from '@iconify/react';
import { ButtonContainer } from './button.styled';

export default function Button({ name, main = false, icon = '', handler = () => {}, ...rest }) {
   return (
      <ButtonContainer main={main} onClick={handler} {...rest}>
         {icon && <Icon icon={icon} />}
         {name}
      </ButtonContainer>
   );
}
