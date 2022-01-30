
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!(matrix)) {
    return [];
  } else {
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 != 0) {
        for (let j = (matrix[i].length - 1); j >= 0; j--) {
          arr = arr.concat(matrix[i][j])
        }
      } else {
        arr = arr.concat(matrix[i])
      }
    }
    return arr;
  }
}

