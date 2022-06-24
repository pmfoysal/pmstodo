import { useQuery } from 'react-query';
import pmaxios from '@middlewares/pmaxios';

export default function useTodo(id) {
   return useQuery(
      ['todo', id],
      async () => {
         if (id) {
            const { data } = await pmaxios.get(`/todo/${id}`);
            return data;
         } else return {};
      },
      { refetchInterval: 1000 }
   );
}
