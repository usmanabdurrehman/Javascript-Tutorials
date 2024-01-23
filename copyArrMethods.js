require("core-js");

const items = [
  { name: "Technology 101", category: "technology" },
  { name: "Plants and Animals", category: "biology" },
  { name: "Hydrochemicals Advanced", category: "chemistry" },
  { name: "Modern Javascript", category: "technology" },
];

// toReversed, toSorted, toSpliced
console.log({
  splice: items.toSpliced(0, 1),
  reverse: items.toReversed(),
  sort: items.toSorted((a, b) => a.name?.localeCompare(b?.name)),
});
