/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	const numSet = new Set(nums);
  return numSet.size < nums.length;
};

var containsDuplicateIterative = function(nums) {
	let obj = {};

	for (let i = 0; i < nums.length; i++) {
		let key = nums[i];
		obj[key] = obj[key] + 1 || 1;

		if (obj[key] > 1) return true;
	}

	return false;
}