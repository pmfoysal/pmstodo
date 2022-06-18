import styled from 'styled-components';

export const HeaderContainer = styled.header`
   padding: 2rem 0;
   border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);

   & > main {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
   }
`;

export const HeaderRightSide = styled.nav`
   display: flex;
   align-items: center;
   gap: 3rem;
`;
