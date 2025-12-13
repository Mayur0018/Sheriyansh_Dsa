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
function findMin(str) {
  let min = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] < min) {
      min = str[i];
    }
  }
  return min;
}
console.log(findMin([10, 20, 8, 30]));

// Return count of even numbers in an array.

function CountEvenNumers(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(CountEvenNumers([10, 50, 55, 11]));

// Check The Palidrome Number
function Palidrome(str) {
  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString = reverseString + str[i];
    if (str === reverseString) {
      console.log("String is Palindrome");
    } else {
      console.log("String is Not Palindrome");
    }
  }
  return reverseString;
}

console.log(Palidrome("aa"));

// Remove Duplicates From Array
function RemoveDuplicates(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let isduplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (str[i] === result[j]) {
        isduplicate = true;
        break;
      }
    }
    if (!isduplicate) {
      result.push(str[i]);
    }
  }
  return result.join("");
}
console.log(RemoveDuplicates("Mayurrrrrrrrrrr"));

// Sum Of Array Elements
function sumOfArray(sumofvalues) {
  let sum = 0;
  for (let i = 0; i < sumofvalues.length - 1; i++) {
    sum = sum + sumofvalues[i];
  }
  return sum;
}
console.log(sumOfArray([10, 20, 30]));

// find the second largerst Number
function secondLrgest(arr) {
  let max = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (arr[i] > second && arr[i] !== max) {
      second = arr[i];
    }
  }
  return second;
}
console.log(secondLrgest([10, 30, 40, 50, 70]));

// Count Total digit in Number
function countDigits(nums) {
  let count = 0;
  while (nums > 0) {
    nums = Math.floor(nums / 10);
    count++;
  }
  return count;
}
console.log(countDigits(1000));

// Find The Factorial in Number
function findFactorial(nums) {
  let result = 1;
  for (let i = 1; i < nums; i++) {
    result = result * i;
  }
  return result;
}
console.log(findFactorial(4));

// find Number is prime
function isprime(nums) {
  if (nums < 1) return false;
  for (let i = 0; i < nums; i++) {
    if (nums % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(isprime(3));

// Find the Avrage of Array
function avarage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  const avrageVale = sum / arr.length;
  return avrageVale;
}

console.log(avarage([10, 20, 30]));

// mising number from 1 to n
function misingNum(arr, n) {
  let expected = 0;
  let actual = 0;
  for (let i = 0; i <= n; i++) {
    expected += i;
  }
  for (let i = 0; i < arr.length; i++) {
    actual += arr[i];
  }
  return expected - actual;
}

// remove all spaces
function removespces(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      res = res + str[i];
    }
  }
  return res;
}
console.log(removespces("M a y ur Best Hai or Rhega"));

// Longest Substring Without Repeating Characters
function lenghtOfLongestSubstring(s) {
  let set = {};
  let left = 0;
  maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    while (set[s[right]]) {
      delete set[s[left]];
      left++;
    }
    set[s[right]] = true;
    if (right - left + 1 > maxLen) maxLen = right - left + 1;
  }
  return maxLen;
}
console.log(lenghtOfLongestSubstring("dfdsfs"));

// TWO SUM PROBLEM 
function towsum(num,target){
  for(let i =0; i<num.length; i++){
    for(let j = i + 1; j<num.length; j++){
      if(num[i] + num[j] === target) return [i,j];
    }
  }
  return [];
}

console.log(towsum([2,7,11,15],9));

// maximum Product Subarray 

function maxProduct(nums){
  let maxProd = nums[0],minpod = nums[0], result = nums[0];
  for(let i =1; i<nums.length; i++){
    let tempMax = maxProd;
    maxProd = Math.max(nums[i],nums[i]*maxProd, nums[i]*minpod);
    minpod = Math.min(nums[i],nums[i]*tempMax,nums[i]*minpod);
    if(maxProd > result) result = maxProd
  }
  return result;
}
console.log(maxProduct([2,3,-2,4]));


// Rotate Array By K Steps 

