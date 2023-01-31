// Q
// The task is to find the first Equilibrium Point in an array.
// Equilibrium Point in an array is a position such that the sum of elements before it
// - is equal to the sum of elements after it.
// Note: Retun the index of Equilibrium point. (1-based index)
// Input: n = 5 , A[] = {1,3,5,2,2} Output: 3

//---------------Algorithm--------------------------------
// Step 1- Create a function with two parameter (arr,n)
// Step 2-Store length of arr in n i.e. n=arr.length and create two more variables
//   --that are sumbefore and sumafter and assign 0
// Step 3-Check if n=1 then return "Equilibrium point is 1", else follow Step 4
// Step 4- Take second value from array and sum all value before that second value
//   -- and  sum all value after that second value using for loop
// Step 5-Compare sumbefore and sumafter; if both are equal: print position of  that second value
//  other wise take next value and follow Step 4 and step 5

//---------------Code-------------------------------------
function equilibriumPoint(arr, n) {
  n = arr.length;
  //   console.log(n);
  let sumBefore = 0;
  let sumAfter = 0;
  let Equilibrium = 0;
  if (n === 1) {
    return "Equilibrium point is 1";
  } else if (arr[0] === 0 && n === 2) {
    return "Equilibrium point is 2";
  } else if (n > 2) {
    for (let i = 1; i < n; i++) {
      for (let j = 0; j <= i; j++) {
        sumBefore += arr[j];
      }
      for (let k = i + 1; k < n; k++) {
        sumAfter += arr[k];
      }
      if (sumBefore === sumAfter) {
        Equilibrium = i + 1;
      }
    }
  }
  return Equilibrium;
}

console.log("@3", equilibriumPoint([1, 3, 5, 2, 2]));
console.log("@3", equilibriumPoint([2, 6, 5, 8])); // 3
console.log("@1", equilibriumPoint([1])); // 1
console.log("@2", equilibriumPoint([0, 1])); // 2

console.log("@3", equilibriumPoint([1, 3, 5, 2, 2])); // 3
console.log("@3", equilibriumPoint([2, 6, 5, 8])); // 3
console.log("@1", equilibriumPoint([1])); // 1
console.log("@2", equilibriumPoint([0, 1])); // 2
