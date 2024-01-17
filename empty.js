let user;

// true will assign a value, false wont
if (false) {
  user = { id: 1, name: "David" };
}

if (user) console.log(user.id);
console.log(user?.id);

let count;

if (false) {
  count = 8;
}

console.log((count ?? 0) * 20);
