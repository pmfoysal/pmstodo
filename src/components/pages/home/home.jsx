import React from 'react';
import Button from 'components/partials/button';

export default function Home() {
   return (
      <div style={{padding: '3rem', fontSize: '3rem', textAlign: 'center', fontWeight: 550}}>
         Welcome to React Starter Project Home Page!
         <br />
         <br />
         <Button name='new task' main />
      </div>
   );
}
