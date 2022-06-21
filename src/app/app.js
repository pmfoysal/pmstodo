import Toaster from '@helpers/toaster';
import {Route, Routes} from 'react-router-dom';
import React, {Suspense, Fragment, lazy} from 'react';
import {Archived, Home, Office, Overdue} from '@pages';
import {Personal, Today, Travel, Upcoming} from '@pages';
const Layout = lazy(() => import('@layouts/layout'));

export default function App() {
   return (
      <Fragment>
         <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
               <Route path='*' element={<Layout />}>
                  <Route index element={<Today />} />
                  <Route path='home' element={<Home />} />
                  <Route path='office' element={<Office />} />
                  <Route path='travel' element={<Travel />} />
                  <Route path='overdue' element={<Overdue />} />
                  <Route path='archived' element={<Archived />} />
                  <Route path='personal' element={<Personal />} />
                  <Route path='upcoming' element={<Upcoming />} />
                  <Route path='*' element={<h1>Opps! Page Not Found</h1>} />
               </Route>
            </Routes>
         </Suspense>
         <Toaster />
      </Fragment>
   );
}
