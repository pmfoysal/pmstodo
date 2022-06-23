import { toast } from 'react-toastify';

export default function isValidTask(task) {
   if (!task) {
      toast.error('Please provide a task description!');
      return false;
   } else {
      if (task?.length > 200) {
         toast.error('Task description must be less than 200 characters');
         return false;
      }
      return true;
   }
}
