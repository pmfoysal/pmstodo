import { useQuery } from 'react-query';
import pmaxios from '@middlewares/pmaxios';

export default function useAllTodos() {
   return useQuery('alltodos', async () => {
      const { data } = await pmaxios.get('/todos/all');
      return data;
   });
}
