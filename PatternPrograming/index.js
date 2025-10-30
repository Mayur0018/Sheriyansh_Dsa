// printing 5 star pattern
// let prompt = require("prompt-sync")();
// let a = prompt("Enter The Number");
// console.log(a);
// let n = Number(prompt("Enter The Number"));
// for (let i = 1; i < n; i++) {
//   for (let j = 1; j < n; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// let m = prompt("Enter The Number");
// for (let i = 1; i < m; i++) {
//   for (let j = 1; j < m; j++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// right angle triangle pattern
// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter The Number"));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// mirror rightangle pattern

// for(let i = 1; i<=n; i++){
//   for(let j = 1; j<=n-i+1; j++){
//     process.stdout.write(" ");
//   }
//   for(let j = 1; j<=i; j++){
//     process.stdout.write("*");
//   }
//   console.log();

// }
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j < 2*n-1; j++) {
//     if (i == j || i + j == 2*n) {
//       process.stdout.write("* ");
//     }
//     process.stdout.write("  ");
//   }
//   console.log();
// }

// process.stdout.write("Hellow");
// process.stdout.write("Mayur Nishad is The Best Coder");

// process.stdout.write("*");
// process.stdout.write("*");
// process.stdout.write("*");
// process.stdout.write("*");
// process.stdout.write("*");
// process.stdout.write("*");
// process.stdout.write("*");
// process.stdout.write("*");
// process.stdout.write("*");

for (let i = 0; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
