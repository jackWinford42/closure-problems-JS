function curriedAdd(total) {
    let sum = 0;
    if (total > 0) {
        sum += total;
        return function addFunction(add) {
            if (add !== undefined) {
                sum = sum + add;
                return addFunction
            } else return sum
        }
    } else return sum;
}

module.exports = { curriedAdd };