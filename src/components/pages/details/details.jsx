import { Icon } from '@iconify/react';
import PageTitle from '@shared/pageTitle';
import { useSearchParams } from 'react-router-dom';
import React, { Fragment, useContext } from 'react';
import { StoreContext } from '@contexts/storeProvider';
import { DetailsContainer, DetailsContent, DetailsInfo, DetailsNotFound } from './details.styled';

export default function Details() {
   const [query] = useSearchParams();
   const { user } = useContext(StoreContext);
   const view = query.get('view');

   return (
      <DetailsContainer>
         <PageTitle>
            task info
            {view && (
               <span className='buttons'>
                  {!user?.isAdmin && (
                     <button>
                        <Icon icon='fluent:clipboard-text-edit-24-regular' />
                     </button>
                  )}
                  <button className='red'>
                     <Icon icon='fluent:delete-24-regular' />
                  </button>
               </span>
            )}
         </PageTitle>
         <DetailsContent>
            {!view ? (
               <DetailsNotFound>Please select a task to view!</DetailsNotFound>
            ) : (
               <Fragment>
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
               </Fragment>
            )}
            <br />
            <div>
               <PageTitle>task name</PageTitle>
               {!view ? (
                  <DetailsNotFound>Please select a task to view!</DetailsNotFound>
               ) : (
                  <h1 className='task-name'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, assumenda?</h1>
               )}
            </div>
         </DetailsContent>
      </DetailsContainer>
   );
}
