const mergeSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  } else {
    let result = [];
    let leftNums = nums.slice(0, Math.floor(nums.length / 2));
    let rightNums = nums.slice(Math.floor(nums.length / 2));

    leftNums = mergeSort(leftNums);
    rightNums = mergeSort(rightNums);

    while (leftNums.length > 0 && rightNums.length > 0) {
      if (leftNums[0] < rightNums[0]) {
        result.push(leftNums.shift());
      } else {
        result.push(rightNums.shift());
      }
    }

    if (leftNums.length > 0) {
      result = result.concat(leftNums);
    } else if (rightNums.length > 0) {
      result = result.concat(rightNums);
    }

    return result;
  }
};

console.log(mergeSort([0, 5, 2, 4, 3, 1, 7, 6]));
