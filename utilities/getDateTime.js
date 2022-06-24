module.exports = function getDateTime(date) {
   if (!date) return 0;
   const iso = new Date(date).toISOString();
   const [dddd] = iso?.split('T');
   const local = `${dddd}T00:00:00.000Z`;
   return new Date(local).getTime();
};
