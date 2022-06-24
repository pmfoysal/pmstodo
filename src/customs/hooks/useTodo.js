import { useQuery } from 'react-query';
import pmaxios from '@middlewares/pmaxios';

export default function useTodo(id) {
   return useQuery(
      ['todo', id],
      async () => {
         const { data } = await pmaxios.get(`/todo/${id}`);
         return data;
      },
      { refetchInterval: 1000 }
   );
}
