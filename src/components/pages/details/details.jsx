import React from 'react';
import PageTitle from '@shared/pageTitle';
import { DetailsContainer, DetailsContent, DetailsInfo } from './details.styled';
import { Icon } from '@iconify/react';
import { useSearchParams } from 'react-router-dom';

export default function Details() {
   const [query] = useSearchParams();
   const view = query.get('view');
   return (
      <DetailsContainer>
         <PageTitle>
            task info{' '}
            <span className='buttons'>
               <button>
                  <Icon icon='fluent:clipboard-text-edit-24-regular' />
               </button>
               <button className='red'>
                  <Icon icon='fluent:delete-24-regular' />
               </button>
            </span>
         </PageTitle>
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
