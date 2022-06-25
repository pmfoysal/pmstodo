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
`;

export const DashboardTodoArea = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 2rem;
   position: sticky;
   top: 0;
   left: 0;
`;
