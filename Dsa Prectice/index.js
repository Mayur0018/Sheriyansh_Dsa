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
function avarage(arr){
  let sum = 0;
  for(let i =0; i<arr; i++){
    sum = sum + num;
    sum = sum / arr.length;
  }
  return sum;  
}

console.log(avarage([10,20,30]));
