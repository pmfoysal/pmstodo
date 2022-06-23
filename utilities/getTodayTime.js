module.exports = function getTodayTime() {
   const date = new Date().toLocaleDateString();
   return new Date(date).getTime() / 1000;
};
