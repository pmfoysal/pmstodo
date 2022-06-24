const getDateTime = require('../utilities/getDateTime');
const getTodayTime = require('../utilities/getTodayTime');

module.exports = function getOverdue(data) {
   let due = 0;
   data?.forEach(todo => {
      const todNum = getTodayTime();
      const dueNum = getDateTime(todo?.dateDue);
      if (todNum > dueNum && !todo?.isDone) due += 1;
   });
   return due;
};
