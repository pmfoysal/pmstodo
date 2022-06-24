import getISOTime from './getISOTime';

export default function getDayName(dueDate) {
   const date = new Date(dueDate).toLocaleDateString('en-in');
   const today = getISOTime(new Date());
   if (today === dueDate) return 'today';
   else if (today === dueDate + 864e5) return 'yesterday';
   else if (today === dueDate - 864e5) return 'tomorrow';
   return date;
}
