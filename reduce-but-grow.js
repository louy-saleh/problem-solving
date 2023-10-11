/*

    Given a non-empty array of integers, return the result of multiplying
    the values together in order.
    
    Example:
    [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

function grow(x) {
  let num = 1;
  for (let i of x) {
    num *= i;
  }
  return num;
}

console.log(grow([1, 2, 3, 4]));
