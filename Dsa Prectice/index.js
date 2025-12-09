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
