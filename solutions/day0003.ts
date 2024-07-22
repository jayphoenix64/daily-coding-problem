/**
 * Good morning! Here's your coding interview problem for today.
 * This problem was asked by Google.
 * Given the root to a binary tree, implement serialize(root),
 * which serializes the tree into a string, and deserialize(s),
 * which deserializes the string back into the tree.
 *
 * class Node:
 *   def __init__(self, val, left=None, right=None):
 *       self.val = val
 *       self.left = left
 *       self.right = right
 *
 * The following test should pass:
 *
 * node = Node('root', Node('left', Node('left.left')), Node('right'))
 * assert deserialize(serialize(node)).left.left.val == 'left.left'
 */

interface TreeNode {
  val: any;
  left?: TreeNode;
  right?: TreeNode;
}

function serialize(tree: TreeNode) {
  return JSON.stringify(tree);
}

function deserialize(tree: string) {
  return JSON.parse(tree);
}

const tree: TreeNode = {
  val: 'root',
  left: {
    val: 'left',
    left: {
      val: 'left.left',
    },
  },
  right: {
    val: 'right',
  },
};

console.log('tree:', deserialize(serialize(tree)).left.left.val === 'left.left' ? 'successful' : 'not yet successful');

/**
 * Well, utilizing TypeScript and its interface sturcture makes this exercise
 * pretty easy. The JSON function are just there to actually have a serialize 
 * and deserilize function.
 */