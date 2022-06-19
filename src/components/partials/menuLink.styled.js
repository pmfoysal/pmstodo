import styled from 'styled-components';

export const MenuLinkContainer = styled.button`
   padding: 0.5rem 1rem;
   border-radius: 0.75rem;
   text-transform: capitalize;
   font-weight: 550;
   font-size: 1.5rem;
   color: ${({theme}) => theme.text.main.head};
   transition: 0.1s ease;

   &:hover,
   &.active {
      background-color: ${({theme}) => theme.back.page};
   }

   &:active {
      transform: scale(0.975);
   }
`;
