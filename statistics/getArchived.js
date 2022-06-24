module.exports = function getArchived(data) {
   let done = 0;
   data?.forEach(todo => {
      if (todo?.isDone) done += 1;
   });
   return done;
};
