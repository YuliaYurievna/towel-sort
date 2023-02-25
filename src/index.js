// You should implement your task here.

module.exports = function towelSort(matrix) {
    const arr = [];
    if (matrix === undefined) {
        return arr;
    }
    for (let i = 1; i <= matrix.length; i++) {
        if (i % 2 === 0) {
            arr.push(matrix[i - 1].reverse());
        } else {
            arr.push(matrix[i - 1]);
        }
    }
    //console.log("arr", arr);
    return arr.flat();
};
