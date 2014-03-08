function WordTrie() {
  this.isWord = false;
  this.characters = [];
}

WordTrie.prototype.learnWord = function(word) {
  // reached end of word (or given no word)
  if (word.length === 0) {
    return;
  }

  var charKey, child;
  // save the first character, then extract/pop it from word
  charKey = word[0];
  word = word.substr(1);

  // add the new character if it doesn't exist already
  if (this.characters[charKey] === undefined) {    
    this.characters[charKey] = new WordTrie();
  }

  // if at end of word, create child node and set isWord to true
  if (word.length === 0) {
    this.characters[charKey].isWord = true;
    return;
  }

  // have the child learn the rest of the word
  child = this.characters[charKey];
  child.learnWord(word);
};

WordTrie.prototype.printTrie = function(parent) {
  console.log("parent: " + parent);
  console.log("isWord: " + this.isWord);
  console.log("kids:   " + Object.keys(this.characters));
  console.log("---------------------------------------");
  for (var child in this.characters) {
    this.characters[child].printTrie(child);
  }
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




