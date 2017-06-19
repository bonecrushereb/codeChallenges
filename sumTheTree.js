// return the sum of all values in the tree, including the root

// Node:
//   value: <int>,
//   left: <Node> or null,
//   right: <Node> or null
function sumTheTreeValues(root) {
  if(!root) return 0;
  return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}
