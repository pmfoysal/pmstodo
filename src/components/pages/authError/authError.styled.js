import styled from 'styled-components';

export const AuthErrorContainer = styled.section`
   padding: 8rem 1.5rem;
   height: 100vh;

   & > * {
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 5rem;
      align-items: center;
      justify-content: center;
      border-radius: 1.5rem;
      background-color: ${({ theme }) => theme.back.page};
   }
`;

export const AuthErrorTitle = styled.h1`
   font-size: 2.5rem;
   font-weight: 550;
   text-align: center;
   line-height: 1;
   color: ${({ theme }) => theme.text.main.para};
   display: flex;
   gap: 2rem;
   flex-direction: column;

   span {
      font-size: 3.5rem;
      line-height: inherit;
      font-weight: inherit;
      text-transform: inherit;
      color: ${({ theme }) => theme.back.accent};
   }
`;
