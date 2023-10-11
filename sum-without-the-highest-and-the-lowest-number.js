/*
    Sum all the numbers of a given array, except the hights and the lowest element (by value not by index!).

    The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

    ? Examples:
    [ 6, 2, 1, 8, 10 ] => 16
    [ 1, 1, 11, 2, 3 ] => 6

    ! Input Validation:
    If an empty value( null, None, Nothing, ..etc ) is given instead of an array, or the given array is an empty list or a list with only 1 element then return 0.

*/

// Check if Empty value => return 0
// Find the highest number
// Find the lowest number
// Filter the array
// Sum all numbers in the array

function sumArrayWithoutHighestAndLowest(arr) {
  /* 
    "..." this is the spread operator, it returns each     
    element in the array.

    this solution is wrong when there is more than one element
    and they have the same value like [ 1, 1, 2, 3, 5 ] => WRONG ANSWER

     let maxNum = Math.max(...arr);
     let minNum = Math.min(...arr);
     let filteredArray = arr.filter((x) => x !== maxNum && x !== minNum);
     let newArray = filteredArray.reduce((acc, curr) => acc + curr, 0);
     return newArray;
*/
  return arr == null
    ? 0
    : arr
        .sort((a, b) => a - b) //sorting ascending order
        .slice(1, -1) //removing min and max number
        .reduce((acc, curr) => acc + curr, 0); //Adding the rest element of the array
}

console.log(sumArrayWithoutHighestAndLowest([1, 1, 2, 3, 10]));
