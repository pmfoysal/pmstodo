import { toast } from 'react-toastify';

export default function isValidDate(date) {
   if (!date) {
      toast.error('Please Provide a Completion Date!');
      return false;
   } else {
      const today = new Date().toLocaleDateString('en-US', { dateStyle: 'long' });
      const todayMili = new Date(today);
      const dateMili = new Date(date);
      if (dateMili >= todayMili) {
         return true;
      } else {
         toast.error('Please select an upcoming date!');
         return false;
      }
   }
}
