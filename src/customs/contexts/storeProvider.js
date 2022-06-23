import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

export default function StoreProvider({ children }) {
   const [store, setStore] = useState({});
   const [user, setUser] = useState({});

   return <StoreContext.Provider value={{ ...store, setStore, user, setUser }}>{children}</StoreContext.Provider>;
}
