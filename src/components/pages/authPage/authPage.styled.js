import styled from 'styled-components';

export const AuthPageContainer = styled.section`
   min-height: 100vh;
   width: 100%;
   padding: 8rem 1.5rem;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${({ theme }) => theme.back.sub};
`;

export const AuthPageContent = styled.article`
   width: 45rem;
   padding: 3rem;
   border-radius: 1.5rem;
   background-color: ${({ theme }) => theme.back.page};
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
   }
`;

export const AuthPageInput = styled.textarea`
   width: 100%;
   padding: 1.25rem;
   line-height: 1.4;
   text-transform: unset;
   font-size: 1.5rem;
   color: ${({ theme }) => theme.text.main.title};
   border-radius: 0.75rem;
   border: 0.2rem solid rgba(0, 0, 0, 0.1);
   transition: 0.1s ease;
   margin-bottom: 3rem;

   &:focus {
      border-color: ${({ theme }) => theme.back.accent};
   }

   &::-webkit-scrollbar {
      width: 0;
      height: 0;
   }
`;

export const AuthPageLabel = styled.p`
   width: 100%;
   color: ${({ theme }) => theme.text.main.para};
   font-weight: 550;
   margin: 4rem 0 1rem;
`;
