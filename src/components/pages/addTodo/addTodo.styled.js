import styled from 'styled-components';

export const AddTodoContainer = styled.article`
   padding: 3rem;
   border-radius: 1.5rem;
   background-color: ${({ theme }) => theme.back.page};
   width: 58rem;
`;

export const AddTodoTitle = styled.h1`
   text-align: center;
   font-weight: 700;
   color: ${({ theme }) => theme.text.main.head};
   text-transform: capitalize;
   font-size: 2rem;
   line-height: 1;
   margin-bottom: 1.5rem;
`;

export const AddTodoLabel = styled.p`
   width: 100%;
   display: block;
   font-weight: 550;
   color: ${({ theme }) => theme.text.main.title};
   padding-top: 2.5rem;
   padding-bottom: 1.25rem;
`;

export const AddTodoTags = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   border: 0.1rem solid ${({ theme }) => theme.back.accent};
   border-radius: 0.75rem;
   overflow: hidden;
`;

export const AddTodoTag = styled.p`
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 4rem;
   width: 100%;
   text-transform: capitalize;
   color: ${({ theme }) => theme.text.main.head};
   border-right: 0.1rem solid ${({ theme }) => theme.back.accent};
   cursor: pointer;

   &:last-child {
      border-right: unset;
   }

   &.true {
      color: ${({ theme }) => theme.text.main.head};
      background-color: ${({ theme }) => theme.back.accent};
   }
`;

export const AddTodoButtons = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   align-items: center;
   gap: 2rem;
   margin-top: 5rem;

   button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 4rem;
   }
`;
