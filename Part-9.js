let arr = [10, 5, 12, 1, 3];
let n = arr.length;
for (let i = 0; i < n - 1; i++) {
  let minIndex = i;
  for (let j = 1; j < n; j++) {
    if (arr[minIndex] > arr[j] ) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
