// Question 1 : Reverse String
function reverseString(Str) {
  let result = "";
  for (let i = Str.length - 1; i >= 0; i--) {
    result = result + Str[i];
  }
  return result;
}

console.log(reverseString("Mayur Best Hai Or Rahega"));

// Return indices of two numbers whose sum equals target.

function tosum(nums, targets) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === targets) {
        return [i, j];
      }
    }
  }
}
console.log(tosum(10));

// Shift all zeroes to the end while keeping order.
function moveZeros(nums) {
  let index = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[index];
      nums[index] = temp;
      index++;
    }
  }
  return nums;
}
console.log(moveZeros([10, 0, 0, 20, 30, 0, 0]));

// Find the largest number in an array.
function findMax(str) {
  let max = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] > max) {
      max = str[i];
    }
  }
  return max;
}
console.log(findMax([10, 20, 30, 40, 50]));

// Write a function to return the smallest element in an array.
function findMin(str){
  let min = str[0];
  for(let i =0; i<str.length; i++){
    if(str[i]<min){
      min = str[i]
    }
  }
  return min;
}
console.log(findMin([10,20,8,30]));
