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

// let arr = [10, 20, 76, 80, 40, 100];
// let maxvalue = Math.max(arr[0], arr[1]);
// let minvalue = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > maxvalue) {
//     minvalue = maxvalue;
//     maxvalue = arr[i];
//   } else if (arr[i] > minvalue && maxvalue !== arr[i]) {
//     minvalue = arr[i];
//   }
// }
// console.log(minvalue);

// reverse Array with extra space

// let arr = [10, 20, 30, 40, 50, 60];
// let i = 0, j = arr.length - 1;

// while (i < j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);

// let arr = [0, 1, 1, 0, 1, 0];
// let j = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
// }
// console.log(arr);

// Advance Array
// left rotation by 1 Element
// let arr = [10, 20, 30, 40, 50];
// let copy = arr[0];
// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = copy;
// console.log(arr);

// Right Rotation By 1 Element
// let copy2 = arr[arr.length-1];
// for(let i = arr.length-1; i>0; i--){
//   arr[i] = arr[i-1];
// }
// arr[0] = copy2;
// console.log(arr);

// let arr = [10, 20, 30, 40, 50, 60];
// let copy = arr[0];
// let k = Number(prompt("Enter K Number"));
// k = k % arr.length;
// let count = 0;
// for (let j = 0; j < k; j++) {
//   count++;
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = copy;
// }
// console.log(arr);
// console.log(count);
