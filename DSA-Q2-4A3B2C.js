// step 1-take input string
// step 2-Split that string into Array and store it into a variable
// step 2.1 create a new variale "count"and store value =1
// step 2.2 create a new variale "charI" and store blank string
// step 3-pick first element[i] of that array and compare with  next [i+1] element
// step 3.1-if ith element is identical with i+1th element count it and save into count variable
// step 3.2- else add "count+charI" into charI
// step 4- restore value of count =1
// step 5-At last print CharI

function checkOccurance(str) {
  let SPL = str.split("");
  // console.log(SPL);
  let count = 1;
  let charI = "";
  for (let i = 0; i < SPL.length; i++) {
    if (SPL[i] === SPL[i + 1]) {
      count++;
    } else {
      charI += count + SPL[i];

      count = 1;
    }
  }
  console.log(charI);
}
checkOccurance("AAAABBBCCCDDDDDEEEEEKKKKKLLLAAAAA");
