/*
    Remove an exclamation mark from the end of a string. 
    For a beginner kata, you can assume that the input data 
    is always a string, no need to verify it.

    ? Examples
    "Hi!"     ---> "Hi"
    "Hi!!!"   ---> "Hi!!"
    "!Hi"     ---> "!Hi"
    "!Hi!"    ---> "!Hi"
    "Hi! Hi!" ---> "Hi! Hi"
    "Hi"      ---> "Hi

    function remove(s) {
        return s.endsWith('!') ? s.slice(0, -1) : s;
    }

    ! IMPORTANT NOTE (its important for the form validation in real world project):
    ! Read about REGULAR EXPRESSIONS in MDN or W3Schools
    /!$ => Remove the last char from the String if its a '!' 
    const remove = s => s.replace(/!$/, '');
*/

function remove(string) {
  return string[string.length - 1] === "!" ? string.slice(0, -1) : string;
}

console.log(remove("!Hi"));
