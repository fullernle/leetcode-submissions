/*
112. Path Sum

	Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

Example 1: 
	Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
	Output: true
	Explanation: The root-to-leaf path with the target sum is shown.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    return dfs(root, 0, targetSum);
};


const dfs = (node, curSum, targetSum) => {
  if (node === null) return false;

  curSum += node.val;
  if (node.left === null && node.right === null) return curSum === targetSum;
  
  return dfs(node.left, curSum, targetSum) || dfs(node.right, curSum, targetSum);
};
