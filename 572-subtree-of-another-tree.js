/*
572. Subtree of Another Tree

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.


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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  if (!root) return false;
  if (isSame(root, subRoot)) return true;
  
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isSame = (tree1, tree2) => {
  if (!tree1 && !tree2) return true;
  if (!tree1 || !tree2 || tree1.val != tree2.val) return false;
  
  return isSame(tree1.left, tree2.left) && isSame(tree1.right, tree2.right);
}