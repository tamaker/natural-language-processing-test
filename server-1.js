// https://blog.logrocket.com/natural-language-processing-for-node-js/

var natural = require('natural');



const fs = require('fs')
let jsonData = JSON.parse(fs.readFileSync('./data/djt.json', 'utf-8'));
//console.log('Original Text reads: ' + jsonData[1].text);
//var twtTextString = jsonData[15].text;

//var twtTextString = "This is just testing."


// MAKE A CALL ...
//console.log(processLanguage(twtTextString, 'sentiment'));


// LOOP OVER HIS TWEETS AND SCORE THEM
var counter = 0;
var totalscore = 0;
jsonData.forEach(function(val){

        if (counter < 1000){
            twtTextString = val.text.split('http')[0].trim();
            var sentiment_score = processLanguage(twtTextString, 'sentiment');

            var thisScore = parseFloat(JSON.parse(sentiment_score)[0].retVal);

                if (thisScore < 0 || thisScore > 0){
                    //console.log(counter + ' --- ' + thisScore + ' --- ' + sentiment_score)
                
                
                    totalscore = totalscore + thisScore
                    console.log(totalscore.toFixed(2)  + ' --- ' + counter + ' --- ' + thisScore/* + ' --- ' + sentiment_score*/)
                    //console.log(totalscore);
                }
            counter++;
        }
        return;
})
console.log('Average Score of these ' + counter + ' tweets.... ' + totalscore / counter)


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
            //console.log(processAction)
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

            var wordsArray = tokenizer.tokenize(twtTextString);

            retVal = analyzer.getSentiment(wordsArray).toFixed(3);
    }


    

    return JSON.stringify(
        [
            {
                "retValType": processAction, 
                "retVal": retVal, 
                "originalText": twtTextString
            }
        ], null, 0
    );

}

