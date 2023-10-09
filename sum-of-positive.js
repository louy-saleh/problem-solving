/*

    You get an array of numbers, return the sum of
    all of the POSITIVE ones.

    Example:
    [ 1, -4, 7, 12 ] => 1 + 7 + 12 = 20

    Note: if there is nothing to sum,
    the sum is default to 0.

    okay so, to solve this problem we will devide it
    1. Initial value of the sum = 0;
    2. Array looping ;
    3. check if the number is POSITIVE or not
        && if its a POSITIVE NUMBER then add it to the sum.

    I will use js built-in functions to solve this. => filter().reduce()

        * filter () is used to create a new array containing elements from an existing array that meet a certain condition. It iterates over each element in the array and checks if the element satisfies the condition specified by a callback function. If the condition is true, the element is included in the new array; otherwise, it is excluded.
        ? filter () is useful when you want to extract specific elements from an array based on certain criteria and create a new array with those filtered elements.

        * reduce () is used to transform an array into a single value by iterating over its elements and applying a specified callback function that combines the elements.

    * 1. A callback function: This function executes on each element of the array, taking four arguments:
    *   - Accumulator: The value that is being accumulated and returned after each iteration.
    *   - Current value: The current element being processed from the array.
    *   - Current index: The index of the current element being processed.
    *   - Source array: The array that is being reduced.
    * 2. Initial value (optional): An initial value that is set as the initial accumulator value. This is an optional parameter and can be omitted. If omitted, the first element of the array becomes the initial accumulator value.
*/

function sum_of_Positive(arr) {
  //better for execution time
  return arr
    .filter((x) => x > 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  //Bad for execution time
  /*   let init_sum = 0;
     for (let i = 0; i < arr.length; i++) {
       if (arr[i] > 0) {
         init_sum += arr[i];
       }
     }
     return init_sum;
*/
}

console.log(sum_of_Positive([1, -4, 7, 12]));
