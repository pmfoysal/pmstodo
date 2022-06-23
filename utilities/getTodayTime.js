module.exports = function getTodayTime() {
   const utcStr = new Date().toUTCString();
   const utcArr = utcStr?.replaceAll(/[ ,]+/g, ',')?.split(',');
   const date = `${utcArr[1]} ${utcArr[2]}, ${utcArr[3]}`;
   return new Date(date).getTime() / 1000;
};
