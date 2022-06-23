module.exports = function getTodayDate() {
   const date = new Date().toLocaleDateString('en-US', { dateStyle: 'long' });
   const [mm, dd, yy] = date?.replaceAll(/[ ,]+/g, ',');
   return `${dd} ${mm}, ${yy}`;
};
