const getDateTime = require('../utilities/getDateTime');
const getTodayTime = require('../utilities/getTodayTime');

module.exports = function getHome(data) {
   let add = 0;
   let due = 0;
   let done = 0;
   data?.forEach(todo => {
      if (todo?.tag === 'home') {
         const todNum = getTodayTime();
         const dueNum = getDateTime(todo?.dateDue);
         add += 1;
         if (todo?.isDone) done += 1;
         if (todNum > dueNum && !todo?.isDone) due += 1;
      }
   });
   return { add, due, done };
};
