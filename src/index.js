
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const mtx = JSON.parse(JSON.stringify(matrix));
  let a;
  let arr = [];
  let arr2 = [];
  let arrRev = [];
  for (let i = 0; i < m1.length; i++) {
    if (i % 2 == 0) {
      arr.push(mtx[i].slice());
    } else {
      arrRev = [];
      if (i % 2 != 0) {
        for (let j = (mtx[i].length - 1); j >= 0; j--) {
          console.log(mtx[i][j]);
          a = mtx[i][j]
          arrRev.push(a);
        }
      }
      console.log(arrRev);
      arr.push(arrRev.slice());
    }
         
  }
  for (let items of arr) {
    arr2 = arr2.concat(items);
  }
  return arr2;
  // return [];
}
