// let username = "ali";
// console.log(username);
// let s = "mayur";
// console.log(s.length);

// let username = "mayurNishad";
// for(let i =0; i<username.length;i++){
//   console.log(username[i]);
// let captilize =   username[i].toUpperCase();
//   console.log(captilize);

// }
// function reverseString( username){
// for (let index = username.length - 1; index >= 0; index--) {
//   console.log(username[index]);
// }
// }
// console.log(reverseString("Mayur Nishad"));
// function userString(username){
//     let reverse = "";
//     for(let i =username.length -1; i>=0; i--){
//         reverse += username[i];
//     }
//     return reverse;
// }

// console.log(userString("Mayur"));

// palidrome of String

// let s = "Sheriyansh";
// let rev = "";

// for (let i = s.length - 1; i > 0; i--) {
//   rev +=  s[i];
//   if (rev === s) {
//     console.log("Palindrome");=-0-=0
//   } else {
//     console.log("No Palindrome");
//   }
// }
let myName = "Mayur Nishad";
let i = 0;
let j = myName.length - 1;
let palidrome = true;
while (i < j) {
  if (myName.charAt(i) != myName.charAt(i)) {
    palidrome = false;
  }
  i++;
  j--;
}
