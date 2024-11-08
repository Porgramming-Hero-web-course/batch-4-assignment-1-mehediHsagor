{


    function countWordOccurrences(sentence: string, word: string): number {
        // Convert both sentence and word to lowercase to make the search case-insensitive
        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();
      
     
        const regex = new RegExp(`\\b${lowerCaseWord}\\b`, 'g');
      
        const matches = lowerCaseSentence.match(regex);
        
        return matches ? matches.length : 0;
      }
      
      console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));  
      
}