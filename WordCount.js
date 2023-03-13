/**
Instructions
Given a phrase, count the occurrences of each word in that phrase.

For the purposes of this exercise you can expect that a word will always be one of:

A number composed of one or more ASCII digits (ie "0" or "1234") OR
A simple word composed of one or more ASCII letters (ie "a" or "they") OR
A contraction of two simple words joined by a single apostrophe (ie "it's" or "they're")
When counting words you can assume the following rules:

The count is case insensitive (ie "You", "you", and "YOU" are 3 uses of the same word)
The count is unordered; the tests will ignore how words and counts are ordered
Other than the apostrophe in a contraction all forms of punctuation are ignored
The words can be separated by any form of whitespace (ie "\t", "\n", " ")
For example, for the phrase
"That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled.
the count would be:
that's: 1
the: 2
password: 2
123: 1
cried: 1
special: 1
agent: 1
so: 1
i: 1
fled: 1
*/

let input = "\"That's the password: 'PASSWORD 123'!\", cried the Special Agent.\tSo I fled. Agent"
countWords(input);

function countWords(phrase) {

    // replace new-line and tab with space
    phrase = phrase.replace(/\n/, " ");
    phrase = phrase.replace(/\t/, " ");

    // remove all punctuations except a single-quote 
    phrase = phrase.replace(/[^\w\s\']|_/g, "");

    // remove all ' from non-contractions
    phrase = phrase.replace(/'\s/, " ");
    phrase = phrase.replace(/\s'/, " ");

    // count the frequencies
    const wordCount = new Map();
    let words = phrase.split(" ");
    for(let i=0; i<words.length; i++) {
        // console.log(words[i]);
        let word = words[i].toLowerCase();
        if(wordCount.has(word)) {
            wordCount.set(word, wordCount.get(word)+1);
        } else {
            wordCount.set(word, 1);
        }
    }
    for (let [key, value] of wordCount) {
        console.log(`${key} : ${value}`);
    }
    return wordCount;
}
