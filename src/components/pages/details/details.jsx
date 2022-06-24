import useTodo from '@hooks/useTodo';
import { Icon } from '@iconify/react';
import React, { Fragment } from 'react';
import PageTitle from '@shared/pageTitle';
import getStatus from '@utilities/getStatus';
import PageLoader from '@helpers/pageLoader';
import { useSearchParams } from 'react-router-dom';
import getDateString from '@utilities/getDateString';
import { DetailsContainer, DetailsContent, DetailsInfo, DetailsNotFound } from './details.styled';

export default function Details() {
   const [query] = useSearchParams();
   const view = query.get('view');
   const { isLoading, data: todo = {} } = useTodo(view);
   const { name, email, dateAdd, dateDue, dateDone, tag, isDone, task } = todo;
   const notfound = !view || !todo?._id;
   const waiting = view && isLoading;

   return (
      <DetailsContainer>
         <PageTitle>
            task info
            {view && (
               <span className='buttons'>
                  <button>
                     <Icon icon='fluent:clipboard-text-edit-24-regular' />
                  </button>
                  <button className='red'>
                     <Icon icon='fluent:delete-24-regular' />
                  </button>
               </span>
            )}
         </PageTitle>
         {waiting ? (
            <PageLoader />
         ) : (
            <DetailsContent>
               {notfound ? (
                  <DetailsNotFound>Please select a task to view!</DetailsNotFound>
               ) : (
                  <Fragment>
                     <DetailsInfo>
                        author: <span>{name}</span>
                     </DetailsInfo>
                     <DetailsInfo>
                        email: <span className='email'>{email}</span>
                     </DetailsInfo>
                     <DetailsInfo>
                        add date: <span>{getDateString(dateAdd)}</span>
                     </DetailsInfo>
                     <DetailsInfo>
                        due date: <span>{getDateString(dateDue)}</span>
                     </DetailsInfo>
                     {dateDone ? (
                        <DetailsInfo>
                           done date: <span>{getDateString(dateDone)}</span>
                        </DetailsInfo>
                     ) : null}
                     <DetailsInfo>
                        tag: <span className='tag'>{tag}</span>
                     </DetailsInfo>
                     <DetailsInfo>
                        status: <span className={getStatus(dateDue, isDone)}>{getStatus(dateDue, isDone)}</span>
                     </DetailsInfo>
                  </Fragment>
               )}
               <br />
               <div>
                  <PageTitle>task name</PageTitle>
                  {notfound ? (
                     <DetailsNotFound>Please select a task to view!</DetailsNotFound>
                  ) : (
                     <h1 className='task-name'>{task}</h1>
                  )}
               </div>
            </DetailsContent>
         )}
      </DetailsContainer>
   );
}
