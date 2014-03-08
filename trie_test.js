function WordTrie() {
  this.isWord = false;
  this.characters = [];
}

WordTrie.prototype.learnWord = function(word) {
  // reached end of word
  if (word.length === 0) {
    return;
  }

  var charKey, child;

  // save the first character, then extract/pop it
  charKey = word[0];
  word = word.substr(1);

  this.characters[charKey] = new WordTrie();
  if (word.length === 0) {
    this.characters[charKey].isWord = true;
    return;
  }

  child = this.characters[charKey];
  child.learnWord(word);
};

WordTrie.prototype.printTrieNode = function() {
  console.log("isWord: " + this.isWord);
  console.log("kids:   " + Object.keys(this.characters));
  console.log("---------------------------------------");
  //this.characters.forEach(function(element, index, array) {
  //   element.printTrie();
  // });
};

var wt = new WordTrie();
var word = "bat";
//wt.learnWord(word);

var y = new WordTrie();
y.characters['b'] = new WordTrie();
y.characters['b'].characters['a'] = new WordTrie();
y.characters['b'].characters['a'].characters['t'] = new WordTrie();
y.characters['b'].characters['a'].characters['t'].isWord = true;
y.characters['b'].characters['a'].characters['r'] = new WordTrie();
y.characters['b'].characters['a'].characters['r'].isWord = true;
y.characters['b'].characters['y'] = new WordTrie();
y.characters['b'].characters['y'].characters['e'] = new WordTrie();
y.characters['b'].characters['y'].characters['e'].isWord = true;




