import { useQuery } from 'react-query';
import pmaxios from '@middlewares/pmaxios';

export default function useStats() {
   return useQuery(
      'stats',
      async () => {
         const { data } = await pmaxios.get('/todos/stats');
         return data;
      },
      { refetchInterval: 1000 }
   );
}
