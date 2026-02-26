// {
// 'admin': [ { name: "Aashi", role: "admin" },{ name: "Jane", role: "admin" }]
//}

function groupBy(arr, groupedField) {
  let obj = {};
  arr.forEach((element) => {
    let key = element[groupedField];
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(element);
  });

  return obj;
}

const users = [
  { name: "Aashi", role: "admin" },
  { name: "John", role: "user" },
  { name: "Jane", role: "admin" },
];

console.log(groupBy(users, "role"));
