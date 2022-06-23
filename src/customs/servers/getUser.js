import { toast } from 'react-toastify';
import pmaxios from '@middlewares/pmaxios';

export default function getUser(setUser, setDisable) {
   const tId = toast.loading('Please wait... Verifying Your Access Token.');
   pmaxios
      .get('/user')
      .then(res => {
         toast.update(tId, {
            render: 'Success! Your Access Token Verified.',
            type: 'success',
            isLoading: false,
            autoClose: 3000,
         });
         setUser(res?.data?.user);
      })
      .catch(error => {
         setDisable(false);
         toast.update(tId, {
            render: "Failed! Your Access Token isn't Valid.",
            type: 'error',
            isLoading: false,
            autoClose: 3000,
         });
         setUser({});
      });
}
