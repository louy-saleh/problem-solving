/*

    Create a function which answers the question "Are you playing banjo?".
    * If your name starts with the letter "R" or lower case "r", you are playing banjo!
    The function takes a name as its only argument, and returns one of the following strings:
    name + " plays banjo" 
    name + " does not play banjo"
    
    * Names given are always valid strings.


    Also we can use built-in function for strings=>charAt(index) ]=> returns value

*/

function areYouPlayingBanjo(name) {
  // Implement me
  // return name[0] === "R" || name[0] === "r" //name.charAt(0) === 'R' || name.charAt(0) === 'r'
  //   ? name + " plays banjo" //`${name} plays banjo`
  //   : name + " does not play banjo"; //`${name} does not play banjo`

  // !OR using REGULAR EXPRESSION
  /*
    In JavaScript regular expressions, the pattern /^r/i has the following meaning:

    - ^ is the start of a line anchor, which matches 
      the start of a string or the start of a line if the multiline flag m is used.
    - r is the literal character "r" that the pattern is looking for.
    - /i is the case-insensitive flag, which means that the pattern 
      will match both uppercase and lowercase versions of the letter "r".
    So, the regular expression /^r/i will match any string that starts 
    with the letter "r" in either uppercase or lowercase. 
    For example, it will match "rabbit", "Rome", "Red", "Raft", "raccoon", etc.
  */
  return /^r/i.test(name)
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("reem"));
