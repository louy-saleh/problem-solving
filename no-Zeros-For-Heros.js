/*

    Numbers ending with zeros are boring.
    They might be fun in your world, but not here.
    Get rid of them. Only the ending ones.

    ? Examples
    1450 -> 145
    960000 -> 96
    1050 -> 105
    -1050 -> -105

    * Zero alone is fine, don't worry about it. Poor guy anyway

*/
function noBoringZeros(n) {
  // Better solution using endsWith() also we can use lastIndexOf():
  let converted = String(n);
  while (converted.endsWith(0)) {
    converted = converted.slice(0, converted.length - 1);
  }
  return Number(converted);

  //   let oldArr = String(n);
  //   let newArr = [];
  //   for (let i = oldArr.length - 1; i >= 0; i--) {
  //     if (oldArr[i] === "0") newArr = oldArr.slice(0, i);
  //     if (oldArr[i] !== "0") {
  //       newArr = oldArr.slice(0, i + 1);
  //       break;
  //     }
  //   }

  //   return Number(newArr);
}
console.log(noBoringZeros(9600000000000));
