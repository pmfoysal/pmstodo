export default function getStatus(date, isDone) {
   if (isDone) return 'completed';
   const today = new Date().getTime() / 1000;
   const dueDate = new Date(date).getTime() / 1000;
   if (today === dueDate) return 'ongoing';
   else if (today > dueDate) return 'overdue';
   return 'pending';
}
