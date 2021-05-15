const words = ["action", "act", "dog"];

const trie = Object.create(null);

words.forEach((word) => {
  //traverse the word
  let curNode = trie;
  for (let c of word) {
    let letterVal = curNode[c];
    if (!letterVal) {
      curNode[c] = { next: null };
      curNode = curNode[c].next;
    }
  }
});

console.log(trie);
