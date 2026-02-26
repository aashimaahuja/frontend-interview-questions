function join(arr, separator = ",") {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i] + separator;
  }
  return str;
}

console.assert(["a", "b", "c"].join() === "a,b,c", "Test 1 Failed");

// 2. Custom Separator
console.assert(["a", "b", "c"].join("-") === "a-b-c", "Test 2 Failed");

// 3. Empty Array
console.assert([].join(",") === "", "Test 3 Failed");
