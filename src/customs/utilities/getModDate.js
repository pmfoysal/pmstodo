export default function getModDate(date) {
   const nDate = new Date(date).toLocaleDateString('en-US', { dateStyle: 'long' });
   const newDate = nDate?.replaceAll(/[ ,]+/g, ',');
   const [mm, dd, yy] = newDate?.split(',');
   return `${dd} ${mm}, ${yy}`;
}
