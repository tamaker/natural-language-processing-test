// https://blog.logrocket.com/natural-language-processing-for-node-js/

var natural = require('natural');

// TOKENIZE - SPLIT WORDS
var tokenizer = new natural.WordTokenizer();
var myWords = tokenizer.tokenize("Harry Styles is a great singer.");
console.log(myWords);



// TOKENIZATION and stemming -- EACH WORD and root of word, no stop words
//console.log("How do I find information on committee meetings?".tokenizeAndStem());
//natural.PorterStemmer.attach();
//console.log("I hate your guts".tokenizeAndStem())


// TOKENIZATION AND STEMMING -- BASE WORD DERIVATION
//console.log("How do I find information on committee meetings?".tokenizeAndStem());

// SIMILARITTY BETWEEN WORDS ( 3 RETURNED BECAUSE 3 CHARS DIFFER, -1 RETURNED BECAUSE STRINNG LENGTHS DIFFER )
//console.log(natural.HammingDistance("karolin", "kathrin", false));
//console.log(natural.HammingDistance("karolin", "kerstin", false));
//console.log(natural.HammingDistance("short string", "longer string", false));


// CLASSIFICATION -- GROUPING WORDS INTO ORGANIZED GROUPS
//var classifier = new natural.BayesClassifier();
//classifier.addDocument('i am long qqqq', 'buy');
//classifier.addDocument('buy the q\'s', 'buy');
//classifier.addDocument('short gold', 'sell');
//classifier.addDocument('sell gold', 'sell');
//classifier.train();

//console.log(classifier.classify('i am short silver'));
//console.log(classifier.classify('i am long copper'));


// SENTIENT ANALYSIS - OPINION MINING / EMOTION AI
var Analyzer = natural.SentimentAnalyzer;
var stemmer = natural.PorterStemmer;
var analyzer = new Analyzer("English", stemmer, "afinn");

// getSentiment expects an array of strings
//console.log(analyzer.getSentiment(["I", "don't", "want", "to", "play", "with", "you"]));
//console.log(analyzer.getSentiment(["I", "never", "want", "to", "play", "with", "you"]));
console.log(analyzer.getSentiment(myWords));
