import styled from 'styled-components';

export const MenuLinkContainer = styled.button`
   padding: 1.25rem 1.25rem;
   border-radius: 0.75rem;
   text-transform: capitalize;
   font-weight: 550;
   font-size: 1.5rem;
   color: ${({theme}) => theme.text.main.para};
   transition: 0.1s ease;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   gap: 0.75rem;
   overflow: hidden;
   border-left: 0.4rem solid transparent;
   border-right: 0.4rem solid transparent;

   svg {
      color: inherit;
   }

   &:hover,
   &.active {
      background-color: ${({theme}) => theme.back.sub};
      color: ${({theme}) => theme.text.main.head};
   }

   &.active {
      border-color: ${({theme}) => theme.back.accent};
   }

   &:active {
      transform: scale(0.975);
   }
`;
