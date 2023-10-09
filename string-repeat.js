/*
    Write a function called "repeatStr" which repeats
    the given String "string" exactly n times

    Example
    repeateStr(6, "I") => IIIIII
    repeateStr(5, "Hello") => HelloHelloHelloHelloHello

    SOLVING:
    Create empty String =>newStr
    Take the number argument and loop through it.
    Add the String to the empty one.
*/

function repeateStr(count, str) {
  return str.repeat(count);
  //   let newStr = "";
  //   for (let i = 0; i < count; i++) {
  //     newStr += str;
  //   }
  //   return newStr;
}

console.log(repeateStr(6, "I"));
