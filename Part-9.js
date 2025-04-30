// let arr = [10, 5, 12, 1, 3];
// let n = arr.length;
// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - 1 - i; j++) {
//     if(arr[j]>arr[j+1]){
//       let temp = arr[j];
//       arr[j] = arr[j+1];
//       arr[j+1] = temp;
//     }
//   }
// }

function findMaxNumber(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
const numbers = [18, 45, 33, 7];
console.log(findMaxNumber(numbers));
