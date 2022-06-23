module.exports = function getTodayTime() {
   const date = new Date().toLocaleDateString('en-US');
   return new Date(date).getTime() / 1000;
};
