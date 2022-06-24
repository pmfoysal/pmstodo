module.exports = function getTotal(data) {
   let add = 0;
   let due = 0;
   let done = 0;
   const users = [];
   data?.forEach(todo => {
      add += 1;
      if (!todo?.isDone) due += 1;
      if (todo?.isDone) done += 1;
      if (!users.includes(todo?.email)) users.push(todo?.email);
   });
   return { add, due, done, user: users.length };
};
