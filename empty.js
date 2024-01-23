let user;

// true will assign a value, false wont
if (true) {
  user = { id: 1, name: "David" };
}

// console.log(user?.id);

let count;

if (false) {
  count = 8;
}

console.log((count ?? 0) * 20);
