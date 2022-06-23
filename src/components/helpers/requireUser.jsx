import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '@contexts/storeProvider';
import AuthPage from 'components/pages/authPage/authPage';

export default function RequireUser({ then }) {
   const { user } = useContext(StoreContext);

   if (!user?.email) return <AuthPage />;
   return then;
}
