const convertArraysToObject = (arr1, arr2) => {
  let temObject = {};
    arr1.map((firstVal, index) => {
      temObject[firstVal] = arr2[index] ? arr2[index]:firstVal;
    });
    return temObject;
}

module.exports = { convertArraysToObject };


