import styled from 'styled-components';

export const SiteLoaderContainer = styled.section`
   height: 100vh;
   width: 100%;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   gap: 2rem;
   align-items: center;
   justify-content: center;
   z-index: 100;
   background-color: ${({ theme }) => theme.back.page};
`;
