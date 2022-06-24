import { useQuery } from 'react-query';
import pmaxios from '@middlewares/pmaxios';

export default function useTodos(type) {
   return useQuery(
      ['todos', type],
      async () => {
         const { data } = await pmaxios.get(`/todos/${type}`);
         return data;
      },
      { refetchInterval: 1000 }
   );
}
