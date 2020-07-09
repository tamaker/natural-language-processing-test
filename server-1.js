// https://blog.logrocket.com/natural-language-processing-for-node-js/

var natural = require('natural');



const fs = require('fs')
let jsonData = JSON.parse(fs.readFileSync('./data/djt.json', 'utf-8'));
//console.log('Original Text reads: ' + jsonData[1].text);
//var twtTextString = jsonData[15].text;

var twtTextString = "This is just testing."



console.log(processLanguage(twtTextString, 'sentiment'));



function processLanguage(inputData, processAction){
    var retVal;


        if (processAction === 'tokenize'){
            console.log(processAction)
            // ACCEPTS TXT STRING / SENTENCE...
            // TOKENIZE - SPLIT WORDS
            var tokenizer = new natural.WordTokenizer();
            //var myWords = tokenizer.tokenize("Harry Styles is a great singer.");
            var myWords = tokenizer.tokenize(twtTextString)
            //console.log('Array of words is: ' + myWords.toString());

            retVal = myWords;
        }


        

        if (processAction === 'tokenizeAndStem'){
            console.log(processAction)
            // ACCEPTS TXT STRING / SENTENCE...
            // TOKENIZATION and stemming -- EACH WORD and root of word, no stop words
            //console.log("How do I find information on committee meetings?".tokenizeAndStem());
            natural.PorterStemmer.attach();
            //console.log("I hate your guts".tokenizeAndStem())
            //console.log('Tokenization and Stemming applied: ');
            //console.log(twtTextString.tokenizeAndStem() );

            retVal = twtTextString.tokenizeAndStem();
        }



                    if (processAction === 'stringDistance'){
                        // STRING DISTANCE
                        //console.log("How do I find information on committee meetings?".tokenizeAndStem());

                        // SIMILARITTY BETWEEN WORDS ( 3 RETURNED BECAUSE 3 CHARS DIFFER, -1 RETURNED BECAUSE STRINNG LENGTHS DIFFER )
                        //console.log(natural.HammingDistance("karolin", "kathrin", false));
                        //console.log(natural.HammingDistance("karolin", "kerstin", false));
                        //console.log(natural.HammingDistance("short string", "longer string", false));
                    }




                    if (processAction === 'classification'){
                        // CLASSIFICATION -- GROUPING WORDS INTO ORGANIZED GROUPS
                        //var classifier = new natural.BayesClassifier();
                        //classifier.addDocument('i am long qqqq', 'buy');
                        //classifier.addDocument('buy the q\'s', 'buy');
                        //classifier.addDocument('short gold', 'sell');
                        //classifier.addDocument('sell gold', 'sell');
                        //classifier.train();

                        //console.log(classifier.classify('i am short silver'));
                        //console.log(classifier.classify('i am long copper'));
                }




    if (processAction === 'sentiment'){
            console.log(processAction)
            // ACCEPTS ARRAY OF WORDS...
            // SENTIMENT ANALYSIS - OPINION MINING / EMOTION AI
            var Analyzer = natural.SentimentAnalyzer;
            var stemmer = natural.PorterStemmer;
            var analyzer = new Analyzer("English", stemmer, "afinn");

            // getSentiment expects an array of strings
            //console.log(analyzer.getSentiment(["I", "don't", "want", "to", "play", "with", "you"]));
            //console.log(analyzer.getSentiment(["I", "never", "want", "to", "play", "with", "you"]));
            // console.log('Sentient score: ' + analyzer.getSentiment(myWords));
                var tokenizer = new natural.WordTokenizer();
                //console.log(tokenizer.tokenize(twtTextString))
            //retval = analyzer.getSentiment(xxxxxx);
            return;
    }

    return {"reval": retVal};

}

