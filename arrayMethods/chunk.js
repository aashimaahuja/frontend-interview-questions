//[1,2,3,4,5,6]

function chunk(arr, chunkSize) {
  let count = 0;
  let res = [];
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    count++;
    temp.push(arr[i]);
    if (count === chunkSize || i === arr.length - 1) {
      res.push(temp);
      count = 0;
      temp = [];
    }
  }
  return res;
}

console.log(chunk([1, 2, 3, 4, 5], 4));
