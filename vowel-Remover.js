/*
    Create a function called shortcut to remove 
    the lowercase vowels (a, e, i, o, u ) in a given string.

    ? Examples
    "hello"     -->  "hll"
    "codewars"  -->  "cdwrs"
    "goodbye"   -->  "gdby"
    "HELLO"     -->  "HELLO"
    * don't worry about uppercase vowels
    * y is not considered a vowel for this kata
*/
function shortcut(string) {
  //! another way by using Regulare expressions:
  /* The g flag indicates that the search should be global,
     meaning it will match all occurrences of the pattern in the input string, 
     rather than just the first occurrence. 
  */
  return string.replace(/[aeiou]/g, "");
  const lowercase_vowels = ["a", "e", "i", "o", "u"];

  //Another way to solve using includes()
  let newStr = [];
  for (let i = 0; i < string.length; i++) {
    if (!lowercase_vowels.includes(string[i])) {
      newStr.push(string[i]);
    }
  }
  //best practice
  //   for (let element of string) {
  //     for (let i = 0; i < lowercase_vowels.length; i++) {
  //       if (element === lowercase_vowels[i]) string = string.replace(element, "");
  //     }
  //   }
  return newStr.join(""); // if you use the best practice way, you must => return string;
}

console.log(shortcut("codewars"));
