// "https://jsonplaceholder.typicode.com/posts"

/*
Array.fromAsync

Used for 
Async Iterators => Async Generators / ReadableStreams
Sync Interators => Set, Map, 
Array like objects => objects with a length property and indexed elements
*/

const getPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return data;
};

(async () => {
  // Async Iterators
  const genFn = async function* () {
    const data = await getPosts();
    yield data;
  };
  const gen = genFn();
  const asyncIter = await Array.fromAsync(gen);

  // Sync Iterators
  const syncIter = await Array.fromAsync(new Set([1, 2, 3]));
  const syncIterPromise = await Array.fromAsync(
    new Set([
      new Promise(async (resolve) => {
        const posts = await getPosts();
        resolve(posts);
      }),
    ])
  );

  // Array like objects
  const syncObject = await Array.fromAsync({
    length: 1,
    0: "Apples",
  });
  const syncObjectPromise = await Array.fromAsync({
    length: 1,
    0: new Promise(async (resolve) => {
      const posts = await getPosts();
      resolve(posts);
    }),
  });

  console.log({
    asyncIter,
    syncIter,
    syncIterPromise,
    syncObject,
    syncObjectPromise,
  });
})();
