/*
    Given an array of integers.
    Return an array, where 
    *- the first element is the count of positives numbers.
    *- the second element is sum of negative numbers.
    *- 0 is neither positive nor negative.
    !-If the input is an empty array or is null, return an empty array.
    ? Example
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] => [10, -65]
*/

function countPositivesSumNegatives(input) {
  if (input == null || input == "") return [];
  let countPos = 0;
  let sumNeg = 0;
  for (let element of input) {
    if (element > 0) {
      countPos++;
    } else {
      sumNeg += element;
    }
  }
  return [countPos, sumNeg];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);

/*
    ? ANOTHER WAY TO SOLVE

        function countPositivesSumNegatives(input) {
        if (input == null || input == "") return [];
        let countPos = input.filter((element) => element > 0).length;
        let sumNeg = 0;
        for (let element of input) {
        element < 0 ? (sumNeg += element) : 0;
    }
    return [countPos, sumNeg];
}
*/
