const counts = [
  [1, 2, 3],
  [3, 5, 5],
  [4, 3],
];
const countsDeep = [[[1, 2, 3]], [[3, 5, 5]], [[4, 3]]];

console.log(counts.reduce((acc, countArr) => countArr.length + acc, 0));

console.log(countsDeep.flat(2).length);
