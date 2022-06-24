export default function getDateString(date) {
   return new Date(date).toLocaleDateString('en-in', { dateStyle: 'long' });
}
