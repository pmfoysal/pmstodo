import { css, createGlobalStyle } from 'styled-components';

function globalStyle() {
   return css`
      body {
         background-color: ${({ theme }) => theme.back.sub};
      }

      *::selection {
         background-color: ${({ theme }) => theme.back.accent};
         color: ${({ theme }) => theme.text.main.head};
      }

      *::placeholder {
         color: rgba(0, 0, 0, 0.5);
      }

      *::-webkit-scrollbar {
         width: 0;
         height: 0;

         @media screen and (max-width: 600px) {
            width: 0;
            height: 0;
         }
      }

      *::-webkit-scrollbar-thumb {
         background-color: ${({ theme }) => theme.back.accent};
         border-radius: 1rem;
      }

      *::-webkit-scrollbar-track {
         background-color: ${({ theme }) => theme.back.card1};
      }

      a {
         color: ${({ theme }) => theme.back.accent};

         &:hover {
            opacity: 0.85;
         }
      }

      .Toastify__toast {
         box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.05);
         border-radius: 0.75rem;

         &,
         * {
            font-family: inherit;
            line-height: 1.4;
            text-transform: lowercase;
            user-select: none;

            &::first-letter {
               text-transform: capitalize;
            }
         }
      }
   `;
}

const GlobalStyle = createGlobalStyle`
   ${globalStyle()}
`;

export default GlobalStyle;
