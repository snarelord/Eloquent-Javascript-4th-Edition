// “Write a program that creates a string that represents an 8×8 grid, using new-line characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.”

// Excerpt From
// Eloquent Javascript, 4th Edition
// Marijn Haverbeke
// This material may be protected by copyright.

let size = 8; // can change this value to generate a different size chessboard

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((y + x) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n"; // new line after each row
}

const pre = document.createElement("pre");
pre.textContent = board;

document.body.appendChild(pre);
