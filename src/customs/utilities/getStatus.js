export default function getStatus(dueDate, isDone) {
   if (isDone) return 'completed';
   const date = new Date().toLocaleDateString();
   const today = new Date(date).getTime() / 1000;
   if (today === dueDate) return 'ongoing';
   else if (today > dueDate) return 'overdue';
   return 'pending';
}
