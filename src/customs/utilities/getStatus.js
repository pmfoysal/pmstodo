import getISOTime from './getISOTime';

export default function getStatus(dueDate, isDone) {
   if (isDone) return 'completed';
   const today = getISOTime(new Date());
   if (today === dueDate) return 'ongoing';
   else if (today > dueDate) return 'overdue';
   return 'pending';
}
