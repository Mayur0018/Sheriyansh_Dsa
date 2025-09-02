// array is the liner data structure thats store multiple values
// let box = 0;
// for(let i =0; i<=10; i++){
//     box = box + i;
// }
// console.log(box);

// finding a maximum value off array
// let arr = [10, 50, 40, 30, 20, 100,400];
// let max = arr[0];
// let secondlargest = arr[1];

// for (let i = 1; i <= arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }

// console.log(max);
// console.log(secondlargest);

// find second largest of Array

let arr = [10, 20, 76, 80, 40, 100];
let maxvalue = Math.max(arr[0], arr[1]);
let minvalue = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (arr[i] > maxvalue) {
    minvalue = maxvalue;
    maxvalue = arr[i];  
  } else if (arr[i] > minvalue && maxvalue !== arr[i]) {
    minvalue = arr[i];
  }
}
console.log(minvalue);
