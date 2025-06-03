// “Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print “Fizz” instead of the number, and for numbers divisible by 5 (and not 3), print “Buzz” instead.
// When you have that working, modify your program to print “FizzBuzz” for numbers that are divisible by both 3 and 5 (and still print “Fizz” or “Buzz” for numbers divisible by only one of those).

// Excerpt From
// Eloquent Javascript, 4th Edition
// Marijn Haverbeke
// This material may be protected by copyright.

function FizzBuzz(num, fizzNum, buzzNum) {
  const container = document.createElement("div");
  container.id = "fizzbuzz";

  for (let i = 1; i <= num; i++) {
    const p = document.createElement("p");

    if (i % fizzNum === 0 && i % buzzNum === 0) {
      p.textContent = "FizzBuzz!";
      container.appendChild(p);
      continue;
    }

    if (i % fizzNum === 0) {
      p.textContent = "Fizz";
      container.appendChild(p);
      continue;
    }

    if (i % buzzNum === 0) {
      p.textContent = "Buzz";
      container.appendChild(p);
      continue;
    }

    p.textContent = i;
    container.appendChild(p);
  }

  document.body.appendChild(container);
}

FizzBuzz(100, 3, 5);
