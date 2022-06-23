import pmaxios from '@middlewares/pmaxios';
import React, { createContext, useState, useEffect } from 'react';

export const StoreContext = createContext();

export default function StoreProvider({ children }) {
   const [loading, setLoading] = useState(true);
   const [store, setStore] = useState({});
   const [user, setUser] = useState({});

   useEffect(() => {
      pmaxios
         .get('/user')
         .then(res => {
            setUser(res?.data?.user);
            setLoading(false);
         })
         .catch(error => {
            console.log(error);
            setLoading(false);
         });
   }, []);

   return (
      <StoreContext.Provider value={{ store, setStore, user, setUser, loading, setLoading }}>{children}</StoreContext.Provider>
   );
}
