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
// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);
// let k = Number(prompt("Enter Ther K value"));
// k = k % arr.length;

// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }
// console.log(temp);

// Remove Dulicates From The Sorted Array

// var removeDuplicates = function (nums) {
//   let j = 1;
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] != nums[i + 1]) {
//       nums[j] = nums[i + 1];
//       j++;
//     }
//   }
//   return j;
// };
// console.log(removeDuplicates([0, 1, 2, 3]));

// merge two Sorted Array
// let arr1 = [2, 4, 6, 8, 10];
// let arr2 = [1, 3, 7, 11];
// let mergeArray = new Array(arr1.length + arr2.length);
// let i = 0,
//   j = 0,
//   k = 0;

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     mergeArray[k++] = arr1[i++];
//   } else {
//     mergeArray[k++] = arr2[j++];
//   }
// }
// while (j < arr2.length) {
//   mergeArray[k] = arr2[j++];
// }
// while (i < arr1.length) {
//   mergeArray[k] = arr1[i++];
// }
// console.log(mergeArray);

// var maxprofit = function (prices) {
//   let maxprofit = 0;
//   let minprofit = prices[0];
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minprofit) {
//       minprofit = prices[i];
//     }
//     let profit = prices[i] - minprofit;
//     maxprofit = Math.max(maxprofit, profit);
//   }
//   return maxprofit;
// };

// console.log(maxprofit([10, 0, 50, 80, 400]));

// let arr = [0, 1, 0, 2, 0, 2, 2, 0, 1, 2];
// let i = 0;
// j = 0;
// k = arr.length - 1;

// while (i < k) {
//   if (arr[i] === 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j++;
//   } else if (arr[i] == 2) {
//     let temp = arr[i];
//     arr[i] = arr[k];
//     arr[k] = temp;
//     k--;
//   } else {
//     i++;
//   }
// }
// console.log(arr);

// var maxSuarray = function (nums) {
//   let max = -Infinity;
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum = sum + nums[i];
//     max = Math.max(max, sum);
//     if (sum < 0) {
//       sum = 0;
//     }
//   }
//   return max;
// };

// console.log(maxSuarray([-2, 1, -3, -1, 2, 1, -5, 4]));

// find majority of Array
// let arr = [2, 2, 1, 1, 1, 2, 2];
// let ans = arr[0];
// let count = 1;
// for (let i = 1; i < arr.length; i++) {
//   if (count == 0) {
//     ans = arr[i];
//     count = 1;
//   } else if (ans == arr[i]) {
//     count++;
//   } else {
//     count--;
//   }
// }
// console.log(ans);
// console.log(count);

// traping rain water

// var trap = function (height) {
//   let left = new Array(height.length);
//   let right = new Array(height.length);
//   let maxLeft = height[0],
//     maxRight = height[height.length - 1];
//   (left[0] = maxLeft), (right[right.length - 1] = maxRight);

//   for (let i = 1; i < height.length; i++) {
//     maxLeft = Math.max(height[i], maxLeft);
//     left[i] = maxLeft;
//   }
//   for (let i = height.length - 2; i > 0; i--) {
//     maxRight = Math.max(height[i], maxRight);
//     right[i] = maxRight;
//   }
//   let ans = 0;
//   for (let i = 0; i < height.length; i++) {
//     ans += Math.min(left[i], right[i] - height[i]);
//   }
//   return ans
// };
// console.log(trap[10,20,30,40,50]);
