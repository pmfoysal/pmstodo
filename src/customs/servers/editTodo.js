import { toast } from 'react-toastify';
import pmaxios from '@middlewares/pmaxios';

export default function editTodo(id, data, closer) {
   const tId = toast.loading('Please wait! Your task is updating...');
   pmaxios
      .post(`/todo/${id}`, data)
      .then(res => {
         if (res?.data?.acknowledged) {
            toast.update(tId, {
               render: 'Success! You task updated.',
               type: 'success',
               isLoading: false,
               autoClose: 3000,
            });
            if (closer) closer(false);
         }
      })
      .catch(error => {
         toast.update(tId, {
            render: "Failed! You task isn't updated.",
            type: 'error',
            isLoading: false,
            autoClose: 3000,
         });
      });
}
