// “Arrays have a reverse method that changes the array by inverting the order in which its elements appear.

// For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an array as its argument and produce a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing its elements. Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?"

function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    // my condition was initially incorrect for a reverse loop, forgot I needed to stop at 0 and not arr.length
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArray([1, 2, 4, 6, 7]));

function reverseArrayInPlace(arr) {
  // need to mutate the array passed in so elements are in reverse order
  // cannot return a new array, needs to be mutated
  // two pointer approach
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // remember how you can swap elements USE TEMP
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
}
let arrValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrValue);
console.log(arrValue);
