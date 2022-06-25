import React from 'react';
import {
   InfoCardContainer,
   InfoCardImages,
   InfoCardPara,
   InfoCardProgress,
   InfoCardTexts,
   InfoCardTitle,
} from './infoCard.styled';

export default function InfoCard({ name, add, due, done, user, percent, back, front }) {
   return (
      <InfoCardContainer back={back}>
         <InfoCardTexts>
            <InfoCardTitle front={front}>{name}</InfoCardTitle>
            {add ? (
               <InfoCardPara>
                  <span>total add</span> {add}
               </InfoCardPara>
            ) : null}
            {due ? (
               <InfoCardPara>
                  <span>total due</span> {due}
               </InfoCardPara>
            ) : null}
            {done ? (
               <InfoCardPara>
                  <span>total done</span> {done}
               </InfoCardPara>
            ) : null}
            {user ? (
               <InfoCardPara>
                  <span>total user</span> {user}
               </InfoCardPara>
            ) : null}
         </InfoCardTexts>
         <InfoCardImages>
            <InfoCardProgress percent={percent} front={front}>
               <circle className='shadow' />
               <circle className='progress' />
            </InfoCardProgress>
            <span className='text'>{percent}%</span>
         </InfoCardImages>
      </InfoCardContainer>
   );
}
