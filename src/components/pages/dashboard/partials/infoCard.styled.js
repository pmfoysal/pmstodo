import styled from 'styled-components';

export const InfoCardContainer = styled.summary`
   padding: 2rem;
   border-radius: 1rem;
   background-color: ${({ back }) => back};
   display: flex;
   justify-content: flex-end;
   gap: 3rem;
`;

export const InfoCardTexts = styled.div`
   flex-grow: 1;
`;

export const InfoCardImages = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   .text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 5;
      font-size: 1.8rem;
      font-weight: 550;
      color: rgba(0, 0, 0, 0.65);
   }
`;

export const InfoCardTitle = styled.h1`
   font-size: 2rem;
   font-weight: 550;
   color: ${({ front }) => front};
   margin-bottom: 1rem;
`;

export const InfoCardPara = styled.p`
   width: 100%;
   display: grid;
   align-items: center;
   grid-template-columns: 2.5fr 1fr;

   &,
   * {
      font-size: 1.5rem;
      color: rgba(0, 0, 0, 0.65);
      text-transform: capitalize;
      font-weight: 550;
   }
`;

export const InfoCardProgress = styled.svg`
   height: 10rem;
   width: 10rem;
   fill: transparent;
   transform: rotate(-90deg);

   circle {
      cx: 5rem;
      cy: 5rem;
      r: 4.5rem;
      fill: transparent;
      stroke-width: 1rem;
      transition: 0.2s ease;
   }

   .shadow {
      stroke: ${({ front }) => front};
      opacity: 0.1;
   }

   .progress {
      stroke: ${({ front }) => front};
      stroke-dasharray: 282.74;
      stroke-dashoffset: ${({ percent }) => 282.74 - (282.74 / 100) * percent};
   }
`;
