const getHome = require('../statistics/getHome');
const getWeek = require('../statistics/getWeek');
const getTotal = require('../statistics/getTotal');
const getToday = require('../statistics/getToday');
const getOffice = require('../statistics/getOffice');
const getTravel = require('../statistics/getTravel');
const getOverdue = require('../statistics/getOverdue');
const getUpcoming = require('../statistics/getUpcoming');
const getArchived = require('../statistics/getArchived');
const getPersonal = require('../statistics/getPersonal');

module.exports = async function getStats(data) {
   return {
      home: getHome(data),
      week: getWeek(data),
      total: getTotal(data),
      today: getToday(data),
      office: getOffice(data),
      travel: getTravel(data),
      overdue: getOverdue(data),
      upcoming: getUpcoming(data),
      archived: getArchived(data),
      personal: getPersonal(data),
   };
};
