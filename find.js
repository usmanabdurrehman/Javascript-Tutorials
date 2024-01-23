require("core-js");

// findLast, findLastIndex
const items = [
  { name: "Technology 101", category: "technology" },
  { name: "Plants and Animals", category: "biology" },
  { name: "Hydrochemicals Advanced", category: "chemistry" },
  { name: "Modern Javascript", category: "technology" },
];

console.log(items.findLastIndex((item) => item.category === "technology"));
console.log(items.findLast((item) => item.category === "technology"));
