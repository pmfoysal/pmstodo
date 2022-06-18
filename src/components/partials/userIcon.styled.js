import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const UserIconContainer = styled.div`
   display: inline-block;

   /* @media screen and (max-width: 700px) {
      display: ${({main}) => (main ? 'none' : 'inline-block')};
   } */
`;

export const UserIconImage = styled.img`
   height: 4.5rem;
   width: 4.5rem;
   border-radius: 100%;
   overflow: hidden;
   transition: 0.1s ease;
   cursor: pointer;
   transform: scale(1.075);

   &:hover {
      opacity: 0.85;
   }

   &:active {
      transform: scale(1);
   }
`;

export const UserIconWindow = styled.div`
   position: absolute;
   min-width: 20rem;
   top: calc(100% + 2rem);
   right: 0;
   padding: 2.5rem 0 0;
   z-index: 20;
   overflow: hidden;
   border-radius: 1rem;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   background-color: ${({theme}) => theme.back.page};
   box-shadow: ${({theme}) => theme.back.shadow};

   @media screen and (max-width: 700px) {
      right: auto;
      left: 50%;
      transform: translateX(-50%);
   }
`;

export const UserWindowImage = styled.img`
   height: 10rem;
   width: 10rem;
   border-radius: 100%;
   overflow: hidden;
`;

export const UserWindowName = styled.h1`
   font-size: 2rem;
   white-space: nowrap;
   font-weight: 700;
   margin-top: 1.5rem;
   color: ${({theme}) => theme.text.main.head};
`;

export const UserWindowRole = styled.h3`
   font-size: 1.5rem;
   white-space: nowrap;
   font-weight: 550;
   margin-top: 0.25rem;
   color: ${({theme}) => theme.back.accent};
`;

export const UserWindowLinks = styled.nav`
   margin-top: 2rem;
   display: flex;
   width: 100%;
   align-items: flex-start;
   flex-direction: column;
`;

export const UserWindowLink = styled(Link)`
   display: flex;
   align-items: center;
   gap: 0.75rem;
   padding: 0.25rem 0;
   color: ${({theme}) => theme.text.main.para};

   &:hover,
   &.active {
      color: ${({theme}) => theme.back.accent};
   }
`;

export const UserWindowButton = styled.button`
   display: flex;
   align-items: center;
   gap: 0.75rem;
   width: 100%;
   margin-top: 2rem;
   padding: 1.5rem 2rem;
   color: ${({theme}) => theme.back.accent};
   cursor: pointer;
   text-transform: capitalize;
   font-weight: 550;
   border-top: 0.1rem solid rgba(0, 0, 0, 0.1);
   transition: 0.1s ease;

   svg {
      color: inherit;
   }

   &:hover {
      background-color: ${({theme}) => theme.back.accent};
      color: ${({theme}) => theme.text.main.head};
   }
`;
