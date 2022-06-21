import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
   display: flex;
   align-items: center;
   gap: 0.75rem;
   text-transform: capitalize;
   font-weight: 550;
   font-size: 1.5rem;
   border-radius: 0.75rem;
   border: 0.2rem solid ${({ theme }) => theme.back.accent};
   user-select: none;
   transition: 0.1s ease;
   height: 4.2rem;
   padding: 0 2rem;
   ${({ theme, main }) => setColors(theme, main)};

   svg {
      color: inherit;
   }

   &:hover {
      opacity: 0.85;
   }

   &:active {
      transform: scale(0.975);
   }
`;

function setColors(theme, main) {
   if (main) {
      return css`
         background-color: ${theme.back.accent};
         color: ${theme.text.main.head};

         &:hover {
            background-color: transparent;
            color: ${theme.back.accent};
         }
      `;
   } else {
      return css`
         background-color: transparent;
         color: ${theme.back.accent};

         &:hover {
            background-color: ${theme.back.accent};
            color: ${theme.text.main.head};
         }
      `;
   }
}
