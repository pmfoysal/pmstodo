module.exports = function getTodayTime() {
   const iso = new Date().toISOString();
   const [date] = iso?.split('T');
   const local = `${date}T00:00:00.000Z`;
   return new Date(local).getTime();
};
