/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const uniqueSet = new Set(nums);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const num = i + 1;
    if (!uniqueSet.has(num)) result.push(num);
  }

  return result;
};
