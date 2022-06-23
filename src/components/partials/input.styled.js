import styled from 'styled-components';

export const InputContainer = styled.input`
   border-radius: 0.75rem;
   border: 0.2rem solid rgba(0, 0, 0, 0.1);
   text-transform: unset;
   font-weight: 550;
   color: ${({ theme }) => theme.text.main.head};
   padding: 0 1.5rem;
   line-height: 1.4;
   width: 100%;
   height: 4.5rem;
   transition: 0.1s ease;

   &:focus {
      border-color: ${({ theme }) => theme.back.accent};
   }

   &[type='date'] {
      text-transform: uppercase;
      font-size: 1.5rem;
      color: rgba(0, 0, 0, 0.6);
   }
`;
