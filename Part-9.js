// let arr = [10, 5, 12, 1, 3];
// let n = arr.length;
// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j]; 
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap arr[i] and arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const nums = [1, 2, 3, 4, 5];
console.log(shuffleArray(nums)); // Output: Random shuffle like [3,1,5,2,4]
