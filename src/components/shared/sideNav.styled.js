import styled from 'styled-components';

export const SideNavContainer = styled.aside`
   padding: 2.5rem;
   border-radius: 1.5rem;
   background-color: ${({ theme }) => theme.back.page};
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
   text-align: left;
   justify-content: flex-start;
`;

export const SideNavTitle = styled.h3`
   font-size: 1.8rem;
   color: ${({ theme }) => theme.text.main.head};
   font-weight: 700;
   margin-bottom: 0.5rem;
   text-transform: capitalize;
   padding-bottom: 0.75rem;
   border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
   user-select: none;
`;
