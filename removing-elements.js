/*

    Take an array and remove every second element from the array. 
    Always keep the first element and start removing with the next element.

    ? Example:
    ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

    * None of the arrays will be empty, so you don't have to worry about that!
*/
function removeEveryOther(arr) {
  return arr.filter((element, index) => index % 2 === 0);

  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (i % 2 === 0) {
  //       newArr.push(arr[i]);
  //     }
  //   }
  //   return newArr;
}

console.log(
  removeEveryOther([
    "w",
    "9",
    "j",
    "p",
    "z",
    "z",
    "w",
    "5",
    "d",
    "m",
    "9",
    "k",
    "y",
    "2",
    "i",
    "h",
    "d",
    "s",
    "4",
  ])
);
