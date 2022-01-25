module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i % 2) {
                let l = matrix[i].length - 1;
                result.push(matrix[i][l - j]);
            } else {
                result.push(matrix[i][j]);
            }
        }
    }

    return result;
};
