import styled from 'styled-components';

export const DetailsContainer = styled.div``;

export const DetailsContent = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.1rem;

   .task-name {
      color: ${({ theme }) => theme.text.main.para};
      font-weight: 550;
      line-height: 1.4;
      text-transform: unset;
   }
`;

export const DetailsInfo = styled.p`
   font-weight: 700;
   line-height: 1;
   font-size: 1.4rem;
   text-transform: capitalize;
   color: ${({ theme }) => theme.text.main.para};

   span {
      color: inherit;
      font-size: inherit;
      line-height: inherit;
      font-weight: 400;
   }

   .email {
      text-transform: lowercase;
   }
`;

export const DetailsNotFound = styled.p`
   font-size: 1.6rem;
   color: ${({ theme }) => theme.text.main.para};
`;
