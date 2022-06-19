import styled from 'styled-components';

export const HomeContainer = styled.section`
   padding: 6rem 0;

   & > * {
      display: grid;
      grid-template-columns: 25rem 1fr;
      gap: 4rem;
   }
`;

export const HomeContent = styled.article`
   background-color: ${({theme}) => theme.back.page};
   border-radius: 1.5rem;
`;
