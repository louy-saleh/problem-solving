/*

    Write a method, that will get an integer array as
    parameter and will process every number from this array.
    Return a new array with processing every number of the input-array like this:
    If the number has an integer square root, take this, otherwise square the number.

    ? Example
    [4,3,9,7,2,1] -> [2,9,3,49,4,1]
    * Notes
    The input array will always contain only positive numbers,
    and will never be empty or null.
*/

/* SOLUTION */
/*
    1.looping throght the array
    2. check if the number has an integer square root or not
    3. if true take the root
        else square the number
    4. return the new array
*/
function squareOrSquareRoot(array) {
  return array.map((number) =>
    Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number * number
  );
}

// function squareOrSquareRoot(array) {
//   let newArr = [];
//   for (let element of array) {
//     if (Number.isInteger(Math.sqrt(element))) {
//       newArr.push(Math.sqrt(element));
//     } else {
//       newArr.push(element * element);
//     }
//   }
//   return newArr;
// }

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
