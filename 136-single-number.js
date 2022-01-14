/**
 * @param {number[]} nums
 * @return {number}
 */
// Naive solution 
var singleNumber = function(nums) {
	const counter = {};
	for (let num of nums ) {
		counter[num] = counter[num] + 1 || 1;
	}

	for (let key in counter) {
		const count = counter[key];
		if (count === 1) return Number(key);
	}
};

// Constant Space solution using XOR bit manipulation 

var singleNumber = function(nums) {
	let result = 0; 

	for (let num of nums) {
		result ^= num;
	}

	return result;
}