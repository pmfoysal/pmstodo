import styled from 'styled-components';

export const SideNavContainer = styled.aside`
   padding: 2rem;
   border-radius: 1rem;
   background-color: ${({theme}) => theme.back.page};
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
   text-align: left;
   justify-content: flex-start;
`;

export const SideNavTitle = styled.h3`
   font-size: 2rem;
   color: ${({theme}) => theme.text.main.head};
   font-weight: 550;
   text-transform: capitalize;
   padding-bottom: 1rem;
   border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
`;
