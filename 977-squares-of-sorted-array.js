/*
977. Squares of a Sorted Array

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


Example:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

*/

var sortedSquares = function (nums) {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    let leftAbs = Math.abs(nums[left]);
    let rightAbs = Math.abs(nums[right]);

    if (leftAbs < rightAbs) {
      result[i] = nums[right] ** 2;
      right--;
    } else {
      result[i] = nums[left] ** 2;
      left++;
    }
  }

  return result;
};

// Time complexity: O(n); 
// Space complexity: O(n);