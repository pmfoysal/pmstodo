const getDateTime = require('../utilities/getDateTime');
const getTodayTime = require('../utilities/getTodayTime');

module.exports = function getToday(data) {
   let add = 0;
   let due = 0;
   let done = 0;
   data?.forEach(todo => {
      const todNum = getTodayTime();
      const addNum = getDateTime(todo?.dateAdd);
      const dueNum = getDateTime(todo?.dateDue);
      const doneNum = getDateTime(todo?.dateDone);
      if (todNum === addNum) add += 1;
      if (todNum > dueNum && !todo?.isDone) due += 1;
      if (todNum === doneNum) done += 1;
   });
   return { add, due, done };
};
