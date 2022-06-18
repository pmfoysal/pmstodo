import styled from 'styled-components';

export const MainContainerTag = styled.main`
   max-width: 120rem;
   margin: 0 auto;

   @media screen and (max-width: 1280px) {
      max-width: calc(100% - 7.5rem);
   }

   @media screen and (max-width: 700px) {
      max-width: calc(100% - 5rem);
   }

   @media screen and (max-width: 500px) {
      max-width: calc(100% - 3rem);
   }

   @media screen and (max-width: 400px) {
      max-width: calc(100% - 2rem);
   }

   @media screen and (max-width: 300px) {
      max-width: calc(100% - 1.5rem);
   }
`;
