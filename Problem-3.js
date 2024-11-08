{
    function countWordOccurrences(sentence, word) {
        // Convert both sentence and word to lowercase to make the search case-insensitive
        var lowerCaseSentence = sentence.toLowerCase();
        var lowerCaseWord = word.toLowerCase();
        var regex = new RegExp("\\b".concat(lowerCaseWord, "\\b"), 'g');
        var matches = lowerCaseSentence.match(regex);
        return matches ? matches.length : 0;
    }
    console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
}
