import NotFound from '@shared/notFound';
import React, { useContext } from 'react';
import { StoreContext } from '@contexts/storeProvider';

export default function RequireAdmin({ then }) {
   const { user } = useContext(StoreContext);
   if (!user?.isAdmin) return <NotFound text="You don't have Admin authorization!" />;
   return then;
}
