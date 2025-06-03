// “Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of a string by writing .length after it.
// let abc = "abc";
// console.log(abc.length);
// // → 3”

// Excerpt From
// Eloquent Javascript, 4th Edition
// Marijn Haverbeke
// This material may be protected by copyright.

const body = document.body;
for (let i = "#"; i.length < 8; i += "#") {
  const line = document.createElement("tr");
  line.textContent = i;
  body.appendChild(line);
}
