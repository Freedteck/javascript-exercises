const sumAll = function(start, end) {
    let sum = 0;
    if ((start < 0) || (end < 0)) {
        return 'ERROR'
    } else if ((typeof start !== 'number') || (typeof end !== 'number')) {
        return 'ERROR'
    } else if (end < start) {
          for (i = start; i >= end; i--) {
              sum += i
        }
    } else {
        for (i = start; i <= end; i++) {
            sum += i
        }
     }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
