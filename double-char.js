/*

    Given a string, you have to return a string in 
    which each character (case-sensitive) is repeated once.

    ? Examples (Input -> Output):
    "String"      -> "SSttrriinngg"
    "Hello World" -> "HHeelllloo  WWoorrlldd"
    "1234!_ "     -> "11223344!!__  "

*/
/*   SOLUTION   */
// Turn the string into Array
// Loop through the Array
// Repeat each element once
// return the array to String again

function doubleChar(str) {
  return str
    .split("")
    .map((element) => element.repeat(2))
    .join("");

  //   arr = Array.from(str); // [ 's', 't', 'r' ]
  //   repArr = [];
  //   for (let element of arr) {
  //     repArr.push(element);
  //     repArr.push(element);
  //   }
  //   return repArr.join("");
}

console.log(doubleChar("sSS++**  tring"));
