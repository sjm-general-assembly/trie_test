function WordTrie() {
  this.isWord = false;
  this.chars = [];
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

  this.chars[charKey] = new WordTrie();
  if (word.length === 0) {
    this.chars[charKey].isWord = true;
    return;
  }

  child = this.chars[charKey];
  child.learnWord(word);
};

WordTrie.prototype.printTrieNode = function() {
  console.log("isWord: " + this.isWord);
  console.log("kids:   " + Object.keys(this.chars));
  console.log("---------------------------------------");
  //this.chars.forEach(function(element, index, array) {
  //   element.printTrie();
  // });
};

var wt = new WordTrie();
var word = "bat";
//wt.learnWord(word);

var y = new WordTrie();
y.chars['b'] = new WordTrie();
y.chars['b'].chars['a'] = new WordTrie();
y.chars['b'].chars['a'].chars['t'] = new WordTrie();
y.chars['b'].chars['a'].chars['t'].isWord = true;
y.chars['b'].chars['a'].chars['r'] = new WordTrie();
y.chars['b'].chars['a'].chars['r'].isWord = true;
y.chars['b'].chars['y'] = new WordTrie();
y.chars['b'].chars['y'].chars['e'] = new WordTrie();
y.chars['b'].chars['y'].chars['e'].isWord = true;




