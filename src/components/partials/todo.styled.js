import styled from 'styled-components';

export const TodoContainer = styled.summary`
   width: 100%;
   padding: 1rem;
   border-radius: 0.75rem;
   background-color: ${({theme}) => theme.back.sub};
   margin: 0.75rem 0;
   cursor: pointer;
`;
