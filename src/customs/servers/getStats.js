export default function getStats(stats) {
   const { personal, office, home, travel, total } = stats;
   const { today, upcoming, overdue, archived, week } = stats;

   const colors1 = {
      back: 'rgba(128, 128, 0, 0.05)',
      front: 'rgb(128, 128, 0)',
   };
   const colors2 = {
      back: 'rgba(100, 149, 237, 0.055)',
      front: 'rgb(100, 149, 237)',
   };
   const colors3 = {
      back: 'rgba(153, 50, 204, 0.045)',
      front: 'rgb(153, 50, 204)',
   };
   const colors4 = {
      back: 'rgba(0, 100, 0, 0.045)',
      front: 'rgb(0, 100, 0)',
   };

   return {
      total: {
         name: 'total todos',
         percent: (total?.done / total?.add) * 100 || 0,
         ...colors1,
         add: total?.add,
         due: total?.due,
         done: total?.done,
         user: total?.user,
      },
      week: {
         name: 'weekly todos',
         percent: (week?.done / week?.add) * 100 || 0,
         ...colors2,
         add: week?.add,
         due: week?.due,
         done: week?.done,
      },
      today: {
         name: "today's todos",
         percent: (today?.done / today?.add) * 100 || 0,
         ...colors3,
         add: today?.add,
         due: today?.due,
         done: today?.done,
      },
      upcoming: {
         name: 'upcoming todos',
         percent: (upcoming?.done / upcoming?.add) * 100 || 0,
         ...colors4,
         add: upcoming?.add,
         due: upcoming?.due,
         done: upcoming?.done,
      },
      personal: {
         name: 'personal todos',
         percent: (personal?.done / personal?.add) * 100 || 0,
         ...colors1,
         add: personal?.add,
         due: personal?.due,
         done: personal?.done,
      },
      office: {
         name: 'office todos',
         percent: (office?.done / office?.add) * 100 || 0,
         ...colors2,
         add: office?.add,
         due: office?.due,
         done: office?.done,
      },
      home: {
         name: 'home todos',
         percent: (home?.done / home?.add) * 100 || 0,
         ...colors3,
         add: home?.add,
         due: home?.due,
         done: home?.done,
      },
      travel: {
         name: 'travel todos',
         percent: (travel?.done / travel?.add) * 100 || 0,
         ...colors4,
         add: travel?.add,
         due: travel?.due,
         done: travel?.done,
      },
      overdue: {
         name: 'overdue todos',
         percent: (total?.due / total?.add) * 100 || 0,
         ...colors1,
         due: overdue,
      },
      archived: {
         name: 'archived todos',
         percent: (total?.done / total?.add) * 100 || 0,
         ...colors2,
         done: archived,
      },
   };
}
