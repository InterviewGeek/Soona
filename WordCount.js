let input = "\"That's the password: 'PASSWORD 123'!\", cried the Special Agent.\tSo I fled. Agent"
wordCount(input);

function wordCount(phrase) {

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