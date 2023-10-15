/*
    When provided with a letter, return its position in the alphabet.
    ? Example
    Input :: "a"
    Ouput :: "Position of alphabet: 1"
*/
function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}

console.log(position("g"));
