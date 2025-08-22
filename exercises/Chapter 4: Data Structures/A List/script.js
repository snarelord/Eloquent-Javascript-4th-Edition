// “As generic blobs of values, objects can be used to build all sorts of data structures. A common data structure is the list (not to be confused with arrays). A list is a nested set of objects with the first object holding a reference to the second, the second to the third, and so on.

// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };”

// “A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as its argument. Also write a listToArray function that produces an array from a list. Add the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.”

function arrayToList(arr) {
  let list = null; // starting with an empty list
  for (let i = arr.length - 1; i >= 0; i--) {
    // needs to loop backwards to build the list correctly, as this makes it easier to build the nested structure
    list = { value: arr[i], rest: list }; // for each element it creates a new object with these properties
  }
  return list;
}

console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
  if (list === null) return []; // edge case
  let arr = []; // start with an empty array
  for (let node = list; node; node = node.rest) {
    // go through each node in the list, for each node it adds the value to array, node.rest moves to the next node
    arr.push(node.value);
  }
  return arr;
}

console.log(listToArray(arrayToList([1, 2, 3])));

// alternatively

function secondListToArray(list) {
  let arr = [];
  let node = list;

  while (node !== null) {
    arr.push(node.value);
    node = node.rest;
  }
  return arr;
}
console.log(secondListToArray(arrayToList([1, 2, 3])));
