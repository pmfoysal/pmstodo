const { lazy } = require('react');

module.exports = {
   Home: lazy(() => import('./home/home')),
   Today: lazy(() => import('./today/today')),
   Office: lazy(() => import('./office/office')),
   Travel: lazy(() => import('./travel/travel')),
   Overdue: lazy(() => import('./overdue/overdue')),
   Personal: lazy(() => import('./personal/personal')),
   Archived: lazy(() => import('./archived/archived')),
   Upcoming: lazy(() => import('./upcoming/upcoming')),
};
