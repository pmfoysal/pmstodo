import styled from 'styled-components';

export const DashboardContainer = styled.div`
   height: 100%;
   width: 100%;
   overflow-x: hidden;
   overflow-y: auto;
`;

export const DashboardCards = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 2rem;

   &.true {
      grid-template-columns: 1fr;
   }
`;

export const DashboardTodoArea = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 2rem;
   margin-top: 4rem;
   height: 100%;
   overflow: hidden;
`;

export const DashboardTodosContent = styled.div`
   max-height: 100%;
   width: 100%;
   overflow-x: hidden;
   overflow-y: auto;
`;

export const DashboardTodos = styled.article`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`;
