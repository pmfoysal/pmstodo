import styled from 'styled-components';

export const PageTitleContainer = styled.h1`
   font-size: 1.8rem;
   font-weight: 700;
   color: ${({theme}) => theme.text.main.title};
   line-height: 1;
   text-transform: capitalize;
   padding-bottom: 2rem;
`;
