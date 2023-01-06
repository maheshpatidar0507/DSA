//    Question-Find tripplet of sum =k usinh given input
//    let Input = [12, 3, 4, 1, 6, 9];
//    let K = 24;

// Method First----------
//   step1- Pick first value form  input using for loop
//   step2- Pick second value form  input using for loop form next index
//   step3- Pick third value form  input using for loop form next index
//   step4- if sum of all three value is equal to k then push these values into a blank aray
// step 4(1) else pick next(4th) value and add.If sum of all three value is equal to k then push these values into a blank aray //
// step 5- If we get desire triplet then push and return
// step 6 - Else return "Triplet isn't available For given Sum"

function findPairSumK(Input, K) {
  let result = [];
  for (let i = 0; i < Input.length; i++) {
    for (let j = 1; j < Input.length; j++) {
      for (let l = 2; l < Input.length; l++) {
        if (Input[i] + Input[j] + Input[l] === K) {
          if (result.length < 3) result.push(Input[i], Input[j], Input[l]);
        } else {
          return "Triplet isn't available For given Sum";
        }
      }
    }
  }
  return result;
}
console.log(findPairSumK([12, 3, 4, 1, 6, 9], 24));
