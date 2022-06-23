export default function getStatus(date, isDone) {
   if (isDone) return 'completed';
   const today = new Date().getTime() / 1000;
   const nDate = new Date(date).getTime() / 1000;
   if (today === nDate) return 'ongoing';
   else if (today > nDate) return 'overdue';
   return 'pending';
}
