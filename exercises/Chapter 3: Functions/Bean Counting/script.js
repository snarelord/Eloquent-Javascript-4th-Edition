// “You can get the Nth character, or letter, from a string by writing [N] after the string (for example, string[2]). The resulting value will be a string containing only one character (for example, “b”). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
// Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.
// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.”

// Excerpt From
// Eloquent Javascript, 4th Edition
// Marijn Haverbeke
// This material may be protected by copyright.

function countBs(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "B") count++;
  }

  return count;
}

function countChar(string, char) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) count++;
  }

  return count;
}

function countCharReduce(string, char) {
  return string.split("").reduce((count, chars) => {
    return chars === char ? count + 1 : count;
  }, 0);
}

console.log(countBs("Buzzy Bees Bumbling bees"));
console.log(countChar("racecar", "a"));

// practicing with reduce()

function countAs(string) {
  return string.split("").reduce((count, char) => {
    return char === "A" ? count + 1 : count;
  }, 0);
}

function countCharReduce(string, char) {
  return string.split("").reduce((count, chars) => {
    return chars === char ? count + 1 : count;
  }, 0);
}

console.log(countAs("Apples And Pears"));
console.log(countCharReduce("racecar", "a"));
