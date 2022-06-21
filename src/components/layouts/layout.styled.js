import styled from 'styled-components';

export const LayoutContainer = styled.section`
   padding: 6rem 0;
   height: calc(100vh - 8.9rem);

   & > * {
      display: grid;
      grid-template-columns: 27rem 1fr;
      gap: 4rem;
      height: 100%;
      align-items: flex-start;
   }
`;

export const LayoutLeftSide = styled.aside``;

export const LayoutRightSide = styled.article`
   background-color: ${({theme}) => theme.back.page};
   border-radius: 1.5rem;
   height: 100%;
   overflow-x: hidden;
   overflow-y: auto;
   display: grid;
   grid-template-columns: 4fr 3fr;
`;

export const LayoutRightParts = styled.aside`
   height: 100%;
   width: 100%;
   overflow-x: hidden;
   overflow-y: auto;
   flex-grow: 1;
`;
