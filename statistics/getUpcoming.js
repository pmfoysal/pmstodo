const getDateTime = require('../utilities/getDateTime');
const getTodayTime = require('../utilities/getTodayTime');

module.exports = function getUpcoming(data) {
   let add = 0;
   let due = 0;
   let done = 0;
   data?.forEach(todo => {
      const todNum = getTodayTime();
      const dueNum = getDateTime(todo?.dateDue);
      if (todNum < dueNum) add += 1;
      if (todNum < dueNum && !todo?.isDone) due += 1;
      if (todNum < dueNum && todo?.isDone) done += 1;
   });
   return { add, due, done };
};
