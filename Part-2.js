// let amount = Number(prompt("Enter The Amount"));
// let dis = 0
// if (amount > 0 && amount >= 50000) {
//   dis  = 10
// } else if (amount > 5000 && amount <= 7000) {
//   dis = 10
// } else if (amount > 7000 && amount <= 1000) {
// dis = 20
// }

// console.log(amount - Match.floor(dis* amount));

// bijli bill

// let Unit = Number(prompt("Enter Electicity Unit"));
// let amount = 0;
// if (Unit > 400) {
//   amount = (Unit - 400) * 13;
//   Unit = 400;
// }
// if (Unit > 400) {
//   amount = (Unit - 400) * 13;
//   Unit = 400;
// }

// if (Unit > 200 && Unit <= 400) {
//   amount == (Unit - 200) * 8;
//   Unit = 400;
// }
// if (Unit > 100 && Unit <= 200) {
//   amount += (Unit - 100) * 6;
//   Unit = 100;
// }

// amount += Unit * 4;
// console.log(amount);

// for(let i =0; i<=5; i++ ){
//   console.log("Mayur",i);
// }

// for loop
// const fail = "";
// for(i = 1; i<=20; i++){
//   console.log(i);
// }
// console.log(i+"fail");

// coding qustions

// var n = Number(prompt("Enter The Name"));

// if (isNaN(n)) {
// } else if (n > 0) {
//   var sum = 0;
//   for(let i = 0; i<=n; i++){
//     sum = sum + i
//   }
//   console.log(sum);

// } else {
//   console.log("Shubld be Positive more than");
// }
// var pr = prompt("kaha tak Add Karoge?");
// var n = Number();

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   if (isNaN(n)) {
//     console.log("Invalid Input");
//   } else if (n > 0) {
//     var primeHai = true;
//     for (var i = 1; i <= n; i++) {
//       if (n % i === 0) {
//         console.log(i);
//       }
//     }
//     console.log(sum);
//   } else {
//     console.log("should be +ve and more than 0");
//   }
// }

// function isPrime(n) {
//   if (n <= 1) return false;
//   if (n == 2) return true;
//   if(n%2 ==0) return false;
// }

// for(var i = 1; i<23; i++){
//   let space = "";
//   for(var j = 1; j<i; j++){

//     space += "*"
//   }
//   console.log(space);
// }

// for(let i = 0; i<20; i++){
//   if(i === 11) continue
//   else console.log(i);

// }

// While Loop
// var i = 0;

// while (i < 23) {
//   console.log(i);

//   i++;
// }

// jaha pe itreation ki value pata ho ki loop yaha tak chalana tab tak for loop la use kiya jata
// other wise jaha takk hame looop chalna tab while loop ka use kiya jata hai
// var a = "";
// while (a !== "exit") {
//   a = prompt("kuch bhi dedo(exit for close)");
// }

// do while

// do{
//   console.log("pretice make u perefct");
// }
// while(12>13)

// let random = Math.floor(Math.floor(Math.random() * 100)) + 1;
// let guess = -1;
// while (guess !== random) {
//   guess = Number(prompt("Guss The Number "));
//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     console.log("try again b/w 1-100");
//     continue;
//   }
//   if (guess > random) {
//     console.log("too High ,try High");
//   } else if (guess < random) {
//     console.log("too low , try again");
//   } else {
//     console.log("congrets and number was ", guess);
//   }
//   break
// }

// type cohersion

// Math.floor use for not get value in the point

// let a = 13 == "13";
// console.log(a);

// let ans = Number(prompt("Enter the Number"));

// if(isNaN){
//   if(age > 18){
//     console.log("Your Eligible To Give The Vote");

//   }else{
//     console.log("your not Eligible To Give The Vote ");

//   }
// }

// Range Qsution

// let amount = Number(prompt("Enter The Number" ));
// let dis = 0;
// if(amount > 0 && amount <=5000){
//   dis = 5
// }else if(amount > 5000 && amount <=7000){
//   dis = 10;
// }
// else if(amount > 7000 && amount <=9000){
//   dis = 10;
// }
// else if(amount > 9000){
//   dis = 50;
// }
// console.log(amount - Math.floor((dis*amount)/100 + 1000) );

// let amount = 4823;

// if(amount >= 500){
//  console.log(Math.floor(amount/500));
//  amount = amount % 500;
// }

// ternary operator

12 < 10
  ? console.log("Gabu is The Best Rider")
  : console.log("Show Yemoto is The Best Rider");

const number = 0;
console.log(num > 0 ? "positive" : num < 0 ? "negative" : "zero");
