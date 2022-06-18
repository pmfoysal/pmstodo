import styled from 'styled-components';

export const LogoContainer = styled.h1`
   font-size: 4.5rem;
   line-height: 1;
   user-select: none;
   display: inline-block;
   cursor: pointer;
   transition: 0.1s ease;
   color: ${({theme}) => theme.text.main.title};

   span {
      font-size: inherit;
      line-height: inherit;
      font-weight: inherit;
      text-transform: lowercase;
      color: ${({theme}) => theme.back.accent};
      transition: inherit;
   }

   &:hover {
      opacity: 0.85;
   }

   &:active {
      transform: scale(0.95);
   }
`;
