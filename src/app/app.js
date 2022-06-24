import Toaster from '@helpers/toaster';
import SiteLoader from '@helpers/siteLoader';
import RequireUser from '@helpers/requireUser';
import { Route, Routes } from 'react-router-dom';
import { StoreContext } from '@contexts/storeProvider';
import { Archived, Dashboard, Home, Office, Overdue } from '@pages';
import { Personal, Today, Travel, Upcoming } from '@pages';
import React, { Suspense, Fragment, lazy, useContext } from 'react';
import RequireAdmin from '@helpers/requireAdmin';
import NotFound from '@shared/notFound';
const Layout = lazy(() => import('@layouts/layout'));

export default function App() {
   const { loading } = useContext(StoreContext);

   return (
      <Fragment>
         {loading ? (
            <SiteLoader />
         ) : (
            <Suspense fallback={<SiteLoader />}>
               <Routes>
                  <Route path='*' element={<RequireUser then={<Layout />} />}>
                     <Route index element={<Today />} />
                     <Route path='home' element={<Home />} />
                     <Route path='office' element={<Office />} />
                     <Route path='travel' element={<Travel />} />
                     <Route path='overdue' element={<Overdue />} />
                     <Route path='archived' element={<Archived />} />
                     <Route path='personal' element={<Personal />} />
                     <Route path='upcoming' element={<Upcoming />} />
                     <Route path='dashboard' element={<RequireAdmin then={<Dashboard />} />} />
                     <Route path='*' element={<NotFound text='Opps! Page not found!' />} />
                  </Route>
               </Routes>
            </Suspense>
         )}
         <Toaster />
      </Fragment>
   );
}
