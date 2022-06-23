export default function getDayName(date) {
   const cDate = new Date().toLocaleDateString('en-US', { dateStyle: 'long' });
   const today = new Date(cDate).getTime() / 1000;
   const dueDate = new Date(date).getTime() / 1000;
   if (today === dueDate) return 'today';
   else if (today === dueDate + 86400) return 'yesterday';
   else if (today === dueDate - 86400) return 'tomorrow';
   return date;
}
