import { useQuery } from 'react-query';
import pmaxios from '@middlewares/pmaxios';

export default function useTodos() {
   return useQuery('todos', async () => {
      const { data } = await pmaxios.get('/todos');
      return data;
   });
}
