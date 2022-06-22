import styled from 'styled-components';

export const PageTitleContainer = styled.h1`
   font-size: 1.8rem;
   font-weight: 700;
   color: ${({ theme }) => theme.text.main.title};
   line-height: 1;
   text-transform: capitalize;
   padding-bottom: 1.25rem;
   margin-bottom: 1.5rem;
   border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
   display: flex;
   justify-content: space-between;
   align-items: center;

   .buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1.75rem;

      button {
         z-index: 5;
         color: #1e90ff;
         display: flex;
         align-items: center;
         justify-content: center;

         svg {
            color: inherit;
            height: 1.8rem;
            width: auto;
            pointer-events: none;
         }

         &.red {
            color: #dd0000;
         }

         &:active {
            transform: scale(0.975);
         }
      }
   }
`;
