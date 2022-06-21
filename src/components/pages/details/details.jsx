import React from 'react';
import PageTitle from '@shared/pageTitle';
import { DetailsContainer, DetailsContent, DetailsInfo } from './details.styled';

export default function Details() {
   return (
      <DetailsContainer>
         <PageTitle>task info</PageTitle>
         <DetailsContent>
            <DetailsInfo>
               author: <span>foysal ahmmed</span>
            </DetailsInfo>
            <DetailsInfo>
               email: <span className='email'>pmfoysal@gmail.com</span>
            </DetailsInfo>
            <DetailsInfo>
               add date: <span>20 june, 2022</span>
            </DetailsInfo>
            <DetailsInfo>
               due date: <span>22 june, 2022</span>
            </DetailsInfo>
            <DetailsInfo>
               done date: <span>21 june, 2022</span>
            </DetailsInfo>
            <DetailsInfo>
               tag: <span className='tag'>personal</span>
            </DetailsInfo>
            <DetailsInfo>
               status: <span>completed</span>
            </DetailsInfo>
            <br />
            <div>
               <PageTitle>task name</PageTitle>
               <h1 className='task-name'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, assumenda?</h1>
            </div>
         </DetailsContent>
      </DetailsContainer>
   );
}
