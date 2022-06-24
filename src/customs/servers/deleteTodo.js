import { toast } from 'react-toastify';
import pmaxios from '@middlewares/pmaxios';

export default function deleteTodo(id, closer) {
   const tId = toast.loading('Please wait! Your task is deleting...');
   pmaxios
      .delete(`/todo/${id}`)
      .then(res => {
         if (res?.data?.acknowledged) {
            toast.update(tId, {
               render: 'Success! You task deleted.',
               type: 'success',
               isLoading: false,
               autoClose: 3000,
            });
            if (closer) closer(false);
         }
      })
      .catch(error => {
         toast.update(tId, {
            render: "Failed! You task isn't deleted.",
            type: 'error',
            isLoading: false,
            autoClose: 3000,
         });
      });
}
