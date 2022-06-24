import { toast } from 'react-toastify';
import pmaxios from '@middlewares/pmaxios';

export default function addTodo(data, closer) {
   const tId = toast.loading('Please wait! Your task is adding...');
   pmaxios
      .post('/todo', data)
      .then(res => {
         if (res?.data?.acknowledged) {
            toast.update(tId, {
               render: 'Success! You task Added.',
               type: 'success',
               isLoading: false,
               autoClose: 3000,
            });
            if (closer) closer(false);
         }
      })
      .catch(error => {
         toast.update(tId, {
            render: "Failed! You task isn't Added.",
            type: 'error',
            isLoading: false,
            autoClose: 3000,
         });
      });
}
