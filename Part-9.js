// bubble sort
let arr = [10, 20, 30, 40, 50];
let n = arr.length;
console.log(n);

for (let i = 0; i < n - 1 - i; i++) {
  for(let j =0; j<n-1-i; j++){
    if(arr[j]>arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1];
        arr[j+1] = temp
    }
  }
}

console.log(arr);
