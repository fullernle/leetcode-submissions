/**
 * @param {number[]} nums
 * @return {number}
 */

// Sum approach
var missingNumber = function (nums) {
	let result = nums.length;

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		result += (i - num)
	}

	return result;
}

// XOR approach
var missingNumber = function (nums) {
	let result = nums.length;
	for (let i = 0; i < nums.length; i++) {
		result = result ^ i;
		result = result ^ nums[i];
	}

	return result;
}