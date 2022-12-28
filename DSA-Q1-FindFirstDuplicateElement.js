//-------------------------- Algorithm for Duplicate element in an Array------------------------------------------------

// step 1-take input Array store in a variable
// step 2-Pick first charactor from Array and compare with rest charactor using for loop
// step 3-If ith  element of array is identical any of other(rather than ith) then
// print that element else contiue
//  step 4-if duplicate is not exist then print "Duplicate  element is not exist"

function findFirstDupicateElement() {
  let Arr = ["c", "o", "m", "a", "n", "d", "j", "D"];
  let result = "No Any";
  for (let i = 0; i < Arr.length; i++) {
    //   console.log(Arr[i]);
    for (let j = 0; j < Arr.length; j++) {
      if (i !== j) {
        if (Arr[i] === Arr[j].toLowerCase()) {
          result = Arr[i];
          break;
        }
      }
    }
  }
  console.log(result, " is duplicate element");

  if (result) {
    console.log("Duplicate Exist");
  } else {
    console.log("Duplicate don't Exist");
  }
}
findFirstDupicateElement();
