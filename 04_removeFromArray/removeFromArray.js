const removeFromArray = function(arr, ...remValues) {
    let valToRemove; 
    for (i=0; i< remValues.length; i++) {
        valToRemove = remValues[i]
        let valueIndex = arr.indexOf(valToRemove);
        if(arr.includes(valToRemove)) {
            arr.splice(valueIndex, 1)
        }
    }            
   return arr;      
};
// Do not edit below this line
module.exports = removeFromArray;
