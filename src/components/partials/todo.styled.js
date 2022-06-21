import styled, {css} from 'styled-components';

export const TodoContainer = styled.summary`
   width: 100%;
   padding: 1.5rem;
   border-radius: 0.75rem;
   background-color: ${({theme}) => theme.back.sub};
   margin: 0.75rem 0;
   display: flex;
   align-items: center;
   gap: 1rem;
`;

export const TodoCheck = styled.span`
   height: 1.6rem;
   width: 1.6rem;
   border-radius: 0.25rem;
   border: 0.2rem solid rgba(0, 0, 0, 0.3);
   flex-shrink: 0;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   ${({active}) => setCheckColor(active)};
`;

export const TodoTexts = styled.div`
   flex-grow: 1;
   width: 100%;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
`;

export const TodoTitle = styled.h1`
   font-weight: 550;
   color: ${({theme}) => theme.text.main.head};
   text-transform: unset;
   width: 100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   cursor: pointer;
`;

export const TodoTags = styled.p`
   display: flex;
   align-items: center;
   gap: 0.5rem;

   &,
   * {
      font-size: 1.1rem;
      color: ${({theme}) => theme.text.main.para};
      line-height: 1;
      text-transform: capitalize;
   }

   & {
      text-transform: lowercase;
      color: ${({theme}) => theme.text.main.head};
   }
`;

export const TodoStatus = styled.span`
   ${({status}) => setStatusColor(status)}
`;

export const TodoTag = styled.span`
   color: #8b008b;
`;

export const TodoDate = styled.span`
   color: #2f4f4f;
`;

function setCheckColor(active) {
   if (active) {
      return css`
         border-color: #2aab2a;
         background-color: #2aab2a;

         svg {
            color: ${({theme}) => theme.text.sub.head};
         }
      `;
   } else {
      return null;
   }
}

function setStatusColor(status) {
   if (status === 'pending') {
      return css`
         color: #7b68ee;
      `;
   } else if (status === 'ongoing') {
      return css`
         color: #1e90ff;
      `;
   } else if (status === 'completed') {
      return css`
         color: #2aab2a;
      `;
   } else if (status === 'overdue') {
      return css`
         color: #ff4500;
      `;
   }
}
