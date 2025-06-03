// “The previous chapter introduced the standard function Math.min that returns its smallest argument. We can write a function like that ourselves now. Define the function min that takes two arguments and returns their minimum.”

// Excerpt From
// Eloquent Javascript, 4th Edition
// Marijn Haverbeke
// This material may be protected by copyright.

function returnMin(num1, num2) {
  if (num1 < num2) return num1;
  if (num1 > num2) return num2;
}

console.log(returnMin(100, 6));
