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
// let myName = prompt("Enter Palidrome Values");
// let i = 0;
// let j = myName.length - 1;
// let palidrome = true;
// while (i < j) {
//   if (myName.charAt(i) != myName.charAt(j)) {
//     palidrome = false;
//   }
//   i++;
//   j--;
// }
// if (palidrome) console.log("palidrome");
// else console.log("No palidrome");
// let s = prompt();
// console.log(s);
// let toggle = "";
// for (let i = 0; i < s.length - 1; i++) {
//   let ch = s.charAt(i);
//   if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
//     toggle = toggle + String.fromCharCode(s.charCodeAt(i) + 32);
//   } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
//     toggle = toggle + String.fromCharCode(s.charCodeAt(i) - 32);
//   }
// }

// console.log(toggle);

// let s = prompt("Enter A number");
// let arr = new Array(128).fill(0);

// for (let i = 0; i < s.length; i++) {
//   let indx = s.charCodeAt(i);
//   arr[indx] = arr[indx] + 1;
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     console.log(String.fromCharCode(i)+ " appears at " + arr[i] + " times");
//   }
// }

// let m = "Mayur is The Best Coder";
// console.log(m.slice(1,4));

// let reverseStr = prompt("Enter The Reverse Value");
// let temp = "";
// for (let i = reverseStr.length - 1; i >= 0; i--) {
//   temp = temp + reverseStr[i];
// }
// if (temp === reverseStr) {
//   console.log("Palidrome");
// }
// console.log(temp);

// let reverseStr = prompt("Enter The String Values");
// let j = reverseStr.length - 1;
// let i = 0;
// let ispalindrome = true;
// while (i < j) {
//   if (reverseStr.charAt(i) != reverseStr.charAt(j)) {
//     ispalindrome = false;
//     break;
//   }
//   i++;
//   j--;
// }

// if (ispalindrome) console.log("palindrome");
// else {
//   console.log("Not Paldindrome");
// }

// let reverseChar = prompt("Enter The String Value");
// console.log(reverseChar);

// let toogle = "";

// for (let i = 0; i < reverseChar.length; i++) {
//   let ch = reverseChar.charAt(i);
//   if (reverseChar.charCodeAt(i) >= 65 && reverseChar.charCodeAt(i) <= 90) {
//     toogle = toogle + String.fromCharCode(reverseChar.charCodeAt(i) + 32);
//   } else if (
//     reverseChar.charCodeAt(i) >= 97 &&
//     reverseChar.charCodeAt(i) <= 122
//   ) {
//     toogle = toogle + String.fromCharCode(reverseChar.charCodeAt(i) - 32);
//   }
// }

// console.log(toogle);

// let str = prompt("Enter a Number");
// let arr = new Array(128).fill(0);

// for (let i = 0; i < str.length; i++) {
//   let index = str.charCodeAt(i);
//   arr[index] = arr[index] + 1;
// }
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     console.log(String.fromCharCode(i) + "appears at" + arr[i] + "times");
//   }
// }
