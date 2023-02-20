// Write code to find longest word from a string using functions

// ----------------------------------- Algo ------------------------------------
// step 1-Split given string into diffrent words and store it into a variable.
// step 2-Create a blank variable.
// step 3-Pick first word and compare its length with lenth of blank variable
// Step 3.1-If length is gratern then replace with blank vriable(i.e longest)
// step 4- Repeat the same method for all next words
// step 5- Return longest
// ----------------------------------- code ----------------------------------------
function longestWordFromStr(str) {
  let splitedArr = str.split(" ");
  console.log("Given String =>", str);
  let longest = "";
  for (let i = 0; i < splitedArr.length; i++) {
    if (splitedArr[i].length > longest.length) {
      longest = splitedArr[i];
    }
  }
  console.log("longest word=> ", longest);
}
longestWordFromStr("hello how are and what isyoubacks your name "); //isyoubacks
longestWordFromStr("My name is Mahesh Patidar"); //Patidar
