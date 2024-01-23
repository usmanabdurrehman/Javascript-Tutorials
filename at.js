const items = [
  { name: "Technology 101", category: "technology" },
  { name: "Plants and Animals", category: "biology" },
  { name: "Hydrochemicals Advanced", category: "chemistry" },
  { name: "Modern Javascript", category: "technology" },
];

console.log(items.at(-1));
console.log(items.at(-2));

let count;

if (false) {
  count = 8;
}

console.log((count ?? 0) * 20);
