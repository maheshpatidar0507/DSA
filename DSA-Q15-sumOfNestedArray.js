// Q-const input = [1, 2, [3, [4], [5, 6]], [7]];
// Find Sum of Nested Array
// -------------------------Algorithm--------------------------

// step1- Create a function with 'input' parameter
// Step2- Create a variable with value=0
// Step3- Inside function take for loop and pick  first value from array.
// and check if it is number then add with result otherwise check for nested array
// Step 4- for nested array create another loop, pick first value  and repeat  step 3
// Step 5 return result

// --------------------------Code-----------------------------

const sumOfNestedArray = (input) => {
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] == "number") {
      result += input[i];
    } else if (Array.isArray(input[i])) {
      result += sumOfNestedArray(input[i]);
    }
  }
  return result;
};

console.log(sumOfNestedArray([1, 2, [3, [4], [5, 6]], [7]]));
// output 28
console.log(sumOfNestedArray([[[1, 2, [3, [4], [5, 6]], [7]], 8], 9, 10]));
// output 55
