export default function getDayName(dueDate) {
   const date = new Date().toLocaleDateString();
   const today = new Date(date).getTime() / 1000;
   if (today === dueDate) return 'today';
   else if (today === dueDate + 86400) return 'yesterday';
   else if (today === dueDate - 86400) return 'tomorrow';
   return date;
}
