function smash(words) {
  // Remove any leading or trailing whitespace from the words in the array.
  words = words.map((word) => word.trim());

  // Join the words in the array into a single string, with a space between each word.
  const sentence = words.join(" ");

  // Return the sentence.
  return sentence;
}
