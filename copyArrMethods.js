const items = [
  { name: "Technology 101", category: "technology" },
  { name: "Plants and Animals", category: "biology" },
  { name: "Hydrochemicals Advanced", category: "chemistry" },
  { name: "Modern Javascript", category: "technology" },
];

// toReversed, toSorted, toSpliced
console.log(items.toSpliced(0, 1));
console.log(items.toReversed());
console.log(items.toSorted((a, b) => a.name?.localeCompare(b?.name)));

// with
const copiedItems = [...items];
items[0] = { name: "Fullstack React", category: "technology" };

console.log(items);
// console.log(items.with(1, { name: "Fullstack React", category: "technology" }));
