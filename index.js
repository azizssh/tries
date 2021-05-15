const words = ["action", "act", "dog"];

const trie = Object.create(null);

words.forEach((word) => {
  //traverse the word
  let curNode = trie;
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    let letterVal = curNode[c];
    if (!letterVal) {
      curNode[c] = {};
    }
    curNode = curNode[c];

    if (i === word.length - 1) {
      curNode.next = null;
    }
  }
});

console.log(JSON.stringify(trie, null, 3));
