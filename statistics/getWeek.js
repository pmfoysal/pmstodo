const getDateTime = require('../utilities/getDateTime');
const getTodayTime = require('../utilities/getTodayTime');

module.exports = function getWeek(data) {
   let add = 0;
   let due = 0;
   let done = 0;
   data?.forEach(todo => {
      const todNum = getTodayTime();
      const agoNum = todNum - 6048e5;
      const addNum = getDateTime(todo?.dateAdd);
      const dueNum = getDateTime(todo?.dateDue);
      const doneNum = getDateTime(todo?.dateDone);
      if (todNum >= addNum && agoNum <= addNum) add += 1;
      if (todNum >= dueNum && agoNum <= dueNum && !todo?.isDone) due += 1;
      if (todNum >= doneNum && agoNum <= doneNum && todo?.isDone) done += 1;
   });
   return { add, due, done };
};
